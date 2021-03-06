import './cached-backbone-sync';
import './global-post-select';

import PostSelectButton from './components/post-select/button-no-portal';
import EditableHTML from './components/editable-html';
import ImageControl from './controls/image';
import PostControl from './controls/post';
import LinkControl from './controls/link';

window.hm = {
	// Sidebar controls.
	controls: {
		ImageControl,
		PostControl,
		LinkControl,
	},
	// Misc components.
	components: {
		PostSelectButton,
		EditableHTML,
	},
};

