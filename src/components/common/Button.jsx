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
    'inline-flex items-center justify-center font-bebas tracking-wider uppercase transition-all duration-200 rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary:
      'bg-simois-orange text-white hover:bg-simois-orange/90 active:scale-[0.98]',
    secondary:
      'bg-simois-bordo text-white hover:bg-simois-bordo/90 active:scale-[0.98]',
    outline:
      'border-2 border-simois-orange text-simois-orange hover:bg-simois-orange hover:text-white',
    ghost: 'text-simois-dark hover:text-simois-orange hover:bg-simois-light/50',
    dark: 'bg-simois-dark text-white hover:bg-simois-dark/90 active:scale-[0.98]',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
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
