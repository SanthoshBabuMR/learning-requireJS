({
    
      baseUrl: "../public/scripts"
    , mainConfigFile: "../public/scripts/config/requireConfig.js"
    // As we focus on workings of wrapShim, we are not interested in other modules, hence excluding those modules.
    // , exclude:   [
    //                 "jquery"
    //              ]
    , name : "aSimpleFunctionDefinition"

    // Checkout the different Optimization modes, by alternatively commenting the below config and executing it

    // ** No Optimization
    , out : "../buildSingleFile/aSimpleFunctionDefinitionNoOptimization.js"
    , optimize: "none"

    // ** Optimize using uglify
    // , out : "../buildSingleFile/aSimpleFunctionDefinitionuglify.js"
    // , optimize: "uglify"

    // ** Optimize using uglify2
    // , out : "../buildSingleFile/aSimpleFunctionDefinitionuglify2.js"
    // , optimize: "uglify2"

})
