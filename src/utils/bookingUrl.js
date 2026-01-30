import { BOOKING_BASE_URL } from './constants'

// AgendaPro sucursal IDs for each location
const SUCURSAL_IDS = {
  'pocitos': '44341',
  'punta-carretas-1': null, // Add when available
  'punta-carretas-2': null, // Add when available
  'la-tahona': null, // Add when available
  'car-one': null, // Add when available
  'centro': null, // Add when available
}

/**
 * Build a booking URL with optional parameters for barber, location, and service
 * @param {Object} options - Booking options
 * @param {string} [options.barberoId] - Barber ID for booking with specific barber
 * @param {string} [options.localId] - Location ID for booking at specific location
 * @param {string} [options.servicioId] - Service ID for booking specific service
 * @returns {string} Complete booking URL
 */
export function buildBookingUrl({ barberoId, localId, servicioId } = {}) {
  let baseUrl = BOOKING_BASE_URL

  // If a localId is provided and we have a sucursal ID for it, use the sucursal URL
  if (localId && SUCURSAL_IDS[localId]) {
    baseUrl = `${BOOKING_BASE_URL}/sucursal/${SUCURSAL_IDS[localId]}`
  }

  const url = new URL(baseUrl)

  // Note: AgendaPro may use different query params - adjust as needed
  if (barberoId) {
    url.searchParams.set('barbero', barberoId)
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
