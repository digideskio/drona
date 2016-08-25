import http from 'http';
import drone from 'ar-drone';

const client = drone.createClient();

client.server = () => {
	require('ar-drone-png-stream')(client, { port: 8000 });

	return new Promise(res => {
		res(true);
	});
};

client.onNavData = cb => {
	client.on('navdata', cb);
};

export default client;
