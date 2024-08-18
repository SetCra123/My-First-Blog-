//create a funtion to grab information from local storage
function postBlog () {
    const post = JSON.parse(localStorage.getItem('blogPost'));
console.log(post);
    //update to make each post its own individual card
    //container to hold all blog post cards
    blogContainer = document.querySelector('.blog-container');
    
    

    for (let i = 0; i < post.length; i++){   
    //creating a div element on the blog page 
    const blogPostCard = (document.createElement(`div`)) 
    blogPostCard.classList.add('card');
    blogPostCard.innerHTML = `<h2>Blog Post</h2>
    <p><strong>Title:</strong> ${post[i].title}<span id="user-title"></span></p>
    <p><strong>Username:</strong> ${post[i].username}<span id="user-name"></span></p>
    <p><strong>Comment:</strong> ${post[i].comment}<span id="user-comment"></span></p>`
    blogContainer.appendChild(blogPostCard);
}
};

postBlog();