$(document).ready(function() {
    $('.thisProductDesc-gallery-item').on('click',function() {
        let image = $(this).find('img');
        let copyImage = image.clone();
        const modal = $('.modal');
        modal.show();
        let img = modal.find('.modal-window-img');
        img.html(copyImage);
    });
    $('.modal-window-close').on('click',function() {
        $(this).parent().parent().hide();
    })
})