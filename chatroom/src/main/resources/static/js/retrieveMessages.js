const chatBox = document.getElementById("formTextArea")

// Sets an event listener on the TextArea to POST the form upon
//  pressing *Enter* on a traditional keyboard INSTEAD of going
//  to a new line
chatBox.addEventListener('keypress', e => {
    if(e.which === 13) {
        e.target.form.dispatchEvent(new Event("submit" , {cancelable: true}));
        e.preventDefault();
        e.target.value = "";
    }
})
//Grabbing the session user and assigning the values to the *hidden* user fields
var user = JSON.parse(sessionStorage.getItem('sessionUser'))
document.querySelector('#userId').value = user.id
document.querySelector('#userDesignation').value = user.username


// refreshes the ArrayList that conatins the Chat Messages for the particular channel,
// and loads it into the view
function updateChatMessages () {
    var pathURL = window.location.pathname  + '/refreshChat'
    $.get(pathURL).done(function(fragment) {
        $("#chatWrapperDiv").replaceWith(fragment)
    }) 
}

//Setting the Chat Messages to refresh every 1/2 second
window.setInterval(updateChatMessages   , 500 )




