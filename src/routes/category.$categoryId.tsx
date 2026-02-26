import { createFileRoute, Link, useParams } from '@tanstack/react-router'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getCategoryById, getToysByCategory } from '#/lib/api'
import type { Toy } from '#/lib/api'

export const Route = createFileRoute('/category/$categoryId')({
  component: CategoryPage,
  loader: async ({ params, context }) => {
    const [category, toys] = await Promise.all([
      context.queryClient.ensureQueryData({
        queryKey: ['category', params.categoryId],
        queryFn: () => getCategoryById(params.categoryId),
      }),
      context.queryClient.ensureQueryData({
        queryKey: ['toys', params.categoryId],
        queryFn: () => getToysByCategory(params.categoryId),
      }),
    ])

    if (!category) {
      throw new Error('Category not found')
    }

    return { category, toys }
  },
})

function CategoryPage() {
  const { categoryId } = useParams({ from: '/category/$categoryId' })

  const { data: category } = useSuspenseQuery({
    queryKey: ['category', categoryId],
    queryFn: () => getCategoryById(categoryId),
  })

  const { data: toys } = useSuspenseQuery({
    queryKey: ['toys', categoryId],
    queryFn: () => getToysByCategory(categoryId),
  })

  if (!category) {
    return (
      <div className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Category Not Found</h1>
          <Link
            to="/"
            className="text-amber-400 hover:text-amber-300 font-semibold"
          >
            ← Back to Categories
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <section className="relative py-12 px-6 overflow-hidden border-b border-slate-700">
        <div className="absolute inset-0 bg-linear-to-r from-amber-500/10 via-orange-500/10 to-red-500/10"></div>
        <div className="relative max-w-7xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors font-semibold mb-6"
          >
            ← Back to Categories
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{category.icon}</span>
            <h1 className="text-4xl md:text-5xl font-black text-white">
              {category.name}
            </h1>
          </div>
          <p className="text-lg text-gray-400 max-w-2xl">
            {category.description}
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        {toys.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-400 mb-4">No toys found in this category</p>
            <Link
              to="/"
              className="text-amber-400 hover:text-amber-300 font-semibold"
            >
              Browse other categories
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toys.map((toy: Toy) => (
              <div
                key={toy.id}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-linear-to-br from-slate-700 to-slate-600 flex items-center justify-center">
                  <span className="text-6xl">{category.icon}</span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {toy.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {toy.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-amber-400">
                      ${toy.price.toFixed(2)}
                    </span>
                    <button className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
