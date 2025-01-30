/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      backgroundColor: {
        dark: {
          DEFAULT: '#0f172a',
          paper: '#1e293b',
        }
      },
      textColor: {
        dark: {
          primary: '#f8fafc',
          secondary: '#cbd5e1',
          disabled: '#64748b',
        }
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#334155', // slate-700
            h1: {
              color: '#0f172a', // slate-900
              fontWeight: '700',
            },
            h2: {
              color: '#0f172a',
              fontWeight: '600',
              marginTop: '2em',
            },
            h3: {
              color: '#0f172a',
              fontWeight: '600',
              marginTop: '1.5em',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            code: {
              color: '#10b981', // emerald-500
              backgroundColor: '#f1f5f9', // slate-100
              borderRadius: '0.25rem',
              padding: '0.2em 0.4em',
            },
            pre: {
              backgroundColor: '#f8fafc', // slate-50
              color: '#334155', // slate-700
              borderRadius: '0.5rem',
              padding: '1em',
            },
            a: {
              color: '#10b981', // emerald-500
              textDecoration: 'none',
              '&:hover': {
                color: '#059669', // emerald-600
              },
            },
            blockquote: {
              borderLeftColor: '#10b981', // emerald-500
              backgroundColor: '#f0fdf4', // emerald-50
              padding: '1em',
              borderRadius: '0.5rem',
              fontStyle: 'normal',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
