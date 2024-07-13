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
    
    const blogPost = {
        username: userNameIn.value,
        title: titleIn.value,
        comment: comment.value,

    };
    


    
//add blog post to local Storage

//creating a variable to store past blog posts
const allBlogPosts = JSON.parse (localStorage.getItem('blogPost')) || []
allBlogPosts.push(blogPost)

localStorage.setItem('blogPost', JSON.stringify(allBlogPosts));
    
});

//create a funtion to grab information from local storage
