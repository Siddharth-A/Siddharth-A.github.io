var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    // loop: true
    delay: 50
});

typewriter.typeString('Hi!')
    // .pauseFor(10)
    .typeString("<br> My name is Sid and I am an experienced Software Engineer with a strong background in ")
    .typeString("<br> ASIC validation, hardware abstraction library development and GPU feature verification. ")
    .typeString("<br> <br> Currently, I am employed @ AMD as a Staff Software Engineer where I develop apps &")
    .typeString("<br> System Level Tests in C++ to verify ASIC functionality and performance while leading ")
    .typeString("<br> a team of 10+ engineers.")
    .typeString("<br> <br> I graduated from Toronto Metropoliton University (formerly Ryerson University) in 2019")
    .typeString("<br> with a bachelors in Electrical & Computer Engineering.")
    .start();