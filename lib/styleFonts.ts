import {
  Alfa_Slab_One,
  Archivo_Black,
  Bricolage_Grotesque,
  Cormorant_Garamond,
  DM_Sans,
  Fraunces,
  Fredoka,
  Hanken_Grotesk,
  Inter_Tight,
  JetBrains_Mono,
  Libre_Caslon_Text,
  Lora,
  Manrope,
  Nunito,
  Playfair_Display,
  Plus_Jakarta_Sans,
  Rubik_Mono_One,
  Shippori_Mincho,
  Space_Grotesk,
  Zen_Kaku_Gothic_New,
} from 'next/font/google'

// Each family exposes one CSS variable (--sf-*) that StylePreview.module.css maps to a style's display and body faces.
// next/font needs every call written out as a literal const. preload is off: a face downloads only once a preview uses it.

const fraunces = Fraunces({ subsets: ['latin'], display: 'swap', preload: false, variable: '--sf-fraunces', axes: ['SOFT', 'opsz'], style: ['normal', 'italic'] })
const hanken = Hanken_Grotesk({ subsets: ['latin'], display: 'swap', preload: false, variable: '--sf-hanken' })
const interTight = Inter_Tight({ subsets: ['latin'], display: 'swap', preload: false, variable: '--sf-inter-tight' })
const shippori = Shippori_Mincho({ subsets: ['latin'], display: 'swap', preload: false, variable: '--sf-shippori', weight: ['400', '500', '600'] })
const zenKaku = Zen_Kaku_Gothic_New({ subsets: ['latin'], display: 'swap', preload: false, variable: '--sf-zen-kaku', weight: ['400', '500', '700'] })
const archivoBlack = Archivo_Black({ subsets: ['latin'], display: 'swap', preload: false, variable: '--sf-archivo-black', weight: '400' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], display: 'swap', preload: false, variable: '--sf-space-grotesk' })
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], display: 'swap', preload: false, variable: '--sf-jakarta' })
const cormorant = Cormorant_Garamond({ subsets: ['latin'], display: 'swap', preload: false, variable: '--sf-cormorant', style: ['normal', 'italic'] })
const bricolage = Bricolage_Grotesque({ subsets: ['latin'], display: 'swap', preload: false, variable: '--sf-bricolage' })
const dmSans = DM_Sans({ subsets: ['latin'], display: 'swap', preload: false, variable: '--sf-dm-sans' })
const rubikMono = Rubik_Mono_One({ subsets: ['latin'], display: 'swap', preload: false, variable: '--sf-rubik-mono', weight: '400' })
const fredoka = Fredoka({ subsets: ['latin'], display: 'swap', preload: false, variable: '--sf-fredoka' })
const nunito = Nunito({ subsets: ['latin'], display: 'swap', preload: false, variable: '--sf-nunito' })
const manrope = Manrope({ subsets: ['latin'], display: 'swap', preload: false, variable: '--sf-manrope' })
const lora = Lora({ subsets: ['latin'], display: 'swap', preload: false, variable: '--sf-lora', style: ['normal', 'italic'] })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], display: 'swap', preload: false, variable: '--sf-jetbrains' })
const playfair = Playfair_Display({ subsets: ['latin'], display: 'swap', preload: false, variable: '--sf-playfair', style: ['normal', 'italic'] })
const caslon = Libre_Caslon_Text({ subsets: ['latin'], display: 'swap', preload: false, variable: '--sf-caslon', weight: ['400', '700'], style: ['normal', 'italic'] })
const alfaSlab = Alfa_Slab_One({ subsets: ['latin'], display: 'swap', preload: false, variable: '--sf-alfa-slab', weight: '400' })

/** Put on any element that renders a StylePreview, so every --sf-* variable is defined. */
export const styleFontVars = [fraunces, hanken, interTight, shippori, zenKaku, archivoBlack, spaceGrotesk, jakarta, cormorant, bricolage, dmSans, rubikMono, fredoka, nunito, manrope, lora, jetbrains, playfair, caslon, alfaSlab].map((f) => f.variable).join(' ')
