export function SectionTitle({
  title,
  subtitle,
  highlight,
  align = 'center',
  className = '',
  size = 'lg',
}) {
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  const sizes = {
    sm: 'text-2xl md:text-3xl',
    md: 'text-3xl md:text-4xl',
    lg: 'text-4xl md:text-5xl',
    xl: 'text-5xl md:text-6xl',
  }

  return (
    <div className={`${alignments[align]} ${className}`}>
      {subtitle && (
        <p className="text-simois-orange font-medium text-sm tracking-widest uppercase mb-2">
          {subtitle}
        </p>
      )}
      <h2 className={`font-bebas ${sizes[size]} text-simois-dark`}>
        {title}
        {highlight && (
          <span className="text-simois-orange"> {highlight}</span>
        )}
      </h2>
    </div>
  )
}
