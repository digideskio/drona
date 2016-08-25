import http from 'http';
import drone from 'ar-drone';
import dronestream from 'dronestream';

const client = drone.createClient();

client.server = () => {
	const server = http.createServer();
	dronestream.listen(server);

	return new Promise(res => {
		res(true);
	});
};

client.getAltitude = cb => cb(Math.floor(Math.random() * 1000));

client.t = () => {
	console.log('TAKEOFF');
};

client.l = () => {
	console.log('LAND');
};

export default client;
