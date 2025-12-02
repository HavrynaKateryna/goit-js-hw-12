import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  timeout: 1000,
});
export async function getImagesByQuery(query, page) {
  try {
    const response = await instance.get('/', {
      params: {
        key: '53407637-c830e4422b7f45a16c416a939',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: 15,
      },
    });
    const { hits, totalHits } = response.data;
    return { hits, totalHits };
  } catch (error) {
    console.error(error);
  }
}