export function SectionTitle({
  title,
  subtitle,
  highlight,
  description,
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
        <p className="text-simois-orange font-semibold text-xs md:text-sm tracking-[0.15em] uppercase mb-3">
          {subtitle}
        </p>
      )}
      <h2 className={`font-bebas ${sizes[size]} text-simois-dark leading-tight`}>
        {title}
        {highlight && (
          <span className="text-simois-orange"> {highlight}</span>
        )}
      </h2>
      {description && (
        <p className={`text-simois-dark/60 mt-4 max-w-xl leading-relaxed text-sm md:text-base ${
          align === 'center' ? 'mx-auto' : ''
        }`}>
          {description}
        </p>
      )}
    </div>
  )
}
