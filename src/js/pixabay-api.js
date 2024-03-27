import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { imgGallery } from '../main';
import { formEl } from '../main';


export function getImage(inputValue) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const params = new URLSearchParams({
    key: "22926721-5d20aa08498ffd1ff2f906542",
    q: inputValue,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  });
  const url = `${BASE_URL}${END_POINT}?${params}`;
  
  return fetch(url).then(res => {
    if(!res.ok){
        throw new Error(response.status);
    }
    return res.json();
  });
}