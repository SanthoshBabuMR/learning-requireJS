({
    
      baseUrl: "../public/scripts"
    , mainConfigFile: "../public/scripts/config/requireConfig.js"
    , cssIn : "../public/css/modules/CustomgridAndNotes.css"

    // Checkout the different optimizeCss option, by alternatively commenting the below config and executing it

    // ** optimize: @import inlining and removal of comments, unnecessary whitespace and line returns.
    , out : "../buildSingleFile/CustomgridAndNotesStandard.css"
    , optimizeCss: "standard"

    // ** optimize: ike "standard" but keeps line returns.
    // , out : "../buildSingleFile/CustomgridAndNotesStandardKeepLines.css"
    // , optimizeCss: "standard.keepLines"

    // ** optimize: keeps the file comments, but removes line returns.
    // , out : "../buildSingleFile/CustomgridAndNotesStandardKeepComments.css"
    // , optimizeCss: "standard.keepComments"

    // ** optimize: keeps the file comments and line returns.
    // , out : "../buildSingleFile/CustomgridAndNotesStandardKeepCommentsKeepLines.css"
    // , optimizeCss: "standard.keepComments.keepLines"

    // ** optimize: like "standard" but keeps unnecessary whitespace.
    // , out : "../buildSingleFile/CustomgridAndNotesStandardKeepWhitespace.css"
    // , optimizeCss: "standard.keepWhitespace"

    // ** optimize: none
    // , out : "../buildSingleFile/CustomgridAndNotesNone.css"
    // , optimizeCss: "none"
    
})
