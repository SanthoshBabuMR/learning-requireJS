({
	
  	  baseUrl: "../public/scripts"
    , mainConfigFile: "../public/scripts/config/configHelloWorld.js"
    , skipDirOptimize: true
    , optimize: "none"
    , out: "../buildSingleFile/foo.js"

    //Put in a mapping so that 'requireLib' in the
    //modules section below will refer to the require.js
    //contents.
    , paths: {
        requireLib: 'lib/require'
    }

    //Indicates the namespace to use for require/requirejs/define.
    , namespace: "foo"
    , include: ["requireLib", "helloWorld"]
    //True tells the optimizer it is OK to create
    //a new file foo.js. Normally the optimizer
    //wants foo.js to exist in the source directory.
    , create: true

})
