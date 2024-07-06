//create a funtion to grab information from local storage
function postBlog () {
    const postName = JSON.parse(localStorage.getItem('username'));
    const postTitle = JSON.parse(localStorage.getItem('title'));
    const postComment = JSON.parse(localStorage.getItem('comment'));

    //post items on blogpost page

    document.querySelector('#user-name').textContent = (postName);
    document.querySelector('#user-title').textContent = (postTitle);
    document.querySelector('#user-comment').textContent = (postComment);
};