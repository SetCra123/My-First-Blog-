//create a funtion to grab information from local storage
function postBlog () {
    const post = JSON.parse(localStorage.getItem('blogPost'));
console.log(post);
    //post items on blogpost page
    //create elelment which is empty p tag
    // const blogPosts = (document.createElement(`p`));
    //put post inside the empty string after its been stringified
    // blogPosts.innerHTML = JSON.stringify(post)
    //appending child to the element with id user-name
    // document.querySelector('#user-name').appendChild(blogPosts)
    for (let i = 0; i < post.length; i++){   
    //creating a div element on the blog page 
    const blogPostCard = (document.createElement(`div`)) 
    blogPostCard.innerHTML = `<h2>Blog Post</h2>
    <p><strong>Title:</strong> ${post[i].title}<span id="user-title"></span></p>
    <p><strong>Username:</strong> ${post[i].username}<span id="user-name"></span></p>
    <p><strong>Comment:</strong> ${post[i].comment}<span id="user-comment"></span></p>`
    document.querySelector('.card').appendChild(blogPostCard)
}
};

postBlog();