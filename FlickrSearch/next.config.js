// next.config.js
module.exports = {
  future: {
    webpack5: true,
  },
  images: {
    domains: ['live.staticflickr.com'],
  },
  plugins: [
    'tailwindcss',
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
  ],

}