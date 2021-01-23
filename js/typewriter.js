var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Software Developer.')
    .pauseFor(500)
    .deleteAll()
    .typeString('Electrical Engineer.')
    .pauseFor(500)
    .start();