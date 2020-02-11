// Creates elements
$('body').append($('<div>').addClass('container my-3'));
$('.container').append($('<div>').addClass('welcomeDiv row my-3 justify-content-center'));
$('.container').append($('.inputSubmit'));
$('.container').append($('.hoverDiv'));
$('.container').append($('.pRainbow'));
$('.container').append($('.name'));
$('.welcomeDiv').append($('<button>').addClass('btnOne btn btn-primary').text('Welcome'));

// Step 1
    // Event listener for welcome alert on button one
    $('.btnOne').click(function(){
        alert('Welcome, Traveler!');
    });

// Step 2
    // Event listener for inputBtn that alerts the input value
    $('.inputBtn').click(function(){
        alert($('.input-message').val());
    });

// Step 3
    // Event listeners for mouse entering and leaving hoverDiv, changes color
    $('.hoverDiv').mouseenter(function(){
        $(this).css('background-color', 'green');
    })
    $('.hoverDiv').mouseleave(function(){
        $(this).css('background-color', 'white');
    });

// Step 4
    // Event listener for click on p, changes color
    // $('.pRainbow').click(function(){$(this).css('color', 'red')});
    $('.pRainbow').click(function(){$('.pRainbow').css('color', 'RGB(' + getRandomInt(255) + ',' + getRandomInt(255) + ',' + getRandomInt(255) + ')');
    });
    // Random color generator
    function getRandomInt(max){
        return Math.floor(Math.random()*Math.floor(max));
    }

// Step 5
    $('.addName').click(function(){
        $('.message').append($('<span>Ben</span>'));
        $(this).prop('disabled', true);
    });