const imagePreviewContainer = document.querySelector('.image-preview');
const imagePreviewCloseButton = document.querySelector('.image-preview__close');

function openImagePreview() {
  imagePreviewContainer.classList.add('image-preview--opened');
}

function closeImagePreview() {
  imagePreviewContainer.classList.remove('image-preview--opened');
}

imagePreviewCloseButton.addEventListener('click', closeImagePreview);
