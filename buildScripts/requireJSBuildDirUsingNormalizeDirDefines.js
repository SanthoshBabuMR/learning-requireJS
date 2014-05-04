({
    
      baseUrl: "../public/scripts"
    , paths: {
          "jquery": "lib/jquery-2.1.0"
        , "typeCheck": "modules/typeCheck"
        , "maths": "legacyModules/maths"
        , "aSimpleFunctionDefinition": "modules/aSimpleFunctionDefinition"
        , "oldModule": "modules/oldModule"
        , "colors": "modules/colors"
        , "loadLegacyScript": "modules/loadLegacyScript"

    }
    , modules: [
        {
            name: "loadLegacyScript"
        },
        {
            name: "aSimpleFunctionDefinition"
        },
        {
            name: "oldModule"
        }
    ]
    , dir: "../buildDir"

    // Checkout the different between normalizeDirDefines "skip" and "all", by alternatively commenting the below config and executing it
    // skipDirOptimize works in combination with optimize config, unless optimize doesn't equal none

    // ** Optimizing, but not dynamically loading later
    , optimize: "uglify2"
    , skipDirOptimize: false
    , normalizeDirDefines : "skip"

    // ** Optimizing later
    // , optimize: "uglify2"
    // , skipDirOptimize: false
    // , normalizeDirDefines : "all"
    
})
