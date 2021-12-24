import React, { Fragment, Component } from 'react';

class Search extends Component {
	state = {
		text: '',
	};
	onChange = (e) => {
		this.setState({ text: e.target.value });
	};
	render() {
		return (
			<Fragment>
				<form className='form'>
					<input
						type='text'
						name='search'
						placeholder='Search Users...'
						value={this.state.text}
						onChange={this.onChange}
					/>
					<input
						type='submit'
						value='Search'
						className='btn btn-dark btn-block'
					/>
				</form>
			</Fragment>
		);
	}
}

export default Search;
