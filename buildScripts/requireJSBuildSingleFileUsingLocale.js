({
    
      baseUrl: "../public/scripts"
    , mainConfigFile: "../public/scripts/config/requireConfig.js"
    , optimize: "none"
    // As we focus on workings of wrapShim, we are not interested in other modules, hence excluding those modules.
    , exclude:   [
                    "jquery"
                 ]
    , name : "exploringLocale"

    // Checkout the diff between including & not including locale config, by alternatively commenting the below config and executing it

    // ** Using default locale
    , out : "../buildSingleFile/exploringLocaleDefault.js"

    // ** Using specific locale
    // , out : "../buildSingleFile/exploringLocaleSpecific.js"
    // , locale: "ta-in"
  
})
