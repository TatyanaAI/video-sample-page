$(() => {
    let videoBlockWrapper = $(".video_block_wrapper")
    let myVideo = document.getElementById("myVideo");

    $(".video_play_button").on("click", event => {
        myVideo.play();
    });

    $(myVideo).on('play', function (e) {
        videoBlockWrapper.addClass("active")
        myVideo.controls = true;
    });

    $(myVideo).on('pause', function (e) {
        videoBlockWrapper.removeClass("active")
        myVideo.controls = false;
    });

    $(window).keypress(function (e) {
        if ((e.key === ' ' || e.key === 'Spacebar') && videoBlockWrapper.hasClass("active")) {
            e.preventDefault();
            myVideo.pause();
        }
    })
})