module.exports = function( grunt ) {
	grunt.initConfig({
		"connect": {
			"server": {
				"options": {
					hostname: "localhost",
					port: 6234,
					keepalive: true
				}
			},
			"corsServer": {
				"options": {
					hostname: "localhost",
					port: 4234,
					keepalive: true,
					middleware: function(connect, options, middlewares) {
									middlewares.push(function(req, res, next) {
										res.setHeader('Access-Control-Allow-Origin', '*');
										next();
									});
									return middlewares;
								}
					}
			},
			"ip": {
				"options": {
					hostname: "127.1.1.1",
					port: 6234,
					keepalive: true
				}
			}
		}
	});
	grunt.loadNpmTasks( "grunt-contrib-connect" );
	grunt.registerTask( "default", "connect" );
	grunt.registerTask( "corsServer", "connect:corsServer" );
	grunt.registerTask( "serverIp", "connect:ip" );
};