import type { Locale } from '@/lib/i18n'

/** The one page every style dresses: the twlworks homepage, so styles compare on identical content. */
export type SampleCopy = {
  brand: string
  links: string[]
  navCta: string
  eyebrow: string
  title: string
  lede: string
  primary: string
  secondary: string
  items: { title: string; text: string; tag: string }[]
  quote: string
  cite: string
  hours: string
}

export const sample: Record<Locale, SampleCopy> = {
  en: {
    brand: 'twlworks',
    links: ['Work', 'Services', 'About'],
    navCta: 'Contact',
    eyebrow: 'Web studio · Malaysia',
    title: 'Websites that bring in business.',
    lede: 'Websites and business systems for Malaysian SMEs: landing pages, online ordering, bookings and admin dashboards.',
    primary: 'Start a project',
    secondary: 'See the work',
    items: [
      { title: 'Landing pages', text: 'One clear page that turns visitors into enquiries.', tag: 'Websites' },
      { title: 'Online ordering', text: 'Menus, carts and WhatsApp orders in one flow.', tag: 'Ordering' },
      { title: 'Bookings & dashboards', text: 'Appointments, stock and sales in one admin.', tag: 'Systems' },
    ],
    quote: 'A website should earn its keep, not just look nice.',
    cite: 'How twlworks builds',
    hours: 'www.twlworks.com',
  },
  'zh-CN': {
    brand: 'twlworks',
    links: ['作品', '服务', '关于'],
    navCta: '联系',
    eyebrow: '网页工作室 · 马来西亚',
    title: '能带来生意的网站。',
    lede: '为马来西亚中小企业设计并开发网站和业务系统：品牌网页、线上点单、预约和管理后台。',
    primary: '开始一个项目',
    secondary: '看看作品',
    items: [
      { title: '品牌网页', text: '一个清楚的页面，把访客变成询问。', tag: '网站' },
      { title: '线上点单', text: '菜单、购物车和 WhatsApp 订单一条龙。', tag: '点单' },
      { title: '预约与后台', text: '预约、库存和销售集中在一个后台。', tag: '系统' },
    ],
    quote: '网站要能帮你赚钱，而不只是好看。',
    cite: 'twlworks 的做法',
    hours: 'www.twlworks.com',
  },
}
