import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import FroalaEditor from 'froala-editor';

// Load a plugin.
import 'froala-editor/js/plugins/align.min.js';

// Initialize editor.

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
		return <span className='mx-3'>{new FroalaEditor('#edit')}</span>;
	}
}
