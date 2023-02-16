// Create Read Update Delete (CRUD)
// GET POST PUT/PATCH DELETE

// referencia resource users de la api

// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },

import { postData, getData, updateData, deleteData } from "./APIClient";
import domElements from "./domElements";

const urlUsers = `/users`;
const API = "https://jsonplaceholder.typicode.com";

// CREATE

domElements.formCreate.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log("clic");

  let body = {
    name: domElements.nameInput.value,
    username: domElements.usernameInput.value,
    email: domElements.emailInput.value,
    street: domElements.streetInput.value,
    suite: domElements.suiteInput.value,
    city: domElements.cityInput.value,
    zipcode: domElements.zipcodeInput.value,
  };

  //   console.log(body);

  postData(API, urlUsers, "POST", body);
});

// READ

domElements.formRead.addEventListener("submit", (e) => {
  e.preventDefault();
  body = domElements.readId.value;

  getData(API, urlUsers, "GET", body);
});

// UPDATE & PATCH

domElements.formUpdate.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log("clic");

  id = domElements.updateId.value;

  let body = {
    name: domElements.nameInput2.value ? domElements.nameInput2.value : null,
    username: domElements.usernameInput2.value
      ? domElements.usernameInput2.value
      : null,
    email: domElements.emailInput2.value ? domElements.emailInput2.value : null,
    street: domElements.streetInput2.value
      ? domElements.streetInput2.value
      : null,
    suite: domElements.suiteInput2.value ? domElements.suiteInput2.value : null,
    city: domElements.cityInput2.value ? domElements.cityInput2.value : null,
    zipcode: domElements.zipcodeInput2.value
      ? domElements.zipcodeInput2.value
      : null,
  };

  //   console.log(body);

  updateData(API, urlUsers, "PATCH", body, id);
  updateData(API, urlUsers, "PUT", body, id);

  //   const obj = {
  //     name: "Felipe",
  //     email: "email@email.com",
  //   };

  //   axios({
  //     method: "PATCH",
  //     url: "https://jsonplaceholder.typicode.com/users/1",
  //     data: obj,
  //     options: {
  //       Headers: {
  //         "Content-Type": "application/json; charset=UTF-8",
  //       },
  //     },
  //   })
  //     .then((respnse) => console.log(respnse))
  //     .catch((err) => console.log(err));
});

// DELETE

domElements.formDelete.addEventListener("submit", (e) => {
  e.preventDefault();
  body = domElements.deleteId.value;

  deleteData(API, urlUsers, "DELETE", body);
});
