const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');

sendBtn.addEventListener('click', sendMsg)

function sendMsg (){
    let content = messageIn.Value;
    //console.log(content);
    if (content === ''){
        alert('Please enter a valid value.')
    } 
    else{
        messageOut.innerHTML = content;
                
    }
}
