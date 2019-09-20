var wms_layers = [];
var format_chihuahua_est_0 = new ol.format.GeoJSON();
var features_chihuahua_est_0 = format_chihuahua_est_0.readFeatures(json_chihuahua_est_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_chihuahua_est_0 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_chihuahua_est_0.addFeatures(features_chihuahua_est_0);var lyr_chihuahua_est_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_chihuahua_est_0, 
                style: style_chihuahua_est_0,
                title: '<img src="styles/legend/chihuahua_est_0.png" /> chihuahua_est'
            });var format_ejidos_chihuahua_1 = new ol.format.GeoJSON();
var features_ejidos_chihuahua_1 = format_ejidos_chihuahua_1.readFeatures(json_ejidos_chihuahua_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ejidos_chihuahua_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_ejidos_chihuahua_1.addFeatures(features_ejidos_chihuahua_1);var lyr_ejidos_chihuahua_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ejidos_chihuahua_1, 
                style: style_ejidos_chihuahua_1,
                title: '<img src="styles/legend/ejidos_chihuahua_1.png" /> ejidos_chihuahua'
            });var format_Carreteraschihuahua_2 = new ol.format.GeoJSON();
var features_Carreteraschihuahua_2 = format_Carreteraschihuahua_2.readFeatures(json_Carreteraschihuahua_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Carreteraschihuahua_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Carreteraschihuahua_2.addFeatures(features_Carreteraschihuahua_2);var lyr_Carreteraschihuahua_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Carreteraschihuahua_2, 
                style: style_Carreteraschihuahua_2,
                title: '<img src="styles/legend/Carreteraschihuahua_2.png" /> Carreteras chihuahua'
            });

lyr_chihuahua_est_0.setVisible(true);lyr_ejidos_chihuahua_1.setVisible(true);lyr_Carreteraschihuahua_2.setVisible(true);
var layersList = [lyr_chihuahua_est_0,lyr_ejidos_chihuahua_1,lyr_Carreteraschihuahua_2];
lyr_chihuahua_est_0.set('fieldAliases', {'CVE_ENT': 'CVE_ENT', 'NOM_ENT': 'NOM_ENT', 'CAPITAL': 'CAPITAL', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'COV_': 'COV_', 'COV_ID': 'COV_ID', });
lyr_ejidos_chihuahua_1.set('fieldAliases', {'fid': 'fid', 'NOM_NUC': 'NOM_NUC', 'MUNICIPIO': 'MUNICIPIO', 'Clv_Unica': 'Clv_Unica', 'Fol_Matriz': 'Fol_Matriz', 'tipo': 'tipo', 'CLAVE': 'CLAVE', 'EDO_CLV': 'EDO_CLV', 'MUN_CLV': 'MUN_CLV', 'NUC_CLV': 'NUC_CLV', 'PROGRAMA': 'PROGRAMA', 'layer': 'layer', 'path': 'path', });
lyr_Carreteraschihuahua_2.set('fieldAliases', {'fid': 'fid', 'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'COV_': 'COV_', 'COV_ID': 'COV_ID', });
lyr_chihuahua_est_0.set('fieldImages', {'CVE_ENT': '', 'NOM_ENT': '', 'CAPITAL': '', 'AREA': '', 'PERIMETER': '', 'COV_': '', 'COV_ID': '', });
lyr_ejidos_chihuahua_1.set('fieldImages', {'fid': '', 'NOM_NUC': '', 'MUNICIPIO': '', 'Clv_Unica': '', 'Fol_Matriz': '', 'tipo': '', 'CLAVE': '', 'EDO_CLV': '', 'MUN_CLV': '', 'NUC_CLV': '', 'PROGRAMA': '', 'layer': '', 'path': '', });
lyr_Carreteraschihuahua_2.set('fieldImages', {'fid': '', 'FNODE_': '', 'TNODE_': '', 'LPOLY_': '', 'RPOLY_': '', 'LENGTH': '', 'COV_': '', 'COV_ID': '', });
lyr_chihuahua_est_0.set('fieldLabels', {'CVE_ENT': 'no label', 'NOM_ENT': 'no label', 'CAPITAL': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'COV_': 'no label', 'COV_ID': 'no label', });
lyr_ejidos_chihuahua_1.set('fieldLabels', {'fid': 'no label', 'NOM_NUC': 'no label', 'MUNICIPIO': 'no label', 'Clv_Unica': 'no label', 'Fol_Matriz': 'no label', 'tipo': 'no label', 'CLAVE': 'no label', 'EDO_CLV': 'no label', 'MUN_CLV': 'no label', 'NUC_CLV': 'no label', 'PROGRAMA': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Carreteraschihuahua_2.set('fieldLabels', {'fid': 'no label', 'FNODE_': 'no label', 'TNODE_': 'no label', 'LPOLY_': 'no label', 'RPOLY_': 'no label', 'LENGTH': 'no label', 'COV_': 'no label', 'COV_ID': 'no label', });
lyr_Carreteraschihuahua_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});