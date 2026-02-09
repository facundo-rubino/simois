export function Card({
  children,
  className = '',
  hover = false,
  padding = 'md',
  rounded = 'lg',
  shadow = 'sm',
  border = false,
  ...props
}) {
  const paddings = {
    none: '',
    sm: 'p-3',
    md: 'p-4 md:p-6',
    lg: 'p-6 md:p-8',
  }

  const roundeds = {
    none: '',
    sm: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
  }

  const shadows = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  }

  const hoverClass = hover
    ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5'
    : ''

  const borderClass = border ? 'border border-gray-200/80' : ''

  return (
    <div
      className={`bg-white ${paddings[padding]} ${roundeds[rounded]} ${shadows[shadow]} ${hoverClass} ${borderClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
