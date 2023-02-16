import axios from "axios";
export function postData(url, targetURL, verb, body) {
  axios({
    method: verb,
    baseURL: url,
    url: targetURL,
    body: body,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
}

export function getData(url, targetURL, verb, body) {
  axios({
    method: verb,
    baseURL: url,
    url: `${targetURL}/${body}`,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
}

export function updateData(url, targetURL, verb, body, id) {
  axios({
    method: verb,
    baseURL: url,
    url: `${targetURL}/${id}`,
    data: body,
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.error(err);
    });
}

export function deleteData(url, targetURL, verb, body) {
  axios({
    method: verb,
    baseURL: url,
    url: `${targetURL}/${body}`,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
}
