const nextConfig = {
	eslint: {
	  ignoreDuringBuilds: true,
	},
	webpack: (config) => {
	  config.module.rules.push({
		test: /\.(mp4|webm)$/i,
		use: {
		  loader: "file-loader",
		  options: {
			publicPath: "/_next",
			name: "static/media/[name].[ext]",
		  },
		},
	  });
  
	  return config;
	},
  };
  
  module.exports = nextConfig;
  