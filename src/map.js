import ol from "openlayers";

export class Map {
    
    map = null;
    
    attached( ){
        
        const map = this.map = new ol.Map({
        
            layers: [
                new ol.layer.Tile({ source: new ol.source.OSM() })
                // Add the geojson layer here
            ],
            target: 'map',
            view: new ol.View({
                // Set the view to a bounding box of the data
                center: [0, 0],
                zoom: 2
            })
        });
        
    }

}
