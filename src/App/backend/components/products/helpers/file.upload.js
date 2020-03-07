import { toast } from 'react-toastify';
const files = [];
export default (event, productImages) => {
	let imgUploadPreview = document.querySelector('.img-upload-preview');
	for (let i = 0; i < event.target.files.length; i++) {
		if (productImages && productImages.find(img => img.size === event.target.files[i].size)) {
			return toast.error('image already exists');
		}
		// check files supported only images jpg - jpeg - gif
		if (/\.(jpe?g|png|gif)$/i.test(event.target.files[i].name) === false) {
			toast.error('this type is not supported');
			event.target.value = '';
			return;
		} else {
			if (files.find(e => e.name === event.target.files[i].name)) {
				return toast.error('image already exists');
			}
			let reader = new FileReader(),
				photoFileDetailsTemplate = ``;
			reader.onload = event => {
				let previewImage = document.createElement('img'),
					previewImageBox = document.createElement('div'),
					removeImage = document.createElement('span');
				let att = document.createAttribute('class');
				att.value = 'preview-del-btn';
				removeImage.setAttributeNode(att);
				let removeIcon = document.createTextNode(' ');
				removeImage.appendChild(removeIcon);
				previewImage.src = reader.result;
				previewImageBox.appendChild(previewImage);
				previewImageBox.classList.add('previewImage');
				previewImageBox.appendChild(removeImage);
				imgUploadPreview.appendChild(previewImageBox);
				// insert file detailes template
				previewImageBox.insertAdjacentHTML('beforeend', photoFileDetailsTemplate);
				removeImage.addEventListener('click', removeItem);
				// confirm remove item
				function removeItem(e) {
					e.target.parentElement.remove();
					event.target.value = '';
				}
			};
			console.log(event.target.files);
			// read file url
			reader.readAsDataURL(event.target.files[i]);
			files.push(event.target.files[i]);
		}
	}
	return files;
};
