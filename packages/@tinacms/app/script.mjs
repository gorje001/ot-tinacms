// Seems like this is no longer necessary
import react from '@vitejs/plugin-react'
import path from 'path'
import { build, defineConfig, createServer } from 'vite'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import tailwind from 'tailwindcss'
import postcssNested from 'postcss-nested/index.js'
import tailwindNesting from 'tailwindcss/nesting/index.js'
import defaultTheme from 'tailwindcss/defaultTheme.js'
import twTypography from '@tailwindcss/typography'
import lineClamp from '@tailwindcss/line-clamp'
import aspectRatio from '@tailwindcss/aspect-ratio'

const __dirname = dirname(fileURLToPath(import.meta.url))
const pathToSchema = join(process.cwd(), '.tina', 'schema.tsx')
const tailwindContentPath = path.join(
  __dirname,
  'src/**/*.{vue,js,ts,jsx,tsx,svelte}'
)

/**
 *
 * This doesn't really do much right now, but if we start to
 * move stuff out of their packages and over to this app
 * we'll want to work with tina
 */
const twconfig = () => {
  return {
    important: '.tina-tailwind',
    theme: {
      columns: {
        auto: 'auto',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        '3xs': '256px',
        '2xs': '288px',
        xs: '320px',
        sm: '384px',
        md: '448px',
        lg: '512px',
        xl: '576px',
        '2xl': '672px',
        '3xl': '768px',
        '4xl': '896px',
        '5xl': '1024px',
        '6xl': '1152px',
        '7xl': '1280px',
      },
      spacing: {
        px: '1px',
        0: '0px',
        0.5: '2px',
        1: '4px',
        1.5: '6px',
        2: '8px',
        2.5: '10px',
        3: '12px',
        3.5: '14px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
        11: '44px',
        12: '48px',
        14: '56px',
        16: '64px',
        18: '72px',
        20: '80px',
        24: '96px',
        28: '114px',
        32: '128px',
        36: '144px',
        40: '160px',
        44: '176px',
        48: '192px',
        52: '208px',
        56: '224px',
        60: '240px',
        64: '256px',
        72: '288px',
        80: '320px',
        96: '384px',
      },
      borderRadius: {
        none: '0px',
        sm: '2px',
        DEFAULT: '4px',
        md: '6px',
        lg: '8px',
        xl: '12px',
        '2xl': '16px',
        '3xl': '24px',
        full: '9999px',
      },
      borderWidth: {
        DEFAULT: '1px',
        0: '0',
        2: '2px',
        3: '3px',
        4: '4px',
        6: '6px',
        8: '8px',
      },
      fontSize: {
        xs: ['13px', { lineHeight: '1.33' }],
        sm: ['14px', { lineHeight: '1.43' }],
        base: ['16px', { lineHeight: '1.5' }],
        md: ['16px', { lineHeight: '1.5' }],
        lg: ['18px', { lineHeight: '1.55' }],
        xl: ['20px', { lineHeight: '1.4' }],
        '2xl': ['24px', { lineHeight: '1.33' }],
        '3xl': ['30px', { lineHeight: '1.2' }],
        '4xl': ['36px', { lineHeight: '1.1' }],
        '5xl': ['48px', { lineHeight: '1' }],
        '6xl': ['60px', { lineHeight: '1' }],
        '7xl': ['72px', { lineHeight: '1' }],
        '8xl': ['96px', { lineHeight: '1' }],
        '9xl': ['128px', { lineHeight: '1' }],
      },
      opacity: {
        0: '0',
        5: '.05',
        7: '.07',
        10: '.1',
        15: '.15',
        20: '.2',
        25: '.25',
        30: '.3',
        40: '.4',
        50: '.5',
        60: '.6',
        70: '.7',
        75: '.75',
        80: '.8',
        90: '.9',
        100: '1',
      },
      zIndex: {
        '-1': -1,
        base: 9000,
        panel: 9400,
        menu: 9800,
        chrome: 10200,
        overlay: 10600,
        modal: 10800,
        0: 0,
        10: 10,
        20: 20,
        30: 30,
        40: 40,
        25: 25,
        50: 50,
        75: 75,
        100: 100,
        auto: 'auto',
      },
      extend: {
        scale: {
          97: '.97',
          103: '1.03',
        },
        transitionDuration: {
          0: '0ms',
          2000: '2000ms',
        },
        boxShadow: {
          xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
          outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        },
        colors: {
          blue: {
            50: '#DCEEFF',
            100: '#B4DBFF',
            200: '#85C5FE',
            300: '#4EABFE',
            400: '#2296fe',
            500: '#0084FF',
            600: '#0574e4',
            700: '#0D5DBD',
            800: '#144696',
            900: '#1D2C6C',
            1000: '#241748',
          },
          gray: {
            50: '#F6F6F9',
            100: '#EDECF3',
            150: '#E6E3EF',
            200: '#E1DDEC',
            250: '#C9C5D5',
            300: '#b2adbe',
            400: '#918c9e',
            500: '#716c7f',
            600: '#565165',
            700: '#433e52',
            800: '#363145',
            900: '#252336',
            1000: '#1c1b2e',
          },
          orange: {
            400: '#EB6337',
            500: '#EC4815',
            600: '#DC4419',
          },
        },
        fontFamily: {
          sans: ['Inter', ...defaultTheme.fontFamily.sans],
        },
        lineHeight: {
          3: '12px',
          4: '16px',
          5: '20px',
          6: '24px',
          7: '28px',
          8: '32px',
          9: '36px',
          10: '40px',
        },
        maxWidth: {
          form: '900px',
        },
      },
    },
    // We can probably make this a config, but ideally
    // it allows users who write custom components with tailwind
    // classes to compile those styles as well
    content: [tailwindContentPath, pathToSchema],
    plugins: [
      twTypography({ className: 'tina-prose' }),
      lineClamp,
      aspectRatio,
    ],
  }
}

export function pluginResolvePathToTina() {
  const moduleName = '../.tina/schema'

  return {
    name: 'my-plugin', // required, will show up in warnings and errors
    enforce: 'pre',
    resolveId(id) {
      if (id === moduleName) {
        return pathToSchema
      }
    },
  }
}

const config = defineConfig({
  root: __dirname,
  mode: 'development',
  base: '/tina/',
  plugins: [
    react(),
    pluginResolvePathToTina(),
    {
      name: 'vite-plugin-tina',
      config: (_, env) => {
        let plugins = []

        const tw = tailwind(twconfig(process.cwd()))
        plugins.push(tailwindNesting)
        plugins.push(postcssNested)
        plugins.push(tw)

        return {
          css: {
            postcss: {
              plugins,
            },
          },
        }
      },
    },
  ],
  define: {
    'process.env': {},
    'path.extname': null,
  },
  server: {
    hmr: {
      clientPort: 3000,
    },
    strictPort: true,
  },
  build: {
    sourcemap: true,
    outDir: join(process.cwd(), 'public', 'tina'),
    emptyOutDir: false,
  },
})

const serve = async (config) => {
  const server = await createServer({
    ...config,
  })
  await server.listen()
  await server.printUrls()
}

if (process.argv[2] === '--dev') {
  serve(config)
} else {
  build(config)
}
