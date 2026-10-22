const stylePoints = [
  {
    title: 'Architecture First',
    description: 'I prioritize structure and data flow early so features stay scalable under growing requirements.'
  },
  {
    title: 'Performance by Default',
    description: 'I watch rendering cost, payload size, and user interaction speed from prototype to release.'
  },
  {
    title: 'Product Collaboration',
    description: 'I work with design and backend teams through clear trade-offs and implementation-focused communication.'
  }
]

export default function WorkingStyle() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stylePoints.map((item) => (
        <article key={item.title} className="rounded-2xl border border-zinc-200/80 bg-white p-5">
          <h3 className="text-base font-semibold text-zinc-900">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600">{item.description}</p>
        </article>
      ))}
    </div>
  )
}
