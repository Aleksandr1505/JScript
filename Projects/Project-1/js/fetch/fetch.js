const refs = {
  search: document.querySelector("#modal-search-form")
};

const baseUrl = "https://api.themoviedb.org/3";
const myKey = "1d42ad8865a0c243bfacfcefa347033e";

function fetchArticles(query) {
  const request = `/search/${query}?api_key=${myKey}`;
  return fetch(baseUrl + request).then(response =>
    response.json()
  );
}
refs.search.addEventListener("submit", searchMovieHandle);
function searchMovieHandle(e) {
  e.preventDefault();
  console.dir(e.currentTarget);
  const searchValue = e.currentTarget.elements.mdsearch.value;
  console.log(searchValue);
  fetchArticles(searchValue).then(data => {
    console.log(data);
  });
}
