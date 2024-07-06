//create variable to store input values
const userNameIn = document.querySelector('#username');
const titleIn = document.querySelector('#title');
const commentIn = document.querySelector('#comment');
const submitButton = document.querySelector('#submit');
const userNameSpan = document.querySelector('#user-username');
const userTitleSpan = document.querySelector('#user-title');
const userComment = document.querySelector('#user-comment');


//add even listener for click submit button
submitButton.addEventListener('click', function (event) {
    
    const username = userNameIn.value;
    const title = titleIn.value;
    const comment = comment.value.trim;

    
//add blog post to local Storage
    localStorage.setItem('username', JSON.stringify(username));
    localStorage.setItem('title', JSON.stringify(title));
    localStorage.setItem('comment', JSON.stringify(comment));
});

