dependencies = {
	
	
	//~/dev/dtk/util/buildscripts:./build.sh --dojoConfig ../../myapp/config.js --profile ../../myapp/app --release

	releaseDir: "../../../dist/",
	
	//Strip all console.* calls except console.warn and console.error. This is basically a work-around
	//for trac issue: http://bugs.dojotoolkit.org/ticket/6849 where Safari 3's console.debug seems
	//to be flaky to set up (apparently fixed in a webkit nightly).
	//But in general for a build, console.warn/error should be the only things to survive anyway.
	stripConsole: "normal",

	selectorEngine:"acme",

	layers: [
		{
			name: "dojo.js",
			dependencies: [
				"dojo.loadInit",
				"dojo.text",
				"dojo.i18n"
			]
		},
		{
			name: "../dijit/dijit.js",
			dependencies: [
				"dijit.dijit"
			]
		},
		{
			name: "../dijit/dijit-all.js",
			layerDependencies: [
				"../dijit/dijit.js"
			],
			dependencies: [
				"dijit.dijit-all"
			]
		},
		{
			name: "../dgrid/OnDemandGrid.js",
			dependencies: [ "dgrid.OnDemandGrid" ]
		}
	],

	prefixes: [
		[ "dijit", "../dijit" ],
		[ "dgrid", "../dgrid" ],
		[ "dstore", "../dstore" ]		
	]
};
