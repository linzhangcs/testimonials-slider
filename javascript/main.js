(function(){
    const SLIDEIMGS = ['../images/image-tanya.jpg', '../images/image-john.jpg'];
    const SLIDETEXTS = [`“ I’ve been interested in coding for a while but never taken the jump, until now. 
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
    excited about the future. ”`, `“ If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer. ”`];
    const NAMES = ['Tanya Sinclair', 'John Tarkpor'];
    const TITLES = ['UX Engineer', 'Junior Front-end Developer'];

    const LEFT = document.querySelector('.left-arrow');
    const RIGHT = document.querySelector('.right-arrow');
    const IMAGE = document.querySelector('.image');
    const QUOTE = document.querySelector('.testimonial-text');
    const NAME = document.querySelector('.testimonial-name');
    const TITLE = document.querySelector('.testimonial-title');

    LEFT.addEventListener('click', event =>{
        console.log("left arrow clicked");
        showSlide(-1);
    });
    RIGHT.addEventListener('click', event => {
        console.log("right arrow clicked");
        showSlide(1);
    })

    let position = 0;
    const LENGTH = 2;
    function showSlide(move){
        position = Math.abs(position + move)%LENGTH;
        switch(position){
            case 1: 
                IMAGE.style.backgroundImage = `url(${SLIDEIMGS[1]})`;
                QUOTE.innerText = SLIDETEXTS[1];
                NAME.innerText = NAMES[1];
                TITLE.innerText = TITLES[1];
                break;
            default:
                IMAGE.style.backgroundImage = `url(${SLIDEIMGS[0]})`;
                QUOTE.innerText = SLIDETEXTS[0];
                NAME.innerText = NAMES[0];
                TITLE.innerText = TITLES[0];
        }
    }
})()