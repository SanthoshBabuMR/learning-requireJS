({
    
      baseUrl: "../public/scripts"
    , mainConfigFile: "../public/scripts/config/requireConfig.js"
    // As we focus on workings of wrapShim, we are not interested in other modules, hence excluding those modules.
    // , exclude:   [
    //                 "jquery"
    //              ]
    , name : "aSimpleFunctionDefinition"

    // Checkout the different uglify option ( with optimize set to "uglify" mode ), by alternatively commenting the below config and executing it

    // ** without explicitly setting the uglify2 option
    , out : "../buildSingleFile/aSimpleFunctionDefinitionUglify2.js"
    , optimize: "uglify2"

    // ** explicitly setting the uglify2 option(s)
    // , out : "../buildSingleFile/aSimpleFunctionDefinitionUglify2WithOptions.js"
    // , optimize: "uglify2"

    // // For possible values see:
    // // http://lisperator.net/uglifyjs/codegen
    // // http://lisperator.net/uglifyjs/compress
    // , uglify2: {
    //       indent_level: 2
    //     , comments: false
    //     , drop_debugger: true
    //     , dead_code: true
    //     , output: {
    //         beautify: true
    //     }
    //     , compress: {
    //           sequences: false
    //         , global_defs: {
    //             DEBUG: false
    //         }
    //     }
    //     , warnings: true
    //     , mangle: false
    // }

    
})
