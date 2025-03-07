// Fetch projects and blog posts from the backend
document.addEventListener('DOMContentLoaded', function() {
    fetchProjects();
    fetchBlogPosts();
});

function fetchProjects() {
    fetch('/api/projects')
        .then(response => response.json())
        .then(data => {
            const projectList = document.getElementById('project-list');
            data.projects.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p>`;
                projectList.appendChild(projectElement);
            });
        })
        .catch(error => console.error('Error fetching projects:', error));
}

function fetchBlogPosts() {
    fetch('/api/blog')
        .then(response => response.json())
        .then(data => {
            const blogPosts = document.getElementById('blog-posts');
            data.posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
                blogPosts.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error fetching blog posts:', error));
}