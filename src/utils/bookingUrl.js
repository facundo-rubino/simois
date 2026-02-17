import { BOOKING_BASE_URL } from './constants'

// AgendaPro sucursal IDs for each location
const SUCURSAL_IDS = {
  'pocitos': '44341',
  'scoseria': '94609',
  '21set': '291668', 
  'la-tahona': '408554', 
  'car-one': '408547', 
  'centro': '401075', 
}

/**
 * Build a booking URL with optional parameters for barber, location, and service
 * @param {Object} options - Booking options
 * @param {string} [options.barberoId] - Barber ID for booking with specific barber
 * @param {string} [options.profesionalId] - Professional ID for direct professional booking
 * @param {string} [options.sucursalId] - Sucursal ID when using profesionalId
 * @param {string} [options.localId] - Location ID for booking at specific location
 * @param {string} [options.servicioId] - Service ID for booking specific service
 * @returns {string} Complete booking URL
 */
export function buildBookingUrl({ barberoId, profesionalId, sucursalId, localId, servicioId } = {}) {
  // If profesionalId is provided, use the direct professional URL
  if (profesionalId && sucursalId) {
    return `${BOOKING_BASE_URL}/sucursal/${sucursalId}/profesional/${profesionalId}`
  }

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
