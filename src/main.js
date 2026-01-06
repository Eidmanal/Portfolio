projects.forEach(project => {
    let technologies = project.stack.split(', ');
    const stackItem = document.createElement('div');
    stackItem.className = 'stack-item';
    stackItem.innerHTML = `${technologies.map((tech, index) => `<span class="tech">${tech}</span>`).join('')}`;

    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
    <div class="project-top">
    <h3>${project.title}</h3>
    </div>
    <div class="project-body">
    <p>${project.description}</p>
    <img src="${project.image}" alt="${project.title}">
    <br><br>
    <div class="stack-container">
        ${stackItem.innerHTML}
    </div>
    <br><br>
    <a class="project-link" href="${project.link}">View project on GitHub</a>
    </div>
    `;

    document.getElementById('projects-container').appendChild(projectCard);
});