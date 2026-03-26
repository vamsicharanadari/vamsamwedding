/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#fdf5f6',
          100: '#f9e6e8',
          600: '#8a1f3d',
          700: '#6b132f',
          800: '#550f25',
          900: '#3a0a19'
        },
        gold: {
          100: '#fff7df',
          300: '#f2d37b',
          500: '#c9a14c',
          600: '#a68131'
        },
        ivory: {
          50: '#fffdf7',
          100: '#fcf7ea',
          200: '#f6eed9'
        },
        floral: {
          200: '#f4d9d6',
          500: '#ce8f8d'
        },
        emerald: {
          200: '#c9ddd3',
          700: '#1f4f3e'
        }
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 12px 30px rgba(106, 19, 47, 0.12)',
        premium: '0 18px 40px rgba(58, 10, 25, 0.12)'
      },
      backgroundImage: {
        'hero-overlay':
          'linear-gradient(120deg, rgba(58,10,25,0.85) 10%, rgba(31,79,62,0.34) 58%, rgba(201,161,76,0.32) 95%)',
        'lux-gradient': 'linear-gradient(135deg, rgba(255,253,247,1) 0%, rgba(252,247,234,1) 50%, rgba(244,217,214,0.7) 100%)'
      },
      keyframes: {
        'soft-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      },
      animation: {
        'soft-float': 'soft-float 5s ease-in-out infinite',
        shimmer: 'shimmer 2.8s linear infinite',
        'fade-up': 'fade-up 700ms ease-out both'
      }
    }
  },
  plugins: []
};
