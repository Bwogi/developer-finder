import React from 'react';
import Spinner from '../layout/Spinner';
import UserItem from '../Users/UserItem';

const Users = ({ users, loading }) => {
	if (loading) {
		return <Spinner />;
	} else {
		return (
			<div style={userStyles}>
				{users.map((user) => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		);
	}
};

const userStyles = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3,1fr)',
	gridGap: '1rem',
};

export default Users;
