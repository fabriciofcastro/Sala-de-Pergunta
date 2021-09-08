"use strict";

var _modal = _interopRequireDefault(require("./modal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var modal = (0, _modal["default"])();
var modalTitle = document.querySelector('.modal h2');
var modalDescription = document.querySelector('.modal p');
var modalButton = document.querySelector('.modal button'); // Pegar todos os botõe com a class check  

var checkBotoes = document.querySelectorAll('.action a.check');
checkBotoes.forEach(function (button) {
  // adicionar a escuta.
  button.addEventListener('click', handleClick);
});
var deleteButton = document.querySelectorAll('.action a.delete');
deleteButton.forEach(function (button) {
  button.addEventListener('click', function (event) {
    return handleClick(event, false);
  });
});

function handleClick(event) {
  var check = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  event.preventDefault();
  var text = check ? 'Marcar como lida' : 'Excluir';
  var slug = check ? 'check' : 'delete';
  var roomId = document.querySelector('#room-id').dataset.id;
  var questionId = event.target.dataset.id;
  var form = document.querySelector('.modal form');
  form.setAttribute('action', "/question/".concat(roomId, "/").concat(questionId, "/").concat(slug));
  modalTitle.innerHTML = "".concat(text, " esta pergunta");
  modalDescription.innerHTML = "Tem certeza que deseja ".concat(text.toLocaleLowerCase(), " esta pergunta\" ");
  modalButton.innerHTML = "Sim ".concat(text.toLowerCase());
  check ? modalButton.classList.remove('red') : modalButton.classList.add('red');
  modal.open();
}