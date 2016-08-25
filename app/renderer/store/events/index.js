import drone from './drone';
import video from './video';

export default function init(store) {
	drone(store);
	video(store);
}
