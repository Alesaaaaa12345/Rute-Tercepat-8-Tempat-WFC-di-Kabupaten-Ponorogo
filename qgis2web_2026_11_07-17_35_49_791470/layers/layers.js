var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_TitikAsal_1 = new ol.format.GeoJSON();
var features_TitikAsal_1 = format_TitikAsal_1.readFeatures(json_TitikAsal_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikAsal_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikAsal_1.addFeatures(features_TitikAsal_1);
var lyr_TitikAsal_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikAsal_1, 
                style: style_TitikAsal_1,
                popuplayertitle: 'Titik Asal',
                interactive: true,
                title: '<img src="styles/legend/TitikAsal_1.png" /> Titik Asal'
            });
var format_titik_wfc_ponorogo_2 = new ol.format.GeoJSON();
var features_titik_wfc_ponorogo_2 = format_titik_wfc_ponorogo_2.readFeatures(json_titik_wfc_ponorogo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_titik_wfc_ponorogo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titik_wfc_ponorogo_2.addFeatures(features_titik_wfc_ponorogo_2);
var lyr_titik_wfc_ponorogo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_titik_wfc_ponorogo_2, 
                style: style_titik_wfc_ponorogo_2,
                popuplayertitle: 'titik_wfc_ponorogo',
                interactive: true,
                title: '<img src="styles/legend/titik_wfc_ponorogo_2.png" /> titik_wfc_ponorogo'
            });
var format_RuteWFC7ConnectCafe_3 = new ol.format.GeoJSON();
var features_RuteWFC7ConnectCafe_3 = format_RuteWFC7ConnectCafe_3.readFeatures(json_RuteWFC7ConnectCafe_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteWFC7ConnectCafe_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteWFC7ConnectCafe_3.addFeatures(features_RuteWFC7ConnectCafe_3);
var lyr_RuteWFC7ConnectCafe_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteWFC7ConnectCafe_3, 
                style: style_RuteWFC7ConnectCafe_3,
                popuplayertitle: 'Rute WFC 7 Connect Cafe',
                interactive: true,
                title: '<img src="styles/legend/RuteWFC7ConnectCafe_3.png" /> Rute WFC 7 Connect Cafe'
            });
var format_RuteWFC6LUME_4 = new ol.format.GeoJSON();
var features_RuteWFC6LUME_4 = format_RuteWFC6LUME_4.readFeatures(json_RuteWFC6LUME_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteWFC6LUME_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteWFC6LUME_4.addFeatures(features_RuteWFC6LUME_4);
var lyr_RuteWFC6LUME_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteWFC6LUME_4, 
                style: style_RuteWFC6LUME_4,
                popuplayertitle: 'Rute WFC 6 LUME',
                interactive: true,
                title: '<img src="styles/legend/RuteWFC6LUME_4.png" /> Rute WFC 6 LUME'
            });
var format_RuteWFC1KopiKenangan_5 = new ol.format.GeoJSON();
var features_RuteWFC1KopiKenangan_5 = format_RuteWFC1KopiKenangan_5.readFeatures(json_RuteWFC1KopiKenangan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteWFC1KopiKenangan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteWFC1KopiKenangan_5.addFeatures(features_RuteWFC1KopiKenangan_5);
var lyr_RuteWFC1KopiKenangan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteWFC1KopiKenangan_5, 
                style: style_RuteWFC1KopiKenangan_5,
                popuplayertitle: 'Rute WFC 1 Kopi Kenangan',
                interactive: true,
                title: '<img src="styles/legend/RuteWFC1KopiKenangan_5.png" /> Rute WFC 1 Kopi Kenangan'
            });
var format_RuteWFC4KALACafe_6 = new ol.format.GeoJSON();
var features_RuteWFC4KALACafe_6 = format_RuteWFC4KALACafe_6.readFeatures(json_RuteWFC4KALACafe_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteWFC4KALACafe_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteWFC4KALACafe_6.addFeatures(features_RuteWFC4KALACafe_6);
var lyr_RuteWFC4KALACafe_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteWFC4KALACafe_6, 
                style: style_RuteWFC4KALACafe_6,
                popuplayertitle: 'Rute WFC 4 KALA Cafe',
                interactive: true,
                title: '<img src="styles/legend/RuteWFC4KALACafe_6.png" /> Rute WFC 4 KALA Cafe'
            });
var format_RuteWFC3AshavinCoffeeSpace_7 = new ol.format.GeoJSON();
var features_RuteWFC3AshavinCoffeeSpace_7 = format_RuteWFC3AshavinCoffeeSpace_7.readFeatures(json_RuteWFC3AshavinCoffeeSpace_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteWFC3AshavinCoffeeSpace_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteWFC3AshavinCoffeeSpace_7.addFeatures(features_RuteWFC3AshavinCoffeeSpace_7);
var lyr_RuteWFC3AshavinCoffeeSpace_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteWFC3AshavinCoffeeSpace_7, 
                style: style_RuteWFC3AshavinCoffeeSpace_7,
                popuplayertitle: 'Rute WFC 3 Ashavin Coffee Space',
                interactive: true,
                title: '<img src="styles/legend/RuteWFC3AshavinCoffeeSpace_7.png" /> Rute WFC 3 Ashavin Coffee Space'
            });
var format_RuteWFC5HACACoffee_8 = new ol.format.GeoJSON();
var features_RuteWFC5HACACoffee_8 = format_RuteWFC5HACACoffee_8.readFeatures(json_RuteWFC5HACACoffee_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteWFC5HACACoffee_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteWFC5HACACoffee_8.addFeatures(features_RuteWFC5HACACoffee_8);
var lyr_RuteWFC5HACACoffee_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteWFC5HACACoffee_8, 
                style: style_RuteWFC5HACACoffee_8,
                popuplayertitle: 'Rute WFC 5 HACA Coffee',
                interactive: true,
                title: '<img src="styles/legend/RuteWFC5HACACoffee_8.png" /> Rute WFC 5 HACA Coffee'
            });
var format_RuteWFC2TOMOROCoffee_9 = new ol.format.GeoJSON();
var features_RuteWFC2TOMOROCoffee_9 = format_RuteWFC2TOMOROCoffee_9.readFeatures(json_RuteWFC2TOMOROCoffee_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteWFC2TOMOROCoffee_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteWFC2TOMOROCoffee_9.addFeatures(features_RuteWFC2TOMOROCoffee_9);
var lyr_RuteWFC2TOMOROCoffee_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteWFC2TOMOROCoffee_9, 
                style: style_RuteWFC2TOMOROCoffee_9,
                popuplayertitle: 'Rute WFC 2 TOMORO Coffee',
                interactive: true,
                title: '<img src="styles/legend/RuteWFC2TOMOROCoffee_9.png" /> Rute WFC 2 TOMORO Coffee'
            });
var format_RuteWFC8Banda72CoffeeShop_10 = new ol.format.GeoJSON();
var features_RuteWFC8Banda72CoffeeShop_10 = format_RuteWFC8Banda72CoffeeShop_10.readFeatures(json_RuteWFC8Banda72CoffeeShop_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteWFC8Banda72CoffeeShop_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteWFC8Banda72CoffeeShop_10.addFeatures(features_RuteWFC8Banda72CoffeeShop_10);
var lyr_RuteWFC8Banda72CoffeeShop_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteWFC8Banda72CoffeeShop_10, 
                style: style_RuteWFC8Banda72CoffeeShop_10,
                popuplayertitle: 'Rute WFC 8 Banda 72 Coffee Shop',
                interactive: true,
                title: '<img src="styles/legend/RuteWFC8Banda72CoffeeShop_10.png" /> Rute WFC 8 Banda 72 Coffee Shop'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_TitikAsal_1.setVisible(true);lyr_titik_wfc_ponorogo_2.setVisible(true);lyr_RuteWFC7ConnectCafe_3.setVisible(true);lyr_RuteWFC6LUME_4.setVisible(true);lyr_RuteWFC1KopiKenangan_5.setVisible(true);lyr_RuteWFC4KALACafe_6.setVisible(true);lyr_RuteWFC3AshavinCoffeeSpace_7.setVisible(true);lyr_RuteWFC5HACACoffee_8.setVisible(true);lyr_RuteWFC2TOMOROCoffee_9.setVisible(true);lyr_RuteWFC8Banda72CoffeeShop_10.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_TitikAsal_1,lyr_titik_wfc_ponorogo_2,lyr_RuteWFC7ConnectCafe_3,lyr_RuteWFC6LUME_4,lyr_RuteWFC1KopiKenangan_5,lyr_RuteWFC4KALACafe_6,lyr_RuteWFC3AshavinCoffeeSpace_7,lyr_RuteWFC5HACACoffee_8,lyr_RuteWFC2TOMOROCoffee_9,lyr_RuteWFC8Banda72CoffeeShop_10];
lyr_TitikAsal_1.set('fieldAliases', {'x': 'x', 'y': 'y', 'keterangan': 'keterangan', });
lyr_titik_wfc_ponorogo_2.set('fieldAliases', {'x': 'x', 'y': 'y', 'keterangan': 'keterangan', });
lyr_RuteWFC7ConnectCafe_3.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', 'DURASI': 'DURASI', });
lyr_RuteWFC6LUME_4.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', 'DURASI': 'DURASI', });
lyr_RuteWFC1KopiKenangan_5.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', 'DURASI': 'DURASI', });
lyr_RuteWFC4KALACafe_6.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', 'DURASI': 'DURASI', });
lyr_RuteWFC3AshavinCoffeeSpace_7.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', 'DURASI': 'DURASI', });
lyr_RuteWFC5HACACoffee_8.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', 'DURASI': 'DURASI', });
lyr_RuteWFC2TOMOROCoffee_9.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', 'DURASI': 'DURASI', });
lyr_RuteWFC8Banda72CoffeeShop_10.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', 'DURASI': 'DURASI', });
lyr_TitikAsal_1.set('fieldImages', {'x': 'TextEdit', 'y': 'TextEdit', 'keterangan': 'TextEdit', });
lyr_titik_wfc_ponorogo_2.set('fieldImages', {'x': 'TextEdit', 'y': 'TextEdit', 'keterangan': 'TextEdit', });
lyr_RuteWFC7ConnectCafe_3.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', 'DURASI': '', });
lyr_RuteWFC6LUME_4.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', 'DURASI': '', });
lyr_RuteWFC1KopiKenangan_5.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', 'DURASI': '', });
lyr_RuteWFC4KALACafe_6.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', 'DURASI': '', });
lyr_RuteWFC3AshavinCoffeeSpace_7.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', 'DURASI': '', });
lyr_RuteWFC5HACACoffee_8.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', 'DURASI': '', });
lyr_RuteWFC2TOMOROCoffee_9.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', 'DURASI': '', });
lyr_RuteWFC8Banda72CoffeeShop_10.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', 'DURASI': '', });
lyr_TitikAsal_1.set('fieldLabels', {'x': 'inline label - always visible', 'y': 'inline label - always visible', 'keterangan': 'inline label - always visible', });
lyr_titik_wfc_ponorogo_2.set('fieldLabels', {'x': 'inline label - always visible', 'y': 'inline label - always visible', 'keterangan': 'inline label - always visible', });
lyr_RuteWFC7ConnectCafe_3.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'hidden field', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', 'DURASI': 'inline label - always visible', });
lyr_RuteWFC6LUME_4.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'hidden field', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', 'DURASI': 'inline label - always visible', });
lyr_RuteWFC1KopiKenangan_5.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'hidden field', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', 'DURASI': 'inline label - always visible', });
lyr_RuteWFC4KALACafe_6.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'hidden field', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', 'DURASI': 'inline label - always visible', });
lyr_RuteWFC3AshavinCoffeeSpace_7.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'hidden field', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', 'DURASI': 'inline label - always visible', });
lyr_RuteWFC5HACACoffee_8.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'hidden field', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', 'DURASI': 'inline label - always visible', });
lyr_RuteWFC2TOMOROCoffee_9.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'hidden field', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', 'DURASI': 'inline label - always visible', });
lyr_RuteWFC8Banda72CoffeeShop_10.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'hidden field', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', 'DURASI': 'inline label - always visible', });
lyr_RuteWFC8Banda72CoffeeShop_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});