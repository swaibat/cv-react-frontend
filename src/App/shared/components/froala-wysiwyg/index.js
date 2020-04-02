import React, { Component } from 'react';
// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';

import 'froala-editor/css/froala_style.scss';
import 'froala-editor/css/froala_editor.pkgd.scss';

import 'font-awesome/css/font-awesome.css';

import FroalaEditor from 'react-froala-wysiwyg';

export default class EditorComponent extends React.Component {
	constructor(props) {
		super(props);
		this.handleModelChange = this.handleModelChange.bind(this);
	}

	handleModelChange(model) {
		this.props.data.setState({
			description: model,
		});
	}

	render() {
		const { state } = this.props.data;
		return (
			<span className='mx-3'>
				<FroalaEditor
					config={{
						placeholderText: 'Enter product description',
					}}
					model={state.description}
					onModelChange={this.handleModelChange}
				/>
			</span>
		);
	}
}
