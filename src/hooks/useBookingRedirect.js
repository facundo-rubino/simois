import { useCallback } from 'react'
import { openBooking } from '../utils/bookingUrl'

/**
 * Hook for handling booking redirects
 * @returns {Object} Object with redirectToBooking function
 */
export function useBookingRedirect() {
  const redirectToBooking = useCallback((options = {}) => {
    openBooking(options)
  }, [])

  return { redirectToBooking }
}
