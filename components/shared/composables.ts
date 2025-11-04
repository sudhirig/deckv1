import { ref, onMounted, Ref } from 'vue'

export function useAnimatedCounter(target: number, duration = 2000, delay = 0) {
  const count = ref(0)

  onMounted(() => {
    setTimeout(() => {
      const startTime = Date.now()
      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)

        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        count.value = Math.floor(target * easeOutQuart)

        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          count.value = target
        }
      }
      requestAnimationFrame(animate)
    }, delay)
  })

  return count
}

export function useIntersectionObserver(callback: () => void, options = {}) {
  const element: Ref<HTMLElement | null> = ref(null)

  onMounted(() => {
    if (!element.value) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback()
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1, ...options }
    )

    observer.observe(element.value)
  })

  return element
}

export function formatNumber(value: number, decimals = 0): string {
  if (value >= 1_000_000_000_000) {
    return `${(value / 1_000_000_000_000).toFixed(decimals)}T`
  }
  if (value >= 1_000_000_000) {
    return `${(value / 1_000_000_000).toFixed(decimals)}B`
  }
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(decimals)}M`
  }
  if (value >= 1_000) {
    return `${(value / 1_000).toFixed(decimals)}K`
  }
  return value.toFixed(decimals)
}

export function formatCurrency(value: number, compact = false): string {
  if (compact) {
    return `$${formatNumber(value, 1)}`
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

export function formatPercentage(value: number, decimals = 1): string {
  return `${value.toFixed(decimals)}%`
}
