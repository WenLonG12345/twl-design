import type { DesignStyle } from '@/lib/styles'
import warmEditorial from './warm-editorial'
import swissMinimal from './swiss-minimal'
import japaneseMinimal from './japanese-minimal'
import neoBrutalism from './neo-brutalism'
import glassmorphism from './glassmorphism'
import darkLuxury from './dark-luxury'
import bentoGrid from './bento-grid'
import retroY2K from './retro-y2k'
import playfulPastel from './playful-pastel'
import corporateTrust from './corporate-trust'
import organicNatural from './organic-natural'
import terminalDev from './terminal-dev'
import claymorphism from './claymorphism'
import newspaper from './newspaper'
import nanyangHeritage from './nanyang-heritage'

// To add a style: create styles/<slug>.ts, add it here, and give it a [data-style] block in components/StylePreview.module.css.
// The order here is the order on the page.
export const designStyles: DesignStyle[] = [warmEditorial, swissMinimal, japaneseMinimal, neoBrutalism, glassmorphism, darkLuxury, bentoGrid, retroY2K, playfulPastel, corporateTrust, organicNatural, terminalDev, claymorphism, newspaper, nanyangHeritage]

export const getStyle = (slug: string) => designStyles.find((s) => s.slug === slug)
