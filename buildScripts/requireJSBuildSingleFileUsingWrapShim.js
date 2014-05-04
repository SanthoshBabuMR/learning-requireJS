({
    
      baseUrl: "../public/scripts"
    , mainConfigFile: "../public/scripts/config/requireConfig.js"
    // As we focus on workings of wrapShim, we are not interested in other modules, hence excluding those modules.
    , exclude:   [
                    "jquery"
                 ]
    , optimize: "none"
    , name : "loadLegacyScript"

    // Checkout the different between wrapShim TRUE and FALSE, by alternatively commenting the below config and executing it

    // ** Enable wrapShim 
    , out : "../buildSingleFile/loadLegacyScriptTRUE.js"
    , wrapShim: true

    // ** Disable wrapShim
    // , out : "../buildSingleFile/loadLegacyScriptFALSE.js"
    // , wrapShim: false

})
