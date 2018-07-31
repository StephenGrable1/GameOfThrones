//below is the new message functionality 
var submit = document.querySelector('.chat--submit');

submit.addEventListener("click", function(){
    //This could be simplified with jQuery 
    //but for now I will implement in vanilla JS
    var message = document.querySelector('.chat--input').value;
    
    //building the outer div
    var chatOutgoing = document.createElement('div');
    chatOutgoing.setAttribute("class", "chat--message -outgoing");
    
    //building the children 
    var chatText = document.createElement('div');
    chatText.setAttribute("class", "chat--text");
    var chatInfo = document.createElement('div');
    chatInfo.setAttribute("class", "chat--info");
    
    //creating the entire message div by appending children
    chatText.appendChild(document.createTextNode(message));
    chatInfo.appendChild(document.createTextNode('You'));
    chatOutgoing.appendChild(chatText);
    chatOutgoing.appendChild(chatInfo);
    
    document.querySelector('.chat--messages').appendChild(chatOutgoing);
});

//below is the @ messaging functionality 
var usernameClick = document.querySelector('.chat--friends');

usernameClick.addEventListener("click", function(e){
    var username = e.target.innerHTML;
    document.querySelector('.chat--input').value = "@" + username;
})



