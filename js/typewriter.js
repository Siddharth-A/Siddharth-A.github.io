var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('SOFTWARE ENGINEER.')
    .pauseFor(500)
    .deleteAll()
    .typeString('ELECTRICAL ENGINEER.')
    .pauseFor(500)
    .start();