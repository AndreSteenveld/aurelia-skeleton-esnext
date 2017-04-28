
export class App {
    
    configureRouter( config, router ){
    
        this.router  = router;

        config.title = "GeoJson viewer";

        config.map([
            {
                route : "/:id?",
                name  : "map",
                viewPorts: {
                    map  : { moduleId: "./map" },
                    list : { moduleId: "./list" },
                }
            },
        ]);
        
    }
    
}
