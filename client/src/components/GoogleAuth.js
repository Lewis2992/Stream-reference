import React from 'react';
import jwt_decode from 'jwt-decode';
import {connect} from 'react-redux';

import {handleSignIn, handleSignOut} from '../actions';

class GoogleAuth extends React.Component {

componentDidMount() {
	const initFetch = () => {

		window.google.accounts.id.initialize({
			client_id: '289281937373-m6knc4vpvhk51anaku6r9smjg36nicsd.apps.googleusercontent.com',
			callback: (res) => {
				const userObject = jwt_decode(res.credential);
				this.props.handleSignIn(userObject);
				document.getElementById('oauthBtn').hidden = true;
			}
		});

		window.google.accounts.id.renderButton(
			document.getElementById('oauthBtn'),
			{
				type: 'standard',
				theme: 'outline',
				size: 'large'
			}
		);
	}

	initFetch();
}

handleSignOut() {
	this.props.handleSignOut();
	document.getElementById('oauthBtn').hidden = false;
}

renderLoginStatus() {
	if (this.props.auth.isSignedIn) {
		return (
			<div>
				<button onClick={() => {this.handleSignOut()}}>Sign out</button>
			</div>
		);
	} else {
		return <div>not logged in</div>
	}
}

render() {
	return (
		<div>
			{this.renderLoginStatus()}
			<div id="oauthBtn">google auth</div>
		</div>
	);
}

}

const mapStateToProps = (state) => {
	return {auth: state.auth};
}

export default connect(mapStateToProps, {handleSignIn, handleSignOut})(GoogleAuth);