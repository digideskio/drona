import http from 'http';
import drone from 'ar-drone';
import dronestream from 'dronestream';

const client = drone.createClient();

client.server = () => {
	console.log('Settings up drone client server for video');
	const server = http.createServer();
	dronestream.listen(server);

	return new Promise(res => {
		res(true);
	});
};

export default client;
