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
    //? Function to create product card
    function createProductCard(productName, productImageSrc) {
        const card = document.createElement("div");
        card.className = "card";
        card.style = "width: 225px; border-radius: 11px; border: 0; background: var(--silver-sky)";

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        cardBody.style = "padding: .25rem;"

        const productImage = document.createElement('img');
        productImage.classList.add('card-img');
        productImage.src = productImageSrc;
        productImage.style = 'width: 100%; height: 100px; border-bottom-left-radius: 0; border-bottom-right-radius: 0;';
        card.appendChild(productImage);

        const productNameElement = document.createElement('p');
        productNameElement.classList.add('card-title');
        productNameElement.textContent = productName;
        productNameElement.style = 'text-align: center; margin-bottom: 0;'
        cardBody.appendChild(productNameElement);

        card.appendChild(cardBody);
        return card;
    }

    //* Function to add a product to the basket
    function addToBasket(productName, productImageSrc) {
        const basketList = document.querySelector('#basket ul');
        const li = document.createElement('li');
        li.classList.add('dropdown-item');
        li.style = 'display: flex; justify-content: space-between; align-items-stretch';

        const card = createProductCard(productName, productImageSrc);

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn', 'btn-sm', 'btn-danger', 'ms-2');
        deleteBtn.textContent = 'X';
        deleteBtn.addEventListener('click', () => li.remove());

        li.appendChild(card);
        li.appendChild(deleteBtn);
        basketList.appendChild(li);
    }

    //* Event listener for products in section 1 > Search by category <
    const sectionProductsOne = document.querySelectorAll('.pharmacy-products-one .add-to-basket');
    sectionProductsOne.forEach((product) =>{
        product.addEventListener('click',(e)=> {
            const productName = e.target.nextElementSibling.nextElementSibling.textContent;
            const productImageSrc = e.target.nextElementSibling.src;
            addToBasket(productName, productImageSrc);
        });
    });

    //* Event listener for products in section 2 > Prescription Medicine <
    const sectionProductsTwo = document.querySelectorAll('.pharmacy-products-two .add-to-basket');
    sectionProductsTwo.forEach((product)=>{
        product.addEventListener('click', (e)=>{
            const productName = e.target.nextElementSibling.nextElementSibling.children[0].textContent;
            const productImageSrc = e.target.nextElementSibling.src;
            addToBasket(productName, productImageSrc);
        });
    });
});