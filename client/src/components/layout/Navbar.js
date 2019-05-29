import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
	const authLinks = (
		<Fragment>
			<ul>
				<li>
					<Link to="" onClick={logout}>
						<span className="hide-sm">Logout</span>
					</Link>
				</li>
			</ul>
		</Fragment>
	);

	const guestLinks = (
		<Fragment>
			<ul>
				<li>
					<Link to="#!">Developers</Link>
				</li>
				<li>
					<Link to="/register">Register</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
			</ul>
		</Fragment>
	);
	return (
		<nav className="navbar bg-dark">
			<h1>
				<Link to="/">Dev Community</Link>
			</h1>
			{!loading && <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>}
		</nav>
	);
};

Navbar.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProp = state => ({
	auth: state.auth
});

export default connect(
	mapStateToProp,
	{ logout }
)(Navbar);
