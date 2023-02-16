const formCreate = document.querySelector("#create");
const formRead = document.querySelector("#read");
const formUpdate = document.querySelector("#update");
const formDelete = document.querySelector("#delete");

const nameInput = document.querySelector('[name="name"]');
const usernameInput = document.querySelector('[name="username"]');
const emailInput = document.querySelector('[name="email"]');
const streetInput = document.querySelector('[name="street"]');
const suiteInput = document.querySelector('[name="suite"]');
const cityInput = document.querySelector('[name="city"]');
const zipcodeInput = document.querySelector('[name="zipcode"]');

const readId = document.querySelector('[name="readid"]');

const nameInput2 = document.querySelector('[name="2name"]');
const usernameInput2 = document.querySelector('[name="2username"]');
const emailInput2 = document.querySelector('[name="2email"]');
const streetInput2 = document.querySelector('[name="2street"]');
const suiteInput2 = document.querySelector('[name="2suite"]');
const cityInput2 = document.querySelector('[name="2city"]');
const zipcodeInput2 = document.querySelector('[name="2zipcode"]');

const updateId = document.querySelector('[name="updateid"]');

const deleteId = document.querySelector('[name="deleteid"]');

const domElements = {
  formCreate,
  formRead,
  formUpdate,
  formDelete,
  nameInput,
  usernameInput,
  emailInput,
  streetInput,
  suiteInput,
  cityInput,
  zipcodeInput,
  readId,
  nameInput2,
  usernameInput2,
  emailInput2,
  streetInput2,
  suiteInput2,
  cityInput2,
  zipcodeInput2,
  updateId,
  deleteId,
};

export default domElements;
