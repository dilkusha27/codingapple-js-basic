var button = $('.tab-button');
var content = $('.tab-content');

// 조건문 변수는 var 아닌 let으로

// 버튼의 마지막 요소의 인덱스를 구해서 대입?

for (let i = 0; i < button.length; i++){
    button.eq(i).on('click', function(){
        button.removeClass('orange');
        button.eq(i).addClass('orange');
        content.removeClass('show');
        content.eq(i).addClass('show');
    })
}