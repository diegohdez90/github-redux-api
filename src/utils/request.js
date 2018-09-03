import 'whatwg-fetch';
function parseJSON(response) {
  return response.json();
}

export default function request (url, opts) {
  return fetch(url, opts)
    .then(parseJSON);
}
