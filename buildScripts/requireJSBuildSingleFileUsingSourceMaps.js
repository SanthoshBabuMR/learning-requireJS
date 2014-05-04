({
    
      baseUrl: "../public/scripts"
    , mainConfigFile: "../public/scripts/config/requireConfig.js"
    // As we focus on workings of wrapShim, we are not interested in other modules, hence excluding those modules.
    // , exclude:   [
    //                 "jquery"
    //              ]
    , name : "aSimpleObjectDefinition"
    
    // Checkout the diff between generateSourceMaps TRUE and FALSE, by alternatively commenting the below config and executing it

    // ** Enable source map generation
    , optimize: "uglify2"        // Currently only optimize: "uglify2" is supported when running in node
    , preserveLicenseComments: false
    , generateSourceMaps: true
    , out : "../buildSingleFile/aSimpleObjectDefinitionWithSourceMaps.js"


    // ** Disable source map generation
    // , optimize: "uglify2"     // Currently only optimize: "uglify2" is supported when running in node
    // , preserveLicenseComments: false
    // , generateSourceMaps: false
    // , out : "../buildSingleFile/aSimpleObjectDefinitionWithoutSourceMaps.js"
  
})
