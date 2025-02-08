function setTitle(Mynewtitle) {
    const titleElement = document.getElementById('page-title');
    titleElement.textContent = newTitle || 'Welcome to My Customizable Page';
}

function setDescription(ThisismynewDescription) {
    const descriptionElement = document.getElementById('page-description');
    descriptionElement.textContent = newDescription || 'This is a simple description of the page.';
}

function setBackgroundColor(Lightblue) {
    document.body.style.backgroundColor = color || '';
}

function setFontColor(darkred) {
    document.body.style.color = color || '';
}

function setTheme(dark) {
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
    } else if (theme === 'light') {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
    } else {
        document.body.classList.remove('dark-theme', 'light-theme');
    }
}