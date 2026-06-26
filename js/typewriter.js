var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    // loop: true
    delay: 30
});

typewriter.typeString('Hi!')
    // .pauseFor(10)
    .typeString("<br> My name is Sid and I am an experienced Software Engineer with a strong background in ")
    .typeString("<br> ASIC validation, hardware abstraction library development and GPU feature verification. ")
    .typeString("<br> <br> Currently, I am employed @ Tenstorrent as a Senior Staff Software Engineer where I lead ")
    .typeString("<br> System Level Test manufacturing development for PCIe cards through server racks, architect ")
    .typeString("<br> HAL-based Python SLT frameworks, and drive factory automation, yield & runtime improvements.")
    .typeString("<br> <br> I graduated from Toronto Metropoliton University (formerly Ryerson University) in 2019")
    .typeString("<br> with a bachelors in Electrical & Computer Engineering.")
    .start();