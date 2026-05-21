var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_lab1_1 = new ol.format.GeoJSON();
var features_lab1_1 = format_lab1_1.readFeatures(json_lab1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1_1.addFeatures(features_lab1_1);
var lyr_lab1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab1_1, 
                style: style_lab1_1,
                popuplayertitle: 'lab1',
                interactive: false,
                title: '<img src="styles/legend/lab1_1.png" /> lab1'
            });
var format_highway_point_2 = new ol.format.GeoJSON();
var features_highway_point_2 = format_highway_point_2.readFeatures(json_highway_point_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_point_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_point_2.addFeatures(features_highway_point_2);
var lyr_highway_point_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_point_2, 
                style: style_highway_point_2,
                popuplayertitle: 'highway_point',
                interactive: false,
                title: '<img src="styles/legend/highway_point_2.png" /> highway_point'
            });
var format_highway_line_3 = new ol.format.GeoJSON();
var features_highway_line_3 = format_highway_line_3.readFeatures(json_highway_line_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_line_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_line_3.addFeatures(features_highway_line_3);
var lyr_highway_line_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_line_3, 
                style: style_highway_line_3,
                popuplayertitle: 'highway_line',
                interactive: false,
                title: '<img src="styles/legend/highway_line_3.png" /> highway_line'
            });
var format_building_polygon_4 = new ol.format.GeoJSON();
var features_building_polygon_4 = format_building_polygon_4.readFeatures(json_building_polygon_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_polygon_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_polygon_4.addFeatures(features_building_polygon_4);
var lyr_building_polygon_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_polygon_4, 
                style: style_building_polygon_4,
                popuplayertitle: 'building_polygon',
                interactive: false,
                title: '<img src="styles/legend/building_polygon_4.png" /> building_polygon'
            });
var format_building_line_5 = new ol.format.GeoJSON();
var features_building_line_5 = format_building_line_5.readFeatures(json_building_line_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_line_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_line_5.addFeatures(features_building_line_5);
var lyr_building_line_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_line_5, 
                style: style_building_line_5,
                popuplayertitle: 'building_line',
                interactive: false,
                title: '<img src="styles/legend/building_line_5.png" /> building_line'
            });

lyr_OSMStandard_0.setVisible(true);lyr_lab1_1.setVisible(true);lyr_highway_point_2.setVisible(true);lyr_highway_line_3.setVisible(true);lyr_building_polygon_4.setVisible(true);lyr_building_line_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_lab1_1,lyr_highway_point_2,lyr_highway_line_3,lyr_building_polygon_4,lyr_building_line_5];
lyr_lab1_1.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_highway_point_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'ford': 'ford', 'bench': 'bench', 'public_transport': 'public_transport', 'bus': 'bus', 'crossing': 'crossing', 'name:ru': 'name:ru', 'name': 'name', 'motorcar': 'motorcar', 'foot': 'foot', 'bicycle': 'bicycle', 'railway': 'railway', 'tower:type': 'tower:type', 'power': 'power', 'material': 'material', 'barrier': 'barrier', 'access': 'access', });
lyr_highway_line_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'lit': 'lit', 'tracktype': 'tracktype', 'description': 'description', 'footway': 'footway', 'ford': 'ford', 'depth': 'depth', 'oneway': 'oneway', 'man_made': 'man_made', 'smoothness': 'smoothness', 'railway': 'railway', 'ref': 'ref', 'old_ref': 'old_ref', 'name': 'name', 'lanes': 'lanes', 'bicycle': 'bicycle', 'access': 'access', 'ramp': 'ramp', 'incline': 'incline', 'handrail': 'handrail', 'foot': 'foot', 'service': 'service', 'surface': 'surface', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_building_polygon_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'tourism': 'tourism', 'addr:street': 'addr:street', 'description': 'description', 'religion': 'religion', 'training': 'training', 'sport': 'sport', 'leisure': 'leisure', 'waterway': 'waterway', 'voltage': 'voltage', 'substation': 'substation', 'power': 'power', 'operator': 'operator', 'location': 'location', 'gas_insulated': 'gas_insulated', 'frequency': 'frequency', 'branch': 'branch', 'addr:place': 'addr:place', 'name:ru': 'name:ru', 'amenity': 'amenity', 'shop': 'shop', 'building:levels': 'building:levels', 'type': 'type', 'name': 'name', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'address': 'address', });
lyr_building_line_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'addr:postcode': 'addr:postcode', 'addr:city': 'addr:city', 'building:part': 'building:part', });
lyr_lab1_1.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_highway_point_2.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'ford': '', 'bench': '', 'public_transport': '', 'bus': '', 'crossing': '', 'name:ru': '', 'name': '', 'motorcar': '', 'foot': '', 'bicycle': '', 'railway': '', 'tower:type': '', 'power': '', 'material': '', 'barrier': '', 'access': '', });
lyr_highway_line_3.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'lit': 'TextEdit', 'tracktype': 'TextEdit', 'description': 'TextEdit', 'footway': 'TextEdit', 'ford': 'TextEdit', 'depth': 'TextEdit', 'oneway': 'TextEdit', 'man_made': 'TextEdit', 'smoothness': 'TextEdit', 'railway': 'TextEdit', 'ref': 'TextEdit', 'old_ref': 'TextEdit', 'name': 'TextEdit', 'lanes': 'TextEdit', 'bicycle': 'TextEdit', 'access': 'TextEdit', 'ramp': 'TextEdit', 'incline': 'TextEdit', 'handrail': 'TextEdit', 'foot': 'TextEdit', 'service': 'TextEdit', 'surface': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_building_polygon_4.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'tourism': 'TextEdit', 'addr:street': 'TextEdit', 'description': 'TextEdit', 'religion': 'TextEdit', 'training': 'TextEdit', 'sport': 'TextEdit', 'leisure': 'TextEdit', 'waterway': 'TextEdit', 'voltage': 'TextEdit', 'substation': 'TextEdit', 'power': 'TextEdit', 'operator': 'TextEdit', 'location': 'TextEdit', 'gas_insulated': 'TextEdit', 'frequency': 'TextEdit', 'branch': 'TextEdit', 'addr:place': 'TextEdit', 'name:ru': 'TextEdit', 'amenity': 'TextEdit', 'shop': 'TextEdit', 'building:levels': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:city': 'TextEdit', 'address': 'TextEdit', });
lyr_building_line_5.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:city': 'TextEdit', 'building:part': 'TextEdit', });
lyr_lab1_1.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_highway_point_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'ford': 'no label', 'bench': 'no label', 'public_transport': 'no label', 'bus': 'no label', 'crossing': 'no label', 'name:ru': 'no label', 'name': 'no label', 'motorcar': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'railway': 'no label', 'tower:type': 'no label', 'power': 'no label', 'material': 'no label', 'barrier': 'no label', 'access': 'no label', });
lyr_highway_line_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'lit': 'no label', 'tracktype': 'no label', 'description': 'no label', 'footway': 'no label', 'ford': 'no label', 'depth': 'no label', 'oneway': 'no label', 'man_made': 'no label', 'smoothness': 'no label', 'railway': 'no label', 'ref': 'no label', 'old_ref': 'no label', 'name': 'no label', 'lanes': 'no label', 'bicycle': 'no label', 'access': 'no label', 'ramp': 'no label', 'incline': 'no label', 'handrail': 'no label', 'foot': 'no label', 'service': 'no label', 'surface': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_building_polygon_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'tourism': 'no label', 'addr:street': 'no label', 'description': 'no label', 'religion': 'no label', 'training': 'no label', 'sport': 'no label', 'leisure': 'no label', 'waterway': 'no label', 'voltage': 'no label', 'substation': 'no label', 'power': 'no label', 'operator': 'no label', 'location': 'no label', 'gas_insulated': 'no label', 'frequency': 'no label', 'branch': 'no label', 'addr:place': 'no label', 'name:ru': 'no label', 'amenity': 'no label', 'shop': 'no label', 'building:levels': 'no label', 'type': 'no label', 'name': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'address': 'no label', });
lyr_building_line_5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'addr:postcode': 'no label', 'addr:city': 'no label', 'building:part': 'no label', });
lyr_building_line_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});