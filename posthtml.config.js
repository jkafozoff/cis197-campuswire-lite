/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
  plugins: [
    require('posthtml-include')({ root: 'frontend/src' }),
    require('posthtml-expressions')({}),
  ],
}
