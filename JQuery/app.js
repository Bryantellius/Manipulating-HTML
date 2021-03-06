// Creates elements
$('body').append($('<div>').addClass('container my-3'));
$('.container').append($('<div>').addClass('welcomeDiv row my-3 justify-content-center'));
$('.container').append($('.inputSubmit'));
$('.container').append($('.hoverDiv'));
$('.container').append($('.pRainbow'));
$('.container').append($('.name'));
$('.container').append($('.friends'));
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
    // Event Listener for click to addName btn, displays my name
    $('.addName').click(function(){
        $('.message').append($('<span><strong>Ben<strong></span>'));
        $(this).prop('disabled', true);
    });

// Step 6
    let friends = [{name: 'Jon', info: 'Jon Snow, born Aegon Targaryen, is the son of Lyanna Stark and Rhaegar Targaryen, the late Prince of Dragonstone.',
address: 'https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20170101103142'},
    {name: 'Petyr', info: 'Lord Petyr Baelish, popularly called Littlefinger, was the Master of Coin and a skilled manipulator.',
address: 'https://vignette.wikia.nocookie.net/gameofthrones/images/a/a4/House-Baelish-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20161231114753'}, 
    {name: 'Benjen', info: "Benjen Stark was a First Ranger of the Night's Watch. He embarks on a ranging north of the Wall, and did not return..",
address: 'https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20170101103142'},
    {name: 'Arya', info: 'Princess Arya Stark is the third child and second daughter of Lord Eddard Stark and his wife, Lady Catelyn Stark.',
address: 'https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20170101103142'},
    {name: 'Sansa', info: 'Queen Sansa Stark is the eldest daughter and the second child of Lord Eddard Stark and his wife, Lady Catelyn. She is the current Queen in the North.',
address: 'https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20170101103142'},
    {name: 'Tyrion', info: 'Lord Tyrion Lannister is the youngest child of Lord Tywin Lannister and younger brother of Cersei and Jaime Lannister. A dwarf, he uses his wit and intellect to overcome the prejudice he faces. He is the current Lord of Casterly Rock and Hand of the King Brandon Stark.',
address: 'https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Lannister-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20170101095357'},
    {name: 'Davos', info: 'Lord Davos Seaworth, also known as the Onion Knight, is a landed knight, and a former smuggler who was in the service of Stannis Baratheon, Lord of Dragonstone and claimant to the Iron Throne, whom he served as Hand of the King.',
address: 'https://vignette.wikia.nocookie.net/gameofthrones/images/e/e5/House-Seaworth-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20170523033250'},
    {name: 'Brienne', info: 'Ser Brienne of Tarth is a knight of House Tarth and the only daughter of Lord Selwyn Tarth. Prior to the Battle of Winterfell, Brienne was knighted by Ser Jaime Lannister, making her the first woman of the Seven Kingdoms to become a knight.',
address: 'https://vignette.wikia.nocookie.net/gameofthrones/images/3/33/House-Tarth-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20170724014934'},
    {name: 'Sam', info: "Samwell, born Samwell Tarly, and often called Sam, is the current Grand Maester of the Six Kingdoms. He is also a former steward of the Night's Watch and Jon Snow's closest friend. He is the eldest son of Lord Randyll Tarly and Lady Melessa Tarly of Horn Hill and older brother of Dickon and Talla Tarly.",
address: 'https://vignette.wikia.nocookie.net/gameofthrones/images/2/2d/House-Tarly-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20170809082143'},
    {name: 'Jaime', info: 'Ser Jaime Lannister, commonly known as the "Kingslayer", was the elder son of Lord Tywin Lannister, younger twin brother of Cersei Lannister, and older brother of Tyrion Lannister.', 
address: 'https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Lannister-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20170101095357'}];
    
    // Event listener for click on addFriend btn that adds friends and info into list-group
    $('.addFriend').click(function(){
        for(let i=0; i<friends.length;i++){
            if(i===0){
                $('.friendList').append($('<a>'+friends[i].name+'</a>').addClass('list-group-item list-group-item-action active').prop('id', 'list-'+i+'-list').attr({'data-toggle': 'list', 'href': '#list'+i, 'role': 'tab'}));
                $('.tab-content').append($('<div>'+friends[i].info+'</div>').addClass('tab-pane fade show active').prop('id', 'list'+i).attr('role', 'tabpanel').css('font-size', '1.5rem'));
                $('#list'+i).append($('<img></img>').css({'height': '200px', 'margin-top': '2rem', 'display': 'block'}).attr('src', friends[i].address));
            }else{
                $('.friendList').append($('<a>'+friends[i].name+'</a>').addClass('list-group-item list-group-item-action').prop('id', 'list-'+i+'-list').attr({'data-toggle': 'list', 'href': '#list'+i, 'role': 'tab'}));
                $('.tab-content').append($('<div>'+friends[i].info+'</div>').addClass('tab-pane fade').prop('id', 'list'+i).attr('role', 'tabpanel').css('font-size', '1.5rem'));
                $('#list'+i).append($('<img></img>').css({'height': '200px', 'margin-top': '2rem', 'display': 'block'}).attr('src', friends[i].address));
            }
        }
       
        $(this).prop('disabled', true);
    });
