const prescriptionBTN = document.querySelector('.prescriptionBTN');
const categorySection = document.querySelector('.s-category');
const medicineSection = document.querySelector('.p-medicine');
const camSvgBTN = document.querySelector('.camSVGBTN');
const headingPara = document.querySelector('.heading');
const closeBTN = document.querySelector('.closeBTN');

// Show Prescription Medicine Section.
prescriptionBTN.addEventListener('click', () => {
    categorySection.classList.toggle('hide');
    medicineSection.classList.toggle('hide');
    camSvgBTN.classList.toggle('hide');
    headingPara.classList.toggle('hide');
    prescriptionBTN.classList.toggle('hide');
});

// Show Hidden Elements.
closeBTN.addEventListener('click', ()=>{
    categorySection.classList.toggle('hide');
    medicineSection.classList.toggle('hide');
    camSvgBTN.classList.toggle('hide');
    headingPara.classList.toggle('hide');
    prescriptionBTN.classList.toggle('hide');
})