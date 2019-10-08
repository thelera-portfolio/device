var mapModal = document.querySelector(".map-modal");//карта
var mapModalLink = document.querySelector(".contacts__link");//ссылка на модальное окно карты
var mapModalCloseButton = document.querySelector(".modal-close-button_map-position");//кнопка закрытия модального окна карты
var overlay = document.querySelector(".overlay");//поле вне формы

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