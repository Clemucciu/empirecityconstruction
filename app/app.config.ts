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
      search: 'i-lucide-land-plot'
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
