import http from 'http';
import arDrone from 'ar-drone';

const client = arDrone.createClient();

client.config('general:navdata_demo', 'FALSE');

const drone = {
	client,
	server: () => {
		require('ar-drone-png-stream')(client, { port: 8000 });

		return new Promise(res => {
			res(true);
		});
	},
	onNavData: cb => {
		client.on('navdata', cb);
	},
	takeoff: () => {
		console.log('take off');
		client.takeoff();
	},
	land: () => {
		console.log('land');
		client.land();
	},
	up: speed => {
		console.log('Up at', speed);
		client.up(speed);
	},
	down: speed => {
		console.log('Down at', speed);
		client.down(speed);
	},
	left: speed => {
		console.log('Left at', speed);
		client.left(speed);
	},
	right: speed => {
		console.log('Right at', speed);
		client.right(speed);
	},
	forward: speed => {
		console.log('Forward at', speed);
		client.front(speed);
	},
	backward: speed => {
		console.log('Backward at', speed);
		client.back(speed);
	},
	counterClockwise: speed => {
		console.log('Counter clockwise at', speed);
		client.counterClockwise(speed);
	},
	clockwise: speed => {
		console.log('Clockwise at', speed);
		client.clockwise(speed);
	},
	stop: () => {
		console.log('Stop');
		client.stop();
	}
};

export default drone;
