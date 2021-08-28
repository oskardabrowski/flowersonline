$(document).ready(function() {
    const addToLiked = $('.AddToLikedByUser');
    addToLiked.click(function() {
        const thisBtn = $(this)[0];
        const val = $(this)[0].id;
        $.ajax({
            url: '../php/add-liked.php',
            method: 'POST',
            data: {'id' : val},
            success: function(response) {
                console.log(response);
                if(response) {
                    const markup = `<svg>
                    <use xlink:href="img/icons/favorite_all_black_24dp.svg#favall"></use>
                    </svg>`;
                    thisBtn.innerHTML = markup;
                } else {
                    const markup = `<svg>
                    <use xlink:href="img/icons/favorite_border_black_24dp.svg#fav"></use>
                    </svg>`;
                    thisBtn.innerHTML = markup;
                }
            }
        })
    })
});