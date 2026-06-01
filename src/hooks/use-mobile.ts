import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    let cancelled = false
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    queueMicrotask(() => {
      if (cancelled) return
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    })
    return () => {
      cancelled = true
      mql.removeEventListener("change", onChange)
    }
  }, [])

  return !!isMobile
}
