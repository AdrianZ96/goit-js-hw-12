import axios from 'axios';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css'; 
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';



const API_KEY = '46036688-33de53886d5db16dc3a765a31';
const form = document.querySelector('#search-form');
const input = document.querySelector('#input');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');

let currentPage   = 1;
const perPage     = 40;
let totalPages    = 0;
let currentQuery  = '';
let lightbox;

document.addEventListener('DOMContentLoaded', () => {
  lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });
});

function buildUrl(query, page) {
  return `https://pixabay.com/api/?key=${API_KEY}` +
         `&q=${encodeURIComponent(query)}` +
         `&image_type=photo` +
         `&orientation=horizontal` +
         `&safesearch=true` +
         `&per_page=${perPage}` +
         `&page=${page}`;
}

function renderImage(hits) {
  hits.forEach(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
    gallery.insertAdjacentHTML('beforeend', `
      <div class="photo-card">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes: ${likes}</b></p>
          <p class="info-item"><b>Views: ${views}</b></p>
          <p class="info-item"><b>Comments: ${comments}</b></p>
          <p class="info-item"><b>Downloads: ${downloads}</b></p>
        </div>
      </div>
    `);
  });
  lightbox.refresh();
}

async function fetchImages(query, page, clear = false) {
  try {
    const res = await axios.get(buildUrl(query, page));
    const hits = res.data.hits;
    const totalHits = res.data.totalHits;
    totalPages = Math.ceil(totalHits / perPage);

    if (clear) {
      gallery.innerHTML = '';
    }

    if (hits.length === 0) {
      toastr.error('Przepraszamy, nie znaleziono wyników');
      loadMoreBtn.classList.add('hidden');
      return;
    }

    renderImage(hits);

    if (page < totalPages) {
      loadMoreBtn.classList.remove('hidden');
    } else {
      loadMoreBtn.classList.add('hidden');
      toastr.info("We're sorry, but you've reached the end of search results.");
    }
    
  } catch (err) {
    toastr.error('Błąd ładowania zdjęć');
    console.error(err);
  }
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const query = input.value.trim();
  if (!query) {
    loadMoreBtn.classList.add('hidden');
    toastr.error('Proszę wpisać frazę do wyszukania');
    return;
  }
  currentQuery = query;
  currentPage = 1;
  fetchImages(currentQuery, currentPage, true);
});
loadMoreBtn.addEventListener('click', async () => {
  if (currentPage < totalPages) {
    currentPage += 1;
    await fetchImages(currentQuery, currentPage, false);
    makeHeight()
  }
});

function makeHeight(){

const divContainer = document.querySelector('.photo-card')
if (!divContainer) {
  console.log('Jeszcze go nie ma');
} else {
  const { height } = divContainer.getBoundingClientRect();

  window.scrollBy({ top: height * 2, behavior: 'smooth' });
}
}

