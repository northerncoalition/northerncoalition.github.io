function writeupTemplate(data) {
    var div = document.createElement('div');
    div.innerHTML = '<li><a></a></li>';
    var link = div.querySelector('a');
    link.href = data.link;
    link.innerText = `${data.ctf} - ${data.challenge}`;
    return div.children[0];
}

window.addEventListener('load', function() {
    var writeups = document.querySelector('#writeups');

    fetch('/data/writeups.json')
        .then((x) => x.json())
        .then((data) => {
            var html = data.map(writeupTemplate).forEach((li) => {
                writeups.appendChild(li);
            });
    });
});
