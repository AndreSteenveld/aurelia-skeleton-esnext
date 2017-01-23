// Locate( load ): Overrides the location of the plugin resource
// Fetch( load, fetch ): Called with third argument representing default fetch function, has full control of fetch output.
// Translate: Returns the translated source from load.source, can also set load.metadata.sourceMap for full source maps support.
// Instantiate: Providing this hook as a promise or function allows the plugin to hook instantiate. Any return value becomes the defined custom module object for the plugin call.

function denormalize( System, url ){

    const
        reverse_map = Object
            .entries( System.map )
            .reduce(
                ( map, [ key, value ] ) => Object.assign( map, { [ value.split( ":" ).reverse( )[ 0 ] ] : key } )
                , Object.create( null )
            );

    const
        package_url = Object
            .keys( System.packages )
            .find( ( package_url ) => url.startsWith( package_url ) );

    const
        system_package_name = package_url.split( "/" ).reverse( )[ 0 ];

    const
        package_name = system_package_name; // reverse_map[ system_package_name ];

    const
        name = url
            .replace( package_url, package_name )
            .replace( ".js", "" );

    return name;

}


export function locate( load ){

    return denormalize( this, load.address );

};

export function fetch( load, fetch ){

    return "";

};

export function instantiate( load ){

    return new Promise( ( resolve, reject ) => {
        
        require( [ load.address ], resolve );

    });

};
