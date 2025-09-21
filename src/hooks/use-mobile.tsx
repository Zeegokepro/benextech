import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Use requestAnimationFrame to batch layout reads
    const updateMobileState = () => {
      requestAnimationFrame(() => {
        setIsMobile(mql.matches)
      })
    }
    
    // Set initial state using matchMedia to avoid reading innerWidth
    setIsMobile(mql.matches)
    
    // Listen for changes
    mql.addEventListener("change", updateMobileState)
    
    return () => mql.removeEventListener("change", updateMobileState)
  }, [])

  return !!isMobile
}
