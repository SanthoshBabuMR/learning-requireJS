({

      baseUrl: "../public/scripts"
    , mainConfigFile: "../public/scripts/config/requireConfig.js"
    , paths: {
        // CORS Server request
          "corstxt" : "empty:"
        , "corshtml" : "empty:"
        , "corscss" : "empty:"
        , "corsjson" : "empty:"

        // Non-CORS server request
        , "noncorstxt" : "empty:"
        , "noncorshtml" : "empty:"
        , "noncorscss" : "empty:"
        , "noncorsjson" : "empty:"
    }
    , dir: "../buildDir"
    , optimize: "uglify"
    , modules: [
        {
            name: 'aSimpleFunctionDefinition'
        },
        {
            name: 'aSimpleObjectDefinition'
        },
        {
            name: 'circularDependency'
        },
        {
            name: 'exploringBundles'
        },
        {
            name: 'helloWorld'
        },
        {
            name: 'moduleA'
        },
        {
            name: 'moduleB'
        },
        {
            name: 'namedModule'
        },
        {
            name: 'newModule'
        },
        {
            name: 'oldModule'
        },
        {
            name: 'relativePathLoading'
        }
    ]
    , skipDirOptimize: true
    // , "keepBuildDir": true

})