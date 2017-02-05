---
title: Leaflet Photo Map
date: 2015-07-13 00:00:00 Z
tags:
- leaflet
layout: post
description: This web map is an example of the Leaflet Photo plugin using photos from
  a family vacation in 1985. Photos include Yellowstone, Watertown Park, Baraboo Circus
  Museum and a Sod House.
subtitle: A Trip Out West circa 1985
plugins:
- photo-map
map: leaflet
header-img: header-vacay-2.jpg
---
<div id="map">
</div>
<script>
//map
	var map = L.map('map', {
		maxZoom: 8,
		sleep: true,
		//defaultExtentControl: true
	});
	map.setView([45.446,-100.928], 4);
	var hash = L.hash(map);
//tiles
	var esritopo = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
		attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
		});
	var comic = L.tileLayer('http://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
		attribution: 'Imagery from <a href="http://mapbox.com/about/maps/">MapBox</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
		subdomains: 'abcd',
		id: 'reyemtm.mnijk2mp',
		accessToken: 'pk.eyJ1IjoicmV5ZW10bSIsImEiOiJCTHUxSVZ3In0.Q-qbg_jG0JcT6bfBeiwXQg'
	});

	var toner = new L.StamenTileLayer("toner");

	var cdb = L.tileLayer('http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
	        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> ' +
	                      'contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">' +
	                      'CC-BY-SA</a>. Tiles &copy; <a href="http://cartodb.com/attributions">' +
	                      'CartoDB</a>'
  	}).addTo(map);
//controls
	var baseMaps = {
		"Contrast": toner,
		"Comic": comic,
		"Topo": esritopo,
		"Light": cdb
	};

	var lyrs = new L.control.layers(baseMaps).addTo(map);

//photo layer
	var photoLayer = L.photo.cluster({spiderfyDistanceMultiplier: 2}).on('click', function (evt) {
	var photo = evt.layer.photo,
        template = '<img src="{url}"/><p>{caption}</p>';
	/*var w = (window.innerWidth > 0) ? window.innerWidth : screen.width;*/
	var w = $('#map').width();
	var x = w * 0.5;

	if (photo.video && (!!document.createElement('video').canPlayType('video/mp4; codecs=avc1.42E01E,mp4a.40.2'))) {
		template = '<video autoplay controls poster="{url}"><source src="{video}" type="video/mp4"/></video>';
	};

	evt.layer.bindPopup(L.Util.template(template, photo), {
			className: 'leaflet-popup-photo',
			minWidth: x,
			keepInView: true
		}).openPopup();
	});

	reqwest({
		url:'https://picasaweb.google.com/data/feed/api/user/103469053044045468318/albumid/6171132855421740513?alt=json-in-script&imgmax=1600',
		type: 'jsonp',
		success: function (data) {
			var photos = [];
			data = data.feed.entry;

			for (var i = 0; i < data.length; i++) {
			var photo = data[i];
			if (photo['georss$where']) {
				var pos = photo['georss$where']['gml$Point']['gml$pos']['$t'].split(' ');
				photos.push({
					lat: pos[0],
					lng: pos[1],
					url: photo['media$group']['media$content'][0].url,
					caption: photo['media$group']['media$description']['$t'],
					thumbnail: photo['media$group']['media$thumbnail'][0].url,
					video: (photo['media$group']['media$content'][1] ? photo['media$group']['media$content'][1].url : null)
				});
			};
		}

			photoLayer.add(photos).addTo(map);
			//map.fitBounds(photoLayer.getBounds(), {padding: [50,50]});
			//map.setView([41.55012, -87.81197], 15);
			//has to be added after center and zoom are set
			L.control.navbar().addTo(map);

		}
	});

</script>

This is an example of the Leaflet.Photo plugin, based almost entirely on Bjørn Sandvik's post [here](http://blog.thematicmapping.org/2014/08/showing-geotagged-photos-on-leaflet-map.html). I did add a tweak that adjusts the photo when opened to a percentage of the size of the map div, but other than that I followed his example and the result is really cool. These are photos long since forgotten, of a trip my family took out west back in 1985. Most of the pictures were taken with a Kodak Disc 4000, or a similar model. Sod houses, the Lower Falls, Mount Rushmore, buffalo...it's all here.


<!--https://picasaweb.google.com/data/feed/base/user/103469053044045468318/albumid/6170973282606682673?alt=rss&kind=photo&hl=en_US-->
<!--https://picasaweb.google.com/103469053044045468318/Picasa?authuser=0&authkey=Gv1sRgCPzEjLbb4-aHdw&feat=directlink-->
