const attributions = '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>';
const osm_attributions = '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'

const mapbox_access_token = 'pk.eyJ1IjoiZ2VvZGF0YWRldiIsImEiOiJjbGhpdDNzN20wYmk2M3FudW9oeTg4ZjhtIn0.nDEBWyUjvSBy7ozwFbLL6Q';

export default {
	// Set this to connect to a back-end automatically when opening the Web Editor,
	// so you could set this to https://example.com and then the Web Editor connects
	// to the corresponding back-end automatically.
	serverUrl: process.env.VUE_APP_SERVER_URL,

	// The name of the service
	serviceName: 'Copernicus Data Space Ecosystem',
	// The name of the app
  appName: process.env.VUE_APP_APP_NAME,

	// Skip login and automatically load up the "discovery mode"
	skipLogin: true,

	// Default location for maps
	// Default to the center of the EU in Wuerzburg: 
	// https://en.wikipedia.org/wiki/Geographical_midpoint_of_Europe#Geographic_centre_of_the_European_Union
	// The zoom level should show most of Europe
	mapLocation: [49.8, 9.9],
	mapZoom: 4,

	// OSM Nominatim compliant geocoder URL, remove to disable
	geocoder: "https://nominatim.openstreetmap.org/search/",

	// A message shown on the login page
	loginMessage: '',

	// The logo to show
	logo: 'https://dataspace.copernicus.eu/themes/custom/copernicus/logo.svg',

	// Defaults for notifications
	snotifyDefaults: {
		timeout: 10000,
		titleMaxLength: 30,
		bodyMaxLength: 120,
		showProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true
	},

	// List of supported web map services (all lower-cased)
	supportedMapServices: [
		'xyz',
		'wmts'
	],

	// List of supported batch job sharing services
	supportedBatchJobSharingServices: [
		'CopyUrl',
		'TwitterShare'
	],

	// List of supported web service sharing services
	supportedWebServiceSharingServices: [
		'CopyUrl',
		'TwitterShare'
	],

	// List of supported wizards
	supportedWizards: [
		{
			component: 'SpectralIndices',
			title: 'Compute Spectral Indices',
			description: 'A spectral index is a mathematical equation that is applied on the various spectral bands of an image per pixel. It is often used to highlight vegetation, urban areas, snow, burn, soil, or water/drought/moisture stress. Provided by Awesome Spectral Indices (https://github.com/awesome-spectral-indices/awesome-spectral-indices).',
			requiredProcesses: ['reduce_dimension']
		}
	],

	// Configure the (base)maps
	basemaps: [
		{
			title: 'OSM',
			url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
			attributions: osm_attributions,
			maxZoom: 22,
		}
	],

	// Import processes from openeo-community-examples repo
	importCommunityExamples: true,

	// Additional process namespaces to load by default
	processNamespaces: [],

	// Key is the OIDC provider id, value is the client ID
	oidcClientIds: {},

	// Show a warning if HTTP is used instead of HTTPS
	showHttpWarning: true,

	// refresh interval for jobs/user data/services etc. in minutes - doesn't apply to logs.
	// It's recommended to use a value between 1 and 5 minutes.
	dataRefreshInterval: 2
	
};
