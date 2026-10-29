'use client'

// Runs before paint (inlined in <head>) so a saved choice never flashes the wrong theme.
export const themeScript = `try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}`

const current = () =>
  (document.documentElement.dataset.theme as 'light' | 'dark' | undefined) ??
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

export default function ThemeToggle({ labels }: { labels: { toDark: string; toLight: string } }) {
  const toggle = () => {
    const next = current() === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('theme', next)
    } catch {}
  }

  // Both icons render; CSS shows the one for the active theme, so server and client markup match.
  return (
    <button type="button" className="themetoggle" onClick={toggle}>
      <span className="themetoggle__to-dark">
        <span className="sr-only">{labels.toDark}</span>
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <path d="M16.5 12.2A7 7 0 0 1 7.8 3.5a7 7 0 1 0 8.7 8.7Z" fill="currentColor" />
        </svg>
      </span>
      <span className="themetoggle__to-light">
        <span className="sr-only">{labels.toLight}</span>
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <circle cx="10" cy="10" r="3.6" fill="currentColor" />
          <path
            d="M10 1.8v2.2M10 16v2.2M1.8 10H4M16 10h2.2M4.2 4.2l1.6 1.6M14.2 14.2l1.6 1.6M4.2 15.8l1.6-1.6M14.2 5.8l1.6-1.6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </button>
  )
}
