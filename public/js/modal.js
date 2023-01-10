const wrapper = document.querySelector(".wrapper"),
header = wrapper.querySelector("header");
function onDrag({movementX, movementY}){
  let getStyle = window.getComputedStyle(wrapper);
  let leftVal = parseInt(getStyle.left);
  let topVal = parseInt(getStyle.top);
  wrapper.style.left = `${leftVal + movementX}px`;
  wrapper.style.top = `${topVal + movementY}px`;
}
header.addEventListener("mousedown", ()=>{
  header.classList.add("active");
  header.addEventListener("mousemove", onDrag);
});
document.addEventListener("mouseup", ()=>{
  header.classList.remove("active");
  header.removeEventListener("mousemove", onDrag);
});


// MODAL

let closeModalBtn = document.querySelector('.close-btn');
let openModalBtn = document.querySelector('.open-modal-btn');
let modal = document.querySelector('.wrapper');

function openModal() {
    modal.style.visibility = 'visible';
    modal.style.zIndex = 100000000;
};

function closeModal() {
    modal.style.visibility = 'hidden';
};

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click',closeModal);

// MODAL RECIPE
const openModalRecipeBtn = document.querySelector('#open-modal-recipe')
const closeModalRecipeBtn = document.querySelector('.modal-recipe-close-btn')
const modalRecipeWrapper = document.querySelector(".modal-recipe-wrapper"),
ModalRecipeHeader = modalRecipeWrapper.querySelector(".modal-recipe-header");
function onDrag2({movementX, movementY}){
  let getModalRecipeStyle = window.getComputedStyle(modalRecipeWrapper);
  let leftModalRecipeVal = parseInt(getModalRecipeStyle.left);
  let topModalRecipeVal = parseInt(getModalRecipeStyle.top);
  modalRecipeWrapper.style.left = `${leftModalRecipeVal + movementX}px`;
  modalRecipeWrapper.style.top = `${topModalRecipeVal + movementY}px`;
}
ModalRecipeHeader.addEventListener("mousedown", ()=>{
    ModalRecipeHeader.classList.add("active");
    ModalRecipeHeader.addEventListener("mousemove", onDrag2);
});
document.addEventListener("mouseup", ()=>{
    ModalRecipeHeader.classList.remove("active");
    ModalRecipeHeader.removeEventListener("mousemove", onDrag2);
});

function openRecipeModal() {
    modalRecipeWrapper.style.visibility = 'visible';
};

function closeRecipeModal() {
    modalRecipeWrapper.style.visibility = 'hidden';
};

openModalRecipeBtn.addEventListener('click', openRecipeModal);
closeModalRecipeBtn.addEventListener('click',closeRecipeModal);

// MODAL SOCIAL

const openModalSocialBtn = document.querySelector('#open-modal-social')
const closeModalSocialBtn = document.querySelector('.modal-social-close-btn')
const modalSocialWrapper = document.querySelector(".modal-social-wrapper"),
ModalSocialHeader = modalSocialWrapper.querySelector(".modal-social-header");
function onDrag3({movementX, movementY}){
  let getModalSocialStyle = window.getComputedStyle(modalSocialWrapper);
  let leftModalSocialVal = parseInt(getModalSocialStyle.left);
  let topModalSocialVal = parseInt(getModalSocialStyle.top);
  modalSocialWrapper.style.left = `${leftModalSocialVal + movementX}px`;
  modalSocialWrapper.style.top = `${topModalSocialVal + movementY}px`;
}
ModalSocialHeader.addEventListener("mousedown", ()=>{
    ModalSocialHeader.classList.add("active");
    ModalSocialHeader.addEventListener("mousemove", onDrag3);
});
document.addEventListener("mouseup", ()=>{
    ModalSocialHeader.classList.remove("active");
    ModalSocialHeader.removeEventListener("mousemove", onDrag3);
});

function openSocialModal() {
    modalSocialWrapper.style.visibility = 'visible';
};

function closeSocialModal() {
    modalSocialWrapper.style.visibility = 'hidden';
};

openModalSocialBtn.addEventListener('click', openSocialModal);
closeModalSocialBtn.addEventListener('click',closeSocialModal);

// MODAL ALLRECIPE

const openModalAllRecipeBtn = document.querySelector('#open-modal-all-recipe')
const closeModalAllRecipeBtn = document.querySelector('.modal-all-recipe-close-btn')
const modalAllRecipeWrapper = document.querySelector(".modal-all-recipe-wrapper"),
ModalAllRecipeHeader = modalAllRecipeWrapper.querySelector(".modal-all-recipe-header");
function onDrag4({movementX, movementY}){
  let getModalAllRecipeStyle = window.getComputedStyle(modalAllRecipeWrapper);
  let leftModalAllRecipeVal = parseInt(getModalAllRecipeStyle.left);
  let topModalAllRecipeVal = parseInt(getModalAllRecipeStyle.top);
  modalAllRecipeWrapper.style.left = `${leftModalAllRecipeVal + movementX}px`;
  modalAllRecipeWrapper.style.top = `${topModalAllRecipeVal + movementY}px`;
}
ModalAllRecipeHeader.addEventListener("mousedown", ()=>{
    ModalAllRecipeHeader.classList.add("active");
    ModalAllRecipeHeader.addEventListener("mousemove", onDrag4);
});
document.addEventListener("mouseup", ()=>{
    ModalAllRecipeHeader.classList.remove("active");
    ModalAllRecipeHeader.removeEventListener("mousemove", onDrag4);
});

function openAllRecipeModal() {
    modalAllRecipeWrapper.style.visibility = 'visible';
};

function closeAllRecipeModal() {
    modalAllRecipeWrapper.style.visibility = 'hidden';
};

openModalAllRecipeBtn.addEventListener('click', openAllRecipeModal);
closeModalAllRecipeBtn.addEventListener('click',closeAllRecipeModal);

// MODAL GETS OVER MODALS

wrapper.addEventListener('click', ()=>{
    wrapper.style.zIndex = 1000;
    wrapper.style.position = 'relative';
    modalRecipeWrapper.style.zIndex = 'auto';
    modalSocialWrapper.style.zIndex = 'auto';
    modalAllRecipeWrapper.style.zIndex = 'auto';
});

modalRecipeWrapper.addEventListener('click', ()=>{
    modalRecipeWrapper.style.zIndex = 1000;
    wrapper.style.zIndex = 'auto';
    modalSocialWrapper.style.zIndex = 'auto';
    modalAllRecipeWrapper.style.zIndex = 'auto';
});

modalSocialWrapper.addEventListener('click', ()=>{
    modalSocialWrapper.style.zIndex = 1000;
    wrapper.style.zIndex = 'auto';
    modalRecipeWrapper.style.zIndex = 'auto';
    modalAllRecipeWrapper.style.zIndex = 'auto';
});

modalAllRecipeWrapper.addEventListener('click', ()=>{
    modalAllRecipeWrapper.style.zIndex = 1000;
    wrapper.style.zIndex = 'auto';
    modalRecipeWrapper.style.zIndex = 'auto';
    modalSocialWrapper.style.zIndex = 'auto'
});







