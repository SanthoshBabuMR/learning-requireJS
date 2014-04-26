({
    baseUrl: "../public/scripts",
    mainConfigFile: "../public/scripts/config/requireConfig.js",
    dir: "../buildDir",
    optimize: "uglify",
    modules: [
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
})