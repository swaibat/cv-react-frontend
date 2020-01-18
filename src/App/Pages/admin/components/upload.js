import React, { Component } from 'react';
import Dropzone from 'react-dropzone-uploader';

const MyUploader = () => {
	const handleChangeStatus = ({ meta, file }, status) => {
		console.log(status, meta, file);
	};

	const handleSubmit = (files, allFiles) => {
		console.log(files.map(f => f.meta));
		allFiles.forEach(f => f.remove());
	};

	return <Dropzone onChangeStatus={handleChangeStatus} onSubmit={handleSubmit} accept='image/*' />;
};

export default MyUploader;
