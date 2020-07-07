
const dreamsText = document.querySelector('.dreams-text'),
    btn = document.querySelector('.btn'),
    awaitBlocks = document.querySelectorAll('.await-block');

btn.addEventListener('click', (event) => {
    dreamsText.classList.toggle('text-color-unique');
    event.preventDefault();
});


$(window).scroll(function() {
    $('.await-block').each(function() {
        let imagePos = $(this).offset().top;

        let topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("animate__fadeInLeft");
        }
    });
});



