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
// ========================== // 

document.addEventListener('DOMContentLoaded', () =>{
  // Function to add a product to the basket
    function addToBasket(productName, productImageSrc) {
        const basketList = document.querySelector('#basket ul');
        const li = document.createElement('li');
        li.classList.add('dropdown-item');
        li.style = 'display: flex; justify-content: space-between; align-items-stretch';

        // card
        const card = document.createElement("div")
        card.className = "card";
        card.style = "width: 225px; border-radius: 11px; border: 0; background: var(--silver-sky)"

        // card-body
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        cardBody.style = "padding: .25rem;"

        // Create product image element
        const productImage = document.createElement('img');
        productImage.classList.add('card-img');
        productImage.src = productImageSrc;
        productImage.style = 'width: 100%; height: 100px; border-bottom-left-radius: 0; border-bottom-right-radius: 0;';
        card.appendChild(productImage);

        // Create product name element
        const productNameElement = document.createElement('p');
        productNameElement.classList.add('card-title');
        productNameElement.textContent = productName;
        productNameElement.style= 'text-align: center; margin-bottom: 0;'
        cardBody.appendChild(productNameElement);

        // Add delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn', 'btn-sm', 'btn-danger', 'ms-2');
        deleteBtn.textContent = 'X';
        deleteBtn.addEventListener('click', () => li.remove());

        // Append Elements
        card.appendChild(cardBody)
        li.appendChild(card)
        li.appendChild(deleteBtn);
        basketList.appendChild(li);
    }

    // Add click event listeners to products in section 2
    const sectionProducts = document.querySelectorAll('.pharmacy-products-one .card, .pharmacy-products-two .card');
    sectionProducts.forEach((product) =>{
        product.addEventListener('click',()=> {
            const productName = product.querySelector('.card-title').textContent;
            const productImageSrc = product.querySelector('.card-img').src;
            addToBasket(productName, productImageSrc);
        });
    });
});
