// модальное окно
var writeUsButton = document.querySelector(".contacts__button");//кнопка "Напишите нам"
var writeMessageModal = document.querySelector(".write-message-modal");//модальное окно
var modalCloseButton = document.querySelector(".modal-close-button_write-message-position");//кнопка закрытия окна
var modalSentButton = document.querySelector(".write-message-modal-form__button");//кнопка "Отправить"
var modalLoginInput = writeMessageModal.querySelector("[name=user-name]");//поле ввода имени
var modalEmailInput = writeMessageModal.querySelector("[name=user-email]");//поле ввода email
var modalTextInput = writeMessageModal.querySelector("[name=user-text]");//поле ввода текста
var modalForm = writeMessageModal.querySelector(".write-message-modal-form");//форма в модальном окне
var overlay = document.querySelector(".overlay");//поле вне формы

var modalLoginStorage = "";//значение имени в хранилище
var modalEmailStorage = "";//значение email в хранилище
var modalTextStorage = "";//значение текстового поля в хранилище
var isStorageSupport = true;

// карта
var mapModal = document.querySelector(".map-modal");//карта
var mapModalLink = document.querySelector(".contacts__link");//ссылка на модальное окно карты
var mapModalCloseButton = document.querySelector(".modal-close-button_map-position");//кнопка закрытия модального окна карты
var overlay = document.querySelector(".overlay");//поле вне формы

try {
  modalLoginStorage = localStorage.getItem(modalLoginInput);
  modalEmailStorage = localStorage.getItem(modalEmailInput);
  modalTextStorage = localStorage.getItem(modalTextInput);
} catch (err) {
  console.log(err);
  isStorageSupport = false;
}
//при нажатии на "Напишите нам" показываем модальное окно
writeUsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeMessageModal.classList.add("modal-show");
  overlay.classList.add("overlay-show");//и затемняется фон вокруг
  modalLoginInput.focus();

  if (modalLoginStorage) {
    modalLoginInput.value = modalLoginStorage;
    modalEmailInput.focus();
  }
  if (modalEmailStorage) {
    modalEmailInput.value = modalEmailStorage;
    modalTextInput.focus();
  }
  if (modalTextStorage) {
    modalTextInput.value = modalTextStorage;
    modalSentButton.focus();
  }
});
//при нажатии на "Отправить"
modalForm.addEventListener("submit", function (evt) {
  //если поля пустые, то подсвечиваем их
  if (!modalLoginInput.value || !modalEmailInput.value || !modalTextInput.value) {
    evt.preventDefault();
    modalLoginInput.setAttribute("required", true);
    modalEmailInput.setAttribute("required", true);
    modalTextInput.setAttribute("required", true);

    writeMessageModal.classList.remove("modal-error");//и "трясём форму"
    writeMessageModal.offsetWidth = writeMessageModal.offsetWidth;
    writeMessageModal.classList.add("modal-error");
  }
  //если поля заполнены, то записываем в локальное хранилище
  else {
    if (isStorageSupport) {
      localStorage.setItem(modalLoginInput, modalLoginInput.value);
      localStorage.setItem(modalEmailInput, modalEmailInput.value);
      localStorage.setItem(modalTextInput, modalTextInput.value);
    }
  }
});
//закрываем окно при нажатии на кнопку с крестиком
modalCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeMessageModal.classList.remove("modal-show");
  writeMessageModal.classList.remove("modal-error");
  overlay.classList.remove("overlay-show");
});
//выход из формы при нажатии клавиши escape
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (writeMessageModal.classList.contains("modal-show")) {
      evt.preventDefault();
      writeMessageModal.classList.remove("modal-show");
      writeMessageModal.classList.remove("modal-error");
      overlay.classList.remove("overlay-show");
    }
  }
});
//закрываем форму при клике вне формы
overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeMessageModal.classList.remove("modal-show");
  writeMessageModal.classList.remove("modal-error");
  overlay.classList.remove("overlay-show");
});

//при нажатии на изображение карты, открываем карту
mapModalLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.add("map-show");
  overlay.classList.add("overlay-show");//и затемняется фон вокруг
});
//при нажатии на кнопку закрытия карты, закрываем карту
mapModalCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.remove("map-show");
  overlay.classList.remove("overlay-show");
});
//при нажатии на клавишу escape, закрываем карту
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapModal.classList.contains("map-show")) {
      evt.preventDefault();
      mapModal.classList.remove("map-show");
      overlay.classList.remove("overlay-show");
    }
  }
});
//закрываем форму при клике вне формы
overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.remove("map-show");
  overlay.classList.remove("overlay-show");
});