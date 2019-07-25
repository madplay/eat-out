const currentDate = new Date();
const currentHours = currentDate.getHours();
const shouldPrepareMenu = currentHours < 24 ? true : false;

if (shouldPrepareMenu) {
    let welDescription = $('.description');
    welDescription.text('지금은 메뉴를 추천할 시간입니다.');

    $('.menu_template').show();
    attachMenuEvent();
}

function attachMenuEvent() {
    $('#submitMenu').click(function () {
        const data = $('form.menu_form').serialize();
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/menu',
            data: data,
            success: function (result) {
                alert('success: ' + result.data);
            },
            error: function (result) {
                alert('error: ' + result);
            }
        })
    });

    $('#closeButton').click(() => {
        window.close();
    })
}

$(function () {
    console.log('밥밥밥밥 배고파배고파');
});