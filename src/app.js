import Vue from 'vue';
import bootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Mapbox from './components/Mapbox.vue';

const app = new Vue({
	el: '#app',
	components: { Mapbox },
	methods: {
		mapInit(map) {
			const Draw = new MapboxDraw();
			map.addControl(Draw);
		},
		mapLoaded(map) {
			map.addSource('10m-bathymetry-81bsvj', {
				type: 'vector',
				url: 'mapbox://mapbox.9tm8dx88'
			});
			map.addLayer({
				'id': '10m-bathymetry-81bsvj',
				'type': 'fill',
				'source': "10m-bathymetry-81bsvj",
				'layout': {},
				'paint': {
					"fill-outline-color": "hsla(337, 82%, 62%, 0)",
					"fill-color": ["interpolate",
						["cubic-bezier",
							0,0.5,
							1,0.5
						],
						["get", "DEPTH"],
						200, "#78bced",
						9000, "#15659f"
					]
				}
			}, 'barrier_line-land-polygon');
		},

		mapClicked(map, e) {
			this.addPopUp(map, e);
		},
		mapMouseMoved(map, e) {
			const features = map.queryRenderedFeatures(e.point, { layers: ['points'] });
			map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
		},
		geolocate(control, position) {
			console.log(`User position: ${position.coords.latitude}, ${position.coords.longitude}`);
		},
		geolocateError(control, positionError) {
			console.log(positionError);
		},
		geolocateStart(control) {
			console.log('geolocate started');
		},
		geolocateEnd(control) {
			console.log('geolocate ended');
		},
		addPopUp(map, e) {
			const features = map.queryRenderedFeatures(e.point, { layers: ['points'] });
			if (!features.length) {
				return;
			}

			const feature = features[0];

			const popupContent = Vue.extend({
				template: '<button @click="popupClicked">Click Me!</button>',
				methods: {
					popupClicked() {
						alert('Popup Clicked!');
					},
				}
			});

			// Populate the popup and set its coordinates
			// based on the feature found.
			const popup = new mapboxgl.Popup()
				.setLngLat(feature.geometry.coordinates)
				.setHTML('<div id="vue-popup-content"></div>')
				.addTo(map);

			new popupContent().$mount('#vue-popup-content');
		}
	}
});
