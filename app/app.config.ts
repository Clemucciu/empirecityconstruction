export default defineAppConfig({
  ui: {
    colors: {
      primary: 'red',
      neutral: 'slate'
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted'
      }
    },
    icons: {
      search: 'i-lucide-land-plot',
      menu: 'i-lucide-layers',
      light: 'i-lucide-land-plot',
      dark: 'i-lucide-layers-2'
    }
  },
  seo: {
    siteName: 'Empire City Construction'
  },
  header: {
    title: '',
    to: '/',
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true
  },
  toc: {
    title: 'On this page',
  },
  icon: {
    mode: 'component'
  }
})
