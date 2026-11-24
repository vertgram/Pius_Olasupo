type TrackingParams = Record<string, string>

type DataLayerWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>
}

export function trackInteraction(event: string, params: TrackingParams) {
  if (typeof window === 'undefined') return

  const trackingWindow = window as DataLayerWindow
  trackingWindow.dataLayer = trackingWindow.dataLayer || []
  trackingWindow.dataLayer.push({ event, ...params })
}

export function getLinkText(target: HTMLAnchorElement) {
  return target.getAttribute('aria-label') || target.textContent?.trim() || ''
}
