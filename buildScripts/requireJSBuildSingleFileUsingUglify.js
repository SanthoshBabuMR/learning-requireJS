({
    
      baseUrl: "../public/scripts"
    , mainConfigFile: "../public/scripts/config/requireConfig.js"
    // As we focus on workings of wrapShim, we are not interested in other modules, hence excluding those modules.
    // , exclude:   [
    //                 "jquery"
    //              ]
    , name : "aSimpleFunctionDefinition"

    // Checkout the different uglify option ( with optimize set to "uglify" mode ), by alternatively commenting the below config and executing it

    // ** without explicitly setting the uglify option
    , out : "../buildSingleFile/aSimpleFunctionDefinitionUglify.js"
    , optimize: "uglify"

    // ** explicitly setting the uglify option(s)
    // , out : "../buildSingleFile/aSimpleFunctionDefinitionUglifyWithOptions.js"
    // , optimize: "uglify"
    
    // // See https://github.com/mishoo/UglifyJS for the possible values.
    // , uglify: {
    //       toplevel: true
    //     , ascii_only: true
    //     , beautify: true
    //     , max_line_length: 300

    //     //Custom value supported by r.js but done differently
    //     //in uglifyjs directly:
    //     //Skip the processor.ast_mangle() part of the uglify call (r.js 2.0.5+)
    //     , no_mangle: true
    // }

    
})
