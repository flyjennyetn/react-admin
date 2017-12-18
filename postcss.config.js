module.exports = {
    parser:'postcss-scss',
    plugins: {
        'precss': {},
        'autoprefixer': {
            browsers: [
	            '>1%',
	            'last 4 versions',
	            'Firefox ESR',
	            'not ie < 9', // React doesn't support IE8 anyway
            ],
            flexbox: 'no-2009',
        },
        'postcss-pxtorem': {
            rootValue: 50,
            propWhiteList: [],
        }
    }
}