const languages = [
  {
    name: 'Cantonese',
    level: 'Native'
  },
  {
    name: 'Mandarin',
    level: 'Advanced'
  },
  {
    name: 'English',
    level: 'Intermediate'
  }
]

export default function Languages() {
  return (
    <article>
      <dl>
        {languages.map((item) => (
          <div key={item.name} className="flex not-last:mb-6 gap-x-2">
            <dt>
              <strong>{item.name}</strong>:{' '}
            </dt>
            <dd>{item.level}</dd>
          </div>
        ))}
      </dl>
    </article>
  )
}
