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