({
    
      baseUrl: "../public/scripts"
    , mainConfigFile: "../public/scripts/config/requireConfig.js"
    , optimize: "none"
    , name : "loadingNonJsAssets"

    // ** inline text dependency ( i guess inlineText doesn't work with text! for http/https calls )
    , out : "../buildSingleFile/loadingNonJsAssetsInlineText.js"
    , inlineText: true
    
})
