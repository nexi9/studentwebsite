var darkmode = document.querySelector('.darkmode')

darkmode.onclick = function() {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        icon.src = 'sunn.jpeg';
    } else {
        icon.src = 'moonn.jpeg';
    }
}