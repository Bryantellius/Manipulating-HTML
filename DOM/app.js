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
    firstDiv.className = 'input-group my-3';
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
    twoDiv.className = 'row border border-dark rounded';
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
    threeDiv.className = 'row border my-2 p-2 border-dark rounded';
    threeDiv.style = 'height: 200px'
    main.appendChild(threeDiv);
    // Create p element
    let divPone = document.createElement('p');
    divPone.textContent = 'Click me to see the rainbow!' 
    threeDiv.appendChild(divPone);
    // Event Listener for 
