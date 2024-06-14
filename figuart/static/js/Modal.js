const BtnModalAbrir = document.getElementById('btn-modal-abrir');
const ModalIniciosesion = document.getElementById('Modal-Iniciosesion');
const BtnModalCerrar = document.getElementById('btn-modal-cerrar');

BtnModalAbrir.addEventListener("click",() =>{
    ModalIniciosesion.classList.add('show');  
})
  
BtnModalCerrar.addEventListener('click', () => {
    ModalIniciosesion.classList.remove('show');
  });