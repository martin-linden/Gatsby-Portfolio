module.exports = {
	plugins: [
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`PT Serif`,
					`source sans pro\:300,400,400i,700` // you can also specify font weights and styles
				],
				display: 'swap'
			}
		}
	],
	siteMetadata: {
		title: `Gatsby Default`,
		description: `Kick off!.`,
		author: `@gatsbyjs`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},

		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`
				/* icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site. */
			}
		}
	]
};
