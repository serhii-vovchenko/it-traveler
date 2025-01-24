// import { token } from './token';
const token = import.meta.env.VITE_MAP_TOKEN;

export const mapSettings = {
	style: 'mapbox://styles/mapbox/standard',
	apiToken: token,
};
