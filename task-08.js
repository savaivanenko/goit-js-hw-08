import gallery from './gallery-items.js';
const refs = {
  galleryListRef: document.querySelector('.js-gallery'),
  galleryImg: document.querySelector('.gallery__image'),
  openModal: document.querySelector('.lightbox'),
  imgBig: document.querySelector('.lightbox__image'),
  closeModalBtn: document.querySelector('button[data-action="close-lightbox"]'),
  lightbox__content: document.querySelector('.lightbox__content'),
}

for(let el of gallery)
refs.galleryListRef.insertAdjacentHTML('beforeEnd', 
`<li class="gallery__item"><a class="gallery__link" href="${el.original}">
 <img  class="gallery__image" src="${el.preview}" data-source="${el.original}" alt="${el.description}"></a></li>`);


refs.galleryListRef.addEventListener('click', onImgClick);
refs.closeModalBtn.addEventListener('click', closeModal);
refs.lightbox__content.addEventListener('click', closeModal);
window.addEventListener('keydown', closeModal);

function onImgClick(event){
  event.preventDefault();

  if (event.target.nodeName !=='IMG'){
    return;
  }
  refs.openModal.classList.add('is-open');

  refs.imgBig.src = event.target.dataset.source;
};



function closeModal(){
  refs.openModal.classList.remove('is-open');
  refs.imgBig.src = '';

  if(event.target === event.currentTarget){
    refs.openModal.classList.remove('is-open');    
  }
  if(event.code === 'Escape'){
    refs.openModal.classList.remove('is-open');  
  }
};
