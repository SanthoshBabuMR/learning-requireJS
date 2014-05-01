module.exports = function( grunt ) {
	grunt.initConfig({
		connect: {
			server: {
				// server begin
				options: {
					hostname: "localhost",
					port: 6234,
					keepalive: true
				}
				// server begin
			},
			nonCorsServer: {
				// nonCorsServer begin
				options: {
					hostname: "localhost",
					port: 5234,
					keepalive: true
				}
				// nonCorsServer end
			},
			corsServer: { // ref : http://memolog.org/2013/07/grunt-contrib-connect_with_cors.html
				// corsServer begin
				options: {
					hostname: "localhost",
					port: 4234,
					keepalive: true,
					middleware: function (connect, options) {
							      return [
							        function (req, res, next) {
							          res.setHeader('Access-Control-Allow-Origin', '*');
							          res.setHeader('Access-Control-Allow-Methods', '*');
							          next();
							        },
							        // Serve static files.
							        connect.static(options.base),
							        // Make empty directories browsable.
							        connect.directory(options.base)
							      ];
							    }
				}
				// corsServer end
			},
			ip: {
				// ip begin
				options: {
					hostname: "127.1.1.1",
					port: 6111,
					keepalive: true
				}
				// ip end
			}
		}
	});

	grunt.loadNpmTasks( "grunt-contrib-connect" );

	grunt.registerTask( "default", "connect" );
	grunt.registerTask( "nonCorsServer", "connect:nonCorsServer" );
	grunt.registerTask( "corsServer", "connect:corsServer" );
	grunt.registerTask( "serverIp", "connect:ip" );

	// grunt.registerTask( "startServers", ["connect", "connect:nonCorsServer", "connect:corsServer" ] );
};
