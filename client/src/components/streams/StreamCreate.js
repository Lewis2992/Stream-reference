import React from 'react';
import {connect} from 'react-redux';
import {Form, Field} from 'react-final-form';

import streams from '../../apis/streams';
import {storeForm} from '../../actions';

const StreamCreate = (props) => {
	const onSubmit = (values) => {
		// console.log(values);
		props.storeForm(values);
	};

	return (
		<div>
			<Form onSubmit={onSubmit}>
				{({handleSubmit}) => {
					return (
						<form onSubmit={handleSubmit}>
							<div>
								<label>Enter title</label>
								<Field
									name="title"
									component="input"
									type="text"
									placeholder="enter title"
								/>
							</div>
							<div>
								<label>Enter description</label>
								<Field
									name="description"
									component="input"
									type="text"
									placeholder="enter description"
								/>
							</div>
							<div>
								<button type="submit">Submit</button>
							</div>
						</form>
					)
				}}
			</Form>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {data: state.create};
};

export default connect(mapStateToProps, {storeForm})(StreamCreate);