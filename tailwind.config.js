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
          800: '#550f25'
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
        }
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 12px 30px rgba(106, 19, 47, 0.12)'
      },
      backgroundImage: {
        'hero-overlay':
          'linear-gradient(120deg, rgba(85,15,37,0.78) 10%, rgba(201,161,76,0.32) 85%)'
      }
    }
  },
  plugins: []
};
