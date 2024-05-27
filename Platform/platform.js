const clickOne = document.querySelector('.click');
const clickTwo = document.querySelector('.click_2');
const rotateSVG = document.getElementById('transSVG');
const rotateSVG_2 = document.getElementById('transSVG_2');

clickOne.addEventListener('click', ()=>{
    rotateSVG.classList.toggle('rotate')
    console.log(clickOne)
});

clickTwo.addEventListener( 'click' , ()=>{
    rotateSVG_2.classList.toggle('rotate_2')
    console.log(clickTwo)
});


document.addEventListener('DOMContentLoaded', ()=> {
    // Create Card
    const createCard = (productImage) => {
        // card
        const card = document.createElement('div');
        card.classList.add('card');
        card.style = 'position-relative';
        
        // Img
        const cardImg = document.createElement('img');
        cardImg.classList.add('card-img');
        cardImg.src = productImage;
        cardImg.style = 'width: 185px; height: 175px;';
        card.appendChild(cardImg);

        // Create Play Svg
        const svg = document.createElement('svg'); 
        svg.classList.add('position-absolute');
        svg.style = `width="67" height="52" viewBox="0 0 67 52" fill="none"
                        xmlns="http://www.w3.org/2000/svg" style="
                        poistion: absolute;
                        top: 50%;
                        left: 50%;
                        width: 4rem;
                        height: 4rem;
                        background: #000000bd;
                        border-radius: 50%;
                        transform: translate(-50%, -50%);
                        "`;

        svg.innerHTML = `<ellipse cx="33.5" cy="26" rx="33.5" ry="26" fill="black" fill-opacity="0.78"/>`;
        card.appendChild(svg);
        
        // Create Triangle SVg
        const svgTwo = document.createElement('span');
        svgTwo.style = `
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    border-top: 15px solid transparent;
                    border-bottom: 15px solid transparent;
                    border-right: 0px solid transparent;
                    border-left: 21px solid #fff;
                    margin-left: 3px;
                    `;
        card.appendChild(svgTwo);
        return card;
    };

    // Add Videos To Basket
    function addToBasket (productImage){
        const basketList = document.querySelector('#basketUl');
        const li = document.createElement('li');
        li.classList.add('dropdown-item');
        li.style = "display: flex; flex-direction: row-reverse;";

        const card = createCard(productImage);

        // Add delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn', 'btn-sm', 'btn-danger', 'ms-2');
        deleteBtn.textContent = 'X';
        deleteBtn.addEventListener('click', () => li.remove());

        // Append Elements
        li.appendChild(card);
        li.appendChild(deleteBtn);
        basketList.appendChild(li);
    };

    // Add Event To Products.
    const product = document.querySelectorAll('.card-body .Add_Basket');
    product.forEach((vid) =>{
        vid.addEventListener('click', (e)=>{
            // Get Image Src.
            const productImage = e.target.closest('.card').querySelector('.card-img-bottom').src;
            addToBasket(productImage);
        });
    });
})