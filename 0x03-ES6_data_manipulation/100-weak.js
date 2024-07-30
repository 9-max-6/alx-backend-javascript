/**
 * A weak map of API endpoints and the number of calls made.
 */
export const apiCallTracker = new WeakMap();

/**
 * The maximum number of calls allowed for an API endpoint.
 */
const MAX_CALLS_ALLOWED = 5;

/**
 * Tracks the number of calls made to an API's endpoint.
 * @param {{
 *   protocol: String,
 *   name: String,
 * }} apiEndpoint - The endpoint to make a request to.
 */
export function trackApiCalls(apiEndpoint) {
  if (!apiCallTracker.has(apiEndpoint)) {
    apiCallTracker.set(apiEndpoint, 0);
  }
  apiCallTracker.set(apiEndpoint, apiCallTracker.get(apiEndpoint) + 1);
  if (apiCallTracker.get(apiEndpoint) >= MAX_CALLS_ALLOWED) {
    throw new Error("Endpoint load is high");
  }
}
