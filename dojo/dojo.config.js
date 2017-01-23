var dojoConfig = {
    
    async: true,

    hasCache:{
        "host-browser":1,
        "dom":1,
        "dojo-amd-factory-scan":1,
        "dojo-loader":1,
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
        "config-tlmSiblingOfDojo":1
    },

    packages:[
        { "name" : "dojo",   location: "./dojo" },
        { "name" : "dijit",  location: "./dijit" },
        { "name" : "dgrid",  location: "./dgrid" },
        { "name" : "dstore", location: "./dstore" }
    ]

};
