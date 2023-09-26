$(function() {
    const swiper = new Swiper('.swiper', {
        loop: true,
        slidesPerView: 'auto'
    });

    let idx = 0;
    $(window).on('scroll', () => {
        const centerEle = document.elementFromPoint(window.innerWidth/2, window.innerHeight/2);
        const currentCont = $(centerEle).closest('.container').first();
        const currentSectionId = currentCont.data('section');
        
        if ($(`.list-item[data-section="${currentSectionId}"]`).length) {
            idx = $(`.list-item[data-section="${currentSectionId}"]`).index() - 1;
            $('.list .spin').css('top', idx * 40);
        }
    });
});