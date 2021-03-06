import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
	return (
		<div className='navbar bg-primary'>
			<h1>
				<i className={icon}></i> {title}
			</h1>
		</div>
	);
};
Navbar.defaultProps = {
	title: 'Cool Dev Code Finder',
	icon: 'fa-brands fa-github-square',
};
Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
};

export default Navbar;
