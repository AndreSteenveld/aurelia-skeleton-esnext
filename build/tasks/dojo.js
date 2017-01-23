var gulp = require('gulp');
var package_json = require( "../../package.json" );
var fs = require( "fs-extra" );
var path = require( "path" );
var run = require( "gulp-run" );

var 
    working_directory = __dirname,
    project_root = path.resolve( working_directory, "..", ".." ),
    
    
    node_modules   = path.resolve( project_root, "node_modules" ),
        
    dojo_package   = path.resolve( node_modules, "dojo" ),
    dijit_package  = path.resolve( node_modules, "dijit" ),
    dgrid_package  = path.resolve( node_modules, "dgrid" ),
    dstore_package = path.resolve( node_modules, "dojo-dstore" ),
    util_package   = path.resolve( node_modules, "dojo-util" ),
    
    
    dojo_build_direcory = path.resolve( project_root, "dojo" ),
    
    dojo_directory   = path.resolve( dojo_build_direcory, "dojo" ),
    dijit_directory  = path.resolve( dojo_build_direcory, "dijit" ),
    dgrid_directory  = path.resolve( dojo_build_direcory, "dgrid" ),
    dstore_directory = path.resolve( dojo_build_direcory, "dstore" ),
    util_directory   = path.resolve( dojo_build_direcory, "util" );

//
// Because I personally found it nearly impossible to get the dojo build system working properly we are going to "extract" it from
// the node modules directory and just hammer it out like this. We are going to make a dojo working directory which will have a the
// structure that the dojo-util package expects. (Without modifying the package it seems nearly impossible to convice it of anything)
// With this structure we can do a build and output that to the dist directory from which the rest of the build system will pick it
// up, bundle and export it.
// 
gulp.task( "dojo:link", function( ){
    
    fs.ensureDirSync( dojo_build_direcory );
    
    fs.ensureSymlinkSync( dojo_package, dojo_directory );
    fs.ensureSymlinkSync( dijit_package, dijit_directory );
    fs.ensureSymlinkSync( dgrid_package, dgrid_directory );
    fs.ensureSymlinkSync( dstore_package, dstore_directory );
    fs.ensureSymlinkSync( util_package, util_directory );
    
});

gulp.task( "dojo:build", function( ){
    
    return run( "npm run dojo-build" ).exec( );    
    
});
