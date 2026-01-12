var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KabupatenBerau_1 = new ol.format.GeoJSON();
var features_KabupatenBerau_1 = format_KabupatenBerau_1.readFeatures(json_KabupatenBerau_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KabupatenBerau_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KabupatenBerau_1.addFeatures(features_KabupatenBerau_1);
var lyr_KabupatenBerau_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KabupatenBerau_1, 
                style: style_KabupatenBerau_1,
                popuplayertitle: 'Kabupaten Berau',
                interactive: true,
    title: 'Kabupaten Berau<br />\
    <img src="styles/legend/KabupatenBerau_1_0.png" /> Batu Putih<br />\
    <img src="styles/legend/KabupatenBerau_1_1.png" /> Biatan<br />\
    <img src="styles/legend/KabupatenBerau_1_2.png" /> Biduk-Biduk<br />\
    <img src="styles/legend/KabupatenBerau_1_3.png" /> Gunung Tabur<br />\
    <img src="styles/legend/KabupatenBerau_1_4.png" /> Kelay<br />\
    <img src="styles/legend/KabupatenBerau_1_5.png" /> Maratua<br />\
    <img src="styles/legend/KabupatenBerau_1_6.png" /> Pulau Derawan<br />\
    <img src="styles/legend/KabupatenBerau_1_7.png" /> Sambaliung<br />\
    <img src="styles/legend/KabupatenBerau_1_8.png" /> Segah<br />\
    <img src="styles/legend/KabupatenBerau_1_9.png" /> Tabalar<br />\
    <img src="styles/legend/KabupatenBerau_1_10.png" /> Talisayan<br />\
    <img src="styles/legend/KabupatenBerau_1_11.png" /> Tanjung Redeb<br />\
    <img src="styles/legend/KabupatenBerau_1_12.png" /> Teluk Bayur<br />\
    <img src="styles/legend/KabupatenBerau_1_13.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_KabupatenBerau_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_KabupatenBerau_1];
lyr_KabupatenBerau_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDCPUM': 'KDCPUM', 'KDPPUM': 'KDPPUM', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_KabupatenBerau_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDPPUM': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_KabupatenBerau_1.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'header label - visible with data', 'FCODE': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'KDCPUM': 'inline label - always visible', 'KDPPUM': 'inline label - always visible', 'TIPADM': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WIADKC': 'inline label - always visible', 'SHAPE_Leng': 'inline label - always visible', 'SHAPE_Area': 'inline label - always visible', });
lyr_KabupatenBerau_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});