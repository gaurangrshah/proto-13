module.exports = {
  plugins: [
    require('prettier-plugin-tailwindcss') // must be the last item in the array.
 ],
  "pluginSearchDirs": false // disable auto-loading of plugins because of priority loading of plugins.
}
