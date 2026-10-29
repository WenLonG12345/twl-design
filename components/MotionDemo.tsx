'use client'

import { demos } from '@/motions/demos.generated'

export default function MotionDemo({ slug, labels }: { slug: string; labels: Record<string, string> }) {
  const Demo = demos[slug]
  return Demo ? <Demo labels={labels} /> : null
}
