import { createFileRoute, Link } from '@tanstack/react-router'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getCategories } from '#/lib/api'

export const Route = createFileRoute('/')({
  component: CategoriesPage,
  loader: async ({ context }) => {
    return await context.queryClient.ensureQueryData({
      queryKey: ['categories'],
      queryFn: getCategories,
    })
  },
})

function CategoriesPage() {
  const { data: categories } = useSuspenseQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  })

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
      <section className="relative py-16 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-amber-500/10 via-orange-500/10 to-red-500/10"></div>
        <div className="relative max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-[-0.08em]">
            🎮 Come in to <span className="bg-linear-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">ToyShop</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2 font-light">
            Discover Amazing Toys for All Ages
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Browse our collection of toys across many categories and find the perfect gift
          </p>
        </div>
      </section>

      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/$categoryId`}
              params={{ categoryId: category.id }}
              className="group"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20 cursor-pointer h-full group-hover:bg-slate-800/80">
                <div className="text-6xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {category.description}
                </p>
                <div className="mt-6 text-amber-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Browse →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
