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
    // Add Videos To Basket
    function addToBasket (productImage){
        const basketList = document.querySelector('basketUl');
        const li = document.createElement('li');

        // Card
        const card = document.createElement('div');
        card.classList.add('card');
        card.style = 'position-relative';

        // Create Product Image.
        const prdImg = document.createElement('img');
        prdImg.classList.add('card-img');
        prdImg.src= productImage;

        // Create Play Circle
        const  playCircle = document.createElement('div');
        playCircle.style = 'background-color: #000; width: 1.5rem; height: 1.5rem; display: flex; align-content: center;'

        // Create Triangle
        const  triangle = document.createElement('svg');
        triangle.innerHTML = `
            <svg width="23" height="28" viewBox="0 0 23 28" fill="none" xmlns="http://www.w3.org/2000/svg" style="
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);">
                <path d="M22.5386 13.49L1.28538 27.6868L0.319946 0.857414L22.5386 13.49Z" fill="white"></path>
            </svg>`;
        playCircle.appendChild(triangle)

        // Add delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn', 'btn-sm', 'btn-danger', 'ms-2');
        deleteBtn.textContent = 'X';
        deleteBtn.addEventListener('click', () => li.remove());

        // Append Elements
        card.appendChild(playCircle)
        card.appendChild(prdImg);
        li.appendChild(card);
        li.appendChild(deleteBtn);
        basketList.appendChild(li);
    };

    // Add Event To Products.
    const product = document.querySelectorAll('.row .play');
    product.forEach(video => ()=>{
        video.addEvenetListener('click', ()=>{
            const productImage = video.querySelector('card-img-bottom').src;
            addToBasket(productImage);
        });
    })
})