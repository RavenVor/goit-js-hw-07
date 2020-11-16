const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('#gallery');

const createImg = item => {
  const listItemRef = document.createElement('li');
  listItemRef.classList.add('gallery__item');

  const imgRef = document.createElement('img');
  imgRef.classList.add('gallery__img');
  imgRef.src = item.url;
  imgRef.alt = item.alt;

  listItemRef.appendChild(imgRef);

  return listItemRef;
};

const geleryItemArr = images.map(image => createImg(image));

galleryRef.append(...geleryItemArr);
