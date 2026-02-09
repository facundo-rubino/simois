import { Link } from 'react-router-dom'
import { useBookingRedirect } from '../../hooks/useBookingRedirect'

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  bookingOptions,
  className = '',
  disabled = false,
  fullWidth = false,
  ...props
}) {
  const { redirectToBooking } = useBookingRedirect()

  const baseStyles =
    'inline-flex items-center justify-center font-bebas tracking-wider uppercase transition-all duration-200 rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-simois-orange'

  const variants = {
    primary:
      'bg-simois-orange text-white hover:bg-simois-orange/85 active:scale-[0.97] shadow-sm hover:shadow-md',
    secondary:
      'bg-simois-bordo text-white hover:bg-simois-bordo/85 active:scale-[0.97] shadow-sm hover:shadow-md',
    outline:
      'border-2 border-simois-orange text-simois-orange hover:bg-simois-orange hover:text-white active:scale-[0.97]',
    'outline-white':
      'border-2 border-white/80 text-white hover:bg-white hover:text-simois-bordo active:scale-[0.97]',
    'outline-dark':
      'border-2 border-white/80 text-white hover:bg-white hover:text-simois-dark active:scale-[0.97]',
    ghost: 'text-simois-dark hover:text-simois-orange hover:bg-simois-orange/5',
    dark: 'bg-simois-dark text-white hover:bg-simois-dark/85 active:scale-[0.97] shadow-sm hover:shadow-md',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-3.5 text-lg gap-2',
  }

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`

  const handleClick = (e) => {
    if (bookingOptions !== undefined) {
      e.preventDefault()
      redirectToBooking(bookingOptions)
    } else if (onClick) {
      onClick(e)
    }
  }

  // External link
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
        {...props}
      >
        {children}
      </a>
    )
  }

  // Internal link (React Router)
  if (to) {
    return (
      <Link to={to} className={buttonClasses} {...props}>
        {children}
      </Link>
    )
  }

  // Button
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  )
}
