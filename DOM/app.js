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
    let fiveDiv = document.createElement('div');
    fiveDiv.className = 'row reverse-row border my-2 p-2 border-dark rounded justify-content-center shadow';
    main.appendChild(fiveDiv);
    // Create button
    let fiveBtn = document.createElement('button');
    fiveBtn.className = 'col-12 btn btn-primary';
    fiveBtn.textContent = 'Add Friend';
    fiveDiv.appendChild(fiveBtn);
    // Create ul
    let fiveUl = document.createElement('ul');
    fiveUl.className = 'col mt-2 mx-2';
    fiveUl.style.fontSize = '1.5rem';
    fiveDiv.appendChild(fiveUl);
    let friends = ['Jon', 'Petyr', 'Ned', 'Arya', 'Sansa', 'Tyrion', 'Robb', 'Sansa', 'Sam', 'Jaime'];
    // Event listener for button to add the names of my GOT friends to the ul
    fiveBtn.addEventListener('click', function(){
        for(let i=0; i<friends.length;i++){
            let newFriend = document.createElement('li');
            newFriend.textContent = friends[i];
            fiveUl.appendChild(newFriend);
        }
        fiveBtn.setAttribute('disabled', true);
    })
    