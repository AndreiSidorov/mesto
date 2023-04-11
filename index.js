// поиск элементов
const popup = document.querySelector ('.popup');
const  profileEditButton = document.querySelector ('.profile__edit-button')
const  popupCloseButttn = document.querySelector ('.popup__close-button');
const  popupInputName = document.querySelector ('.popup__edit-input_name');
const  popupInputProfession = document.querySelector ('.popup__edit-input_profession');
const  popupEditInput = document.querySelector ('.popup__edit-input');
const  popupSaveButton = document.querySelector ('.popup__save-button');
const  profileName = document.querySelector ('.profile__name');
const  profileProfession = document.querySelector ('.profile__profession');

// открытие, закрытие окна формы
closePopup();
function openPopup() {
  popup.classList.add('popup_opened');
  popupInputName.value = profileName.textContent;
  popupInputProfession.value = profileProfession.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

//изъятие данных из формы
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popupInputName.value;
  profileProfession.textContent = popupInputProfession.value;
  closePopup();
}
// реакция на нажатие кнопки
profileEditButton.addEventListener('click', openPopup);
popupCloseButttn.addEventListener('click', closePopup);
popupSaveButton.addEventListener('click', handleFormSubmit);



