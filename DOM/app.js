let main = document.createElement('div');
main.className = 'container';
document.body.appendChild(main);

// Step 1
    let btnDiv = document.createElement('div');
    btnDiv.className = 'row mt-4 justify-content-center'
    main.appendChild(btnDiv);
    let btn = document.createElement('button');
    btn.textContent = 'Welcome';
    btn.className = 'btn btn-primary';
    btnDiv.appendChild(btn);
    // Event Listener for clicks to button
    btn.addEventListener('click', function(){
        alert('Hello, Traveler!')
    })

// Step 2

    // Div for button and text area
    let firstDiv = document.createElement('div');
    firstDiv.className = 'input-group my-3 shadow';
    main.appendChild(firstDiv);
    // Button
    let inputBtn = document.createElement('button');
    inputBtn.className = 'btn btn-primary mr-2';
    inputBtn.textContent = 'Submit';
    firstDiv.appendChild(inputBtn);
    // Text Area
    let textArea = document.createElement('textarea');
    textArea.className = 'form-control';
    firstDiv.appendChild(textArea);
    // Event Listener for clicks on button to display text in textbox
    inputBtn.addEventListener('click', function(){
        alert(textArea.value);
    })

// Step 3
    // Create new div
    let twoDiv = document.createElement('div');
    twoDiv.className = 'row border border-dark rounded shadow';
    twoDiv.style = 'height: 200px'
    main.appendChild(twoDiv);
    // Event Listener for mouseenter and mouseleave to change background color
    twoDiv.addEventListener('mouseenter', e => {
        twoDiv.style.backgroundColor = 'blue';
    })
    twoDiv.addEventListener('mouseleave', e => {
        twoDiv.style.backgroundColor = 'white';
    })

// Step 4
    // Create new div
    let threeDiv = document.createElement('div');
    threeDiv.className = 'row border my-2 p-2 border-dark rounded shadow';
    main.appendChild(threeDiv);
    // Create p element
    let divPone = document.createElement('p');
    divPone.style.fontSize = '1.5rem';
    divPone.textContent = 'Click me to see the rainbow!' 
    threeDiv.appendChild(divPone);
    // Event Listener for click on p
    divPone.addEventListener('click', function(){
        // divPone.style.color = 'red';
        divPone.style.color = 'RGB(' + getRandomInt(255) + ',' + getRandomInt(255) + ',' + getRandomInt(255) + ')';
    })

    // Random color generator
    function getRandomInt(max){
        return Math.floor(Math.random()*Math.floor(max));
    }

// Step 5
    // Create new div
    let fourDiv = document.createElement('div');
    fourDiv.className = 'row row-cols-1 border my-2 p-2 border-dark rounded justify-content-center shadow';
    main.appendChild(fourDiv);
    // Create button
    let fourBtn = document.createElement('button');
    fourBtn.className = 'col-12 btn btn-primary';
    fourBtn.textContent = 'My Name';
    fourDiv.appendChild(fourBtn);
    // Event listener for click to button, adds span with 'Ben'
    fourBtn.addEventListener('click', function(){
        let name = document.createElement('span');
        name.className = 'col';
        name.style.fontSize = '1.5rem';
        name.textContent = 'Ben';
        fourDiv.appendChild(name);
        fourBtn.setAttribute('disabled', true);
    });
    
// Step 6
    // Create new div
    let fiveDiv = document.querySelector('#fiveDiv');
    // fiveDiv.className = 'row border my-2 p-2 border-dark rounded justify-content-center shadow';
    main.appendChild(fiveDiv);
    // // Create button
    let fiveBtn = document.createElement('button');
    fiveBtn.className = 'col-12 my-2 btn btn-primary';
    fiveBtn.textContent = 'Add Friends';
    fiveDiv.prepend(fiveBtn);
    // // Create ul
    // let fiveUl = document.createElement('ul');
    // fiveUl.className = 'col mt-2 mx-2';
    // fiveUl.style.fontSize = '1.5rem';
    // fiveDiv.appendChild(fiveUl);
    let friends = ['Jon', 'Petyr', 'Benjen', 'Arya', 'Sansa', 'Tyrion', 'Davos', 'Brienne', 'Sam', 'Jaime'];
    // Event listener for button to add the names of my GOT friends to the ul
    fiveBtn.addEventListener('click', function(){
        for(let i=0; i<friends.length;i++){
            // let newFriend = document.createElement('li');
            // newFriend.textContent = friends[i];
            // fiveUl.appendChild(newFriend);

            // Experimenting with Bootstrap List Group with switch/cases
            // Not in love, needs more styling/or an img to fill the empty space
            // Would redesign to a bootstrap collapse list
            switch(i) {
                case 0:
                    document.querySelector('#list-0-list').textContent = friends[0];
                    document.querySelector('#list-0').textContent = 'Jon Snow, born Aegon Targaryen, is the son of Lyanna Stark and Rhaegar Targaryen, the late Prince of Dragonstone.';
            case 1:
                    document.querySelector('#list-1-list').textContent = friends[1];
                    document.querySelector('#list-1').textContent = 'Lord Petyr Baelish, popularly called Littlefinger, was the Master of Coin and a skilled manipulator.';
            case 2:
                    document.querySelector('#list-2-list').textContent = friends[2];
                    document.querySelector('#list-2').textContent = "Benjen Stark was a First Ranger of the Night's Watch. He embarks on a ranging north of the Wall, and did not return..";
            case 3:
                    document.querySelector('#list-3-list').textContent = friends[3];
                    document.querySelector('#list-3').textContent = 'Princess Arya Stark is the third child and second daughter of Lord Eddard Stark and his wife, Lady Catelyn Stark.';
            case 4:
                    document.querySelector('#list-4-list').textContent = friends[4];
                    document.querySelector('#list-4').textContent = 'Queen Sansa Stark is the eldest daughter and the second child of Lord Eddard Stark and his wife, Lady Catelyn. She is the current Queen in the North.';
            case 5:
                    document.querySelector('#list-5-list').textContent = friends[5];
                    document.querySelector('#list-5').textContent = 'Lord Tyrion Lannister is the youngest child of Lord Tywin Lannister and younger brother of Cersei and Jaime Lannister. A dwarf, he uses his wit and intellect to overcome the prejudice he faces. He is the current Lord of Casterly Rock and Hand of the King Brandon Stark.';
            case 6:
                    document.querySelector('#list-6-list').textContent = friends[6];
                    document.querySelector('#list-6').textContent = 'Lord Davos Seaworth, also known as the Onion Knight, is a landed knight, and a former smuggler who was in the service of Stannis Baratheon, Lord of Dragonstone and claimant to the Iron Throne, whom he served as Hand of the King.';
            case 7:
                    document.querySelector('#list-7-list').textContent = friends[7];
                    document.querySelector('#list-7').textContent = 'Ser Brienne of Tarth is a knight of House Tarth and the only daughter of Lord Selwyn Tarth. Prior to the Battle of Winterfell, Brienne was knighted by Ser Jaime Lannister, making her the first woman of the Seven Kingdoms to become a knight.';
            case 8:
                    document.querySelector('#list-8-list').textContent = friends[8];
                    document.querySelector('#list-8').textContent = "Samwell, born Samwell Tarly, and often called Sam, is the current Grand Maester of the Six Kingdoms. He is also a former steward of the Night's Watch and Jon Snow's closest friend. He is the eldest son of Lord Randyll Tarly and Lady Melessa Tarly of Horn Hill and older brother of Dickon and Talla Tarly.";
            case 9:
                    document.querySelector('#list-9-list').textContent = friends[9];
                    document.querySelector('#list-9').textContent = 'Ser Jaime Lannister, commonly known as the "Kingslayer", was the elder son of Lord Tywin Lannister, younger twin brother of Cersei Lannister, and older brother of Tyrion Lannister.';
            }
        }
        fiveBtn.setAttribute('disabled', true);
    })
    