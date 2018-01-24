import React from 'react';
import PropTypes from 'prop-types';
import wp from 'wp';
import _uniqueId from 'lodash/uniqueId';
import classNames from 'classnames';

import SortablePostList from './sortable-post-list';

class PostSelectSelection extends React.Component {
	static propTypes = {
		selectedPosts: PropTypes.array.isRequired,
		onUpdateSelection: PropTypes.func.isRequired,
	}

	render() {
		return <SortablePostList
			id={ _uniqueId() }
			posts={ this.props.selectedPosts }
			onSort={ newSelectionOrder => this.props.onUpdateSelection( newSelectionOrder ) }
		/>
	}
}

export default PostSelectSelection;
