({
    
      baseUrl: "../public/scripts"
    , mainConfigFile: "../public/scripts/config/configNamedModule.js"
    , modules: [
        {
            name: "namedModule"
        }
    ]
    , dir: "../buildDir"

    // Checkout the different between skipDirOptimize TRUE and FALSE, by alternatively commenting the below config and executing it
    // skipDirOptimize works in combination with optimize config, unless optimize doesn't equal none

    // ** Enable skipDirOptimize
    , optimize: "uglify2"
    , skipDirOptimize : true

    // ** Disable skipDirOptimize
    // , optimize: "uglify2"
    // , skipDirOptimize : false
    
})
