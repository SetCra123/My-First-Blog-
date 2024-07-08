//create a funtion to grab information from local storage
function postBlog () {
    const post = JSON.parse(localStorage.getItem(blogPost));

    //post items on blogpost page

    document.querySelector('#user-name').appendChild = (blogPost);
};