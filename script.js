let checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
    //mudar a cor
    document.body.classList.toggle('dark');
})