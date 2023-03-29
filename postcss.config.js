const postcss = require('postcss')
const postcssNested = require('postcss-nested')

module.exports = {
	plugins: [
		require('postcss-import'),
		function (root, result) {
			root.walkAtRules('screen', rule => {
				rule.name = 'media'
				rule.params = `screen(${rule.params})`
			})

			root.walkAtRules('apply', rule => {
				rule.before(postcss.decl({ prop: '__apply', value: rule.params }))
				rule.remove()
			})

			postcss([postcssNested()]).process(root, result.opts).sync()

			root.walkDecls('__apply', decl => {
				decl.before(postcss.atRule({ name: 'apply', params: decl.value }))
				decl.remove()
			})

			return root
		},
		require('tailwindcss'),
		require('autoprefixer'),
	],
}
