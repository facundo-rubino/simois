import { BOOKING_BASE_URL } from './constants'

/**
 * Build a booking URL with optional parameters for barber, location, and service
 * @param {Object} options - Booking options
 * @param {string} [options.barberoId] - Barber ID for booking with specific barber
 * @param {string} [options.localId] - Location ID for booking at specific location
 * @param {string} [options.servicioId] - Service ID for booking specific service
 * @returns {string} Complete booking URL
 */
export function buildBookingUrl({ barberoId, localId, servicioId } = {}) {
  const url = new URL(BOOKING_BASE_URL)

  if (barberoId) {
    url.searchParams.set('barbero', barberoId)
  }

  if (localId) {
    url.searchParams.set('local', localId)
  }

  if (servicioId) {
    url.searchParams.set('servicio', servicioId)
  }

  return url.toString()
}

/**
 * Open booking URL in new tab
 * @param {Object} options - Same as buildBookingUrl
 */
export function openBooking(options = {}) {
  const url = buildBookingUrl(options)
  window.open(url, '_blank', 'noopener,noreferrer')
}
