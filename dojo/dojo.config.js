var dojoConfig = {
    
    async: true,
        
    baseUrl: "dojo/",
        
    hasCache:{
        "host-browser":1,
        "dom":1,
        "dojo-amd-factory-scan":1,
        "dojo-loader":0,
        "dojo-has-api":1,
        "dojo-inject-api":1,
        "dojo-timeout-api":1,
        "dojo-trace-api":1,
        "dojo-log-api":1,
        "dojo-dom-ready-api":1,
        "dojo-publish-privates":0,
        "dojo-config-api":1,
        "dojo-sniff":1,
        "dojo-sync-loader":0,
        "dojo-test-sniff":0,
        "config-deferredInstrumentation":0,
        "config-tlmSiblingOfDojo":1,
        "dojo-requirejs-api": 1
    },
    
    trace:{
        // these are listed so it's simple to turn them on/off while debugging loading
        "loader-inject":0,
        "loader-define":0,
        "loader-exec-module":0,
        "loader-run-factory":0,
        "loader-finish-exec":0,
        "loader-define-module":0,
        "loader-circular-dependency":0,
        "loader-define-nonmodule":0
    },

    packages:[
        { "name" : "dojo",   location: "./dojo" },
        { "name" : "dijit",  location: "./dijit" },
        { "name" : "dgrid",  location: "./dgrid" },
        { "name" : "dstore", location: "./dstore" }
    ]

};
