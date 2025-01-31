/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        border: 'rgb(var(--border) / <alpha-value>)',
        input: 'rgb(var(--input) / <alpha-value>)',
        ring: 'rgb(var(--ring) / <alpha-value>)',
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        primary: {
          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
          foreground: 'rgb(var(--primary-foreground) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--secondary) / <alpha-value>)',
          foreground: 'rgb(var(--secondary-foreground) / <alpha-value>)',
        },
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
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
          950: '#020617',
        },
        gradient: {
          start: {
            light: '#10b981',
            dark: '#065f46',
          },
          end: {
            light: '#0d9488',
            dark: '#134e4a',
          },
        },
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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-pattern': 'url("/grid-pattern.svg")',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 0.8 },
          '50%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
