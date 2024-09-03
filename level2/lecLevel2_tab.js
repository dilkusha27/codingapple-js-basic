// 버튼0 누르면
// - 모든 버튼에 붙은 orange 클래스명 제거
// - 모든 div에 붙은 show 클래스명 제거
// - div0에 show 클래스명 추가

// 내 답안

// $('.tab-button').eq(0).on('click', function(){
//     $('.tab-button').classList.remove('.orange');
//     $('.tab-content').classList.remove('.show');
//     $('.tab-button').eq(0).classList.add('.orange');
//     $('.tab-content').eq(0).classList.add('.show');
// })

// $('.tab-button').eq(1).on('click', function(){
//     $('.tab-button').classList.remove('.orange');
//     $('.tab-content').classList.remove('.show');
//     $('.tab-button').eq(1).classList.add('.orange');
//     $('.tab-content').eq(1).classList.add('.show');
// })

// $('.tab-button').eq(2).on('click', function(){
//     $('.tab-button').classList.remove('.orange');
//     $('.tab-content').classList.remove('.show');
//     $('.tab-button').eq(2).classList.add('.orange');
//     $('.tab-content').eq(2).classList.add('.show');
// })

// 모범 답안

var button = $('.tab-button');
var content = $('.tab-content');
// 반복되는 부분은 가급적 변수 활용할 것

$('.tab-button').eq(0).on('click', function(){
    $('.tab-button').removeClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-button').eq(0).addClass('orange');
    $('.tab-content').eq(0).addClass('show');
})

$('.tab-button').eq(1).on('click', function(){
    $('.tab-button').removeClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-button').eq(1).addClass('orange');
    $('.tab-content').eq(1).addClass('show');
})

$('.tab-button').eq(2).on('click', function(){
    $('.tab-button').removeClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-button').eq(2).addClass('orange');
    $('.tab-content').eq(2).addClass('show');
})