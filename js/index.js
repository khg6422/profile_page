$(document).ready(function() {
    const imgContainer = $(".img-container3");
    const startImg = imgContainer.find(".start-img");
    const raiseImg = imgContainer.find(".raise-img");
    const decideImg = imgContainer.find(".decide-img");
    const start = imgContainer.find(".start");
    const raise = imgContainer.find(".raise");
    const decide = imgContainer.find(".decide");

    imgContainer.on("mousemove", function(event) {
        const x = event.pageX - imgContainer.offset().left;
        const y = event.pageY - imgContainer.offset().top;

        if (x >= 0 && x <= 54 && y >= 0 && y <= 53) {
            startImg.css("display", "block");
            raiseImg.css("display", "none");
            decideImg.css("display", "none");
            start.fadeIn(500); 
            raise.fadeOut(500); 
            decide.fadeOut(500); 
        } else if (x >= 540 && x <= 594 && y >= 0 && y <= 53) {
            startImg.css("display", "none");
            raiseImg.css("display", "block");
            decideImg.css("display", "none");
            start.fadeOut(500); 
            raise.fadeIn(500); 
            decide.fadeOut(500); 
        } else if (x >= 1081 && x <= 1135 && y >= 0 && y <= 53) {
            startImg.css("display", "none");
            raiseImg.css("display", "none");
            decideImg.css("display", "block");
            start.fadeOut(500); 
            raise.fadeOut(500); 
            decide.fadeIn(500); 
        } else {
            startImg.css("display", "none");
            raiseImg.css("display", "none");
            decideImg.css("display", "none");
            start.fadeOut(500); 
            raise.fadeOut(500); 
            decide.fadeOut(500); 
        }
    });

    imgContainer.on("mouseleave", function() {
        startImg.css("display", "none");
        raiseImg.css("display", "none");
        decideImg.css("display", "none");
        start.fadeOut(500); 
        raise.fadeOut(500); 
        decide.fadeOut(500); 
    });
});