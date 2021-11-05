var player = videojs('videoPlayer', {
    controls: true,
    fluid: false,
    userActions: {
        hotkeys: true,
    }
});

player.chat(player);