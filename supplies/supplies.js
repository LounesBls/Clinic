// Products List.
const basketList = document.querySelector('.basketList');

// Add to Basket Button.
const addBtn = document.querySelectorAll('.cad span');

// Target The Price.
// const defaultPrice = document.querySelector('.tottalPrice').innerText;

addBtn.forEach(add=> add.addEventListener('click', (e)=>{
    const Image = e.target.parentElement.children[1].children[0].src;
    const cardTitle = e.target.parentElement.children[1].children[1].children[0].innerText;
    const priceNum = e.target.parentElement.children[1].children[1].children[1].children[0].innerText;

    // defaultPrice.textContent = +defaultPrice + priceNum;

    // <img src="${Image}" alt="Product Image">
    basketList.innerHTML += `<li class="card flex-row justify-content-center align-items-center" style="
                background: transparent;
                border: none;
                margin: 5px 0;"> 
        ${
            `
                <img class="align-self-start" src="${Image}" alt="product Image" style="width: 98px !important; height: 93px;">
                
                <div class="card-body pb-1 pt-0 px-0">
                    <h4 class="card-title">${cardTitle}</h4>
                    <p class="card-text d-flex justify-content-center align-items-center gap-1">
                    <svg class="me-2" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.2 12V1L1 3.75M7.6 12L12 6.5M12 12L7.6 6.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span class="mr-2">${priceNum}</span>EGP</p>
                    <button class="text-white border-0 fw-normal" style="
                        font-family: Inter;
                        font-size: 13px;
                        line-height: 15.73px;
                        background: #0012B8;
                        box-shadow: 0px 4px 4px 0px #00000040;
                        width: 136px;
                        height: 28px;
                        border-radius: 40px;
                    ">تفاصيل اكثر للمنتج</button>
                </div>
                <span style="
                    width: 29px;
                    height: 27px;
                    border-radius: 4px;
                    background: #000000B0;
                    ">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 1V15M1 8H15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
            `
        } </li>`;
    })
);