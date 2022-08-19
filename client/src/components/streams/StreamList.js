import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {fetchStreams} from '../../actions';

const StreamList = (props) => {
	useEffect(() => {
		
		props.fetchStreams();
	}, []);

	const renderButtons = (id) => {
		if (id === props.currentUserId) {
			console.log(id);
			return (
				<div>edit/delete</div>
			);
		} else {
			return null;
		}
	};

	const renderList = () => {
		return props.streams.map((stream, i) => {
			console.log(stream);
			return(
				<div key={stream[i+1].id} className="stream">
					<h2 className="stream__title">{stream[i+1].title}</h2>
					<p className="stream__desc">{stream[i+1].description}</p>
					{renderButtons(stream.userId)}
				</div>
			);
		});
	};


	return (
		<div className="streams">
			<h2>Streams</h2>
			{renderList()}
		</div>
	);
};

const mapStateToProps = (state) => {
	const streamArray = Object.values(state.create);
	return {
		streams: streamArray,
		currentUserId: state.auth.user.sub
	};
};

export default connect(mapStateToProps, {fetchStreams})(StreamList);