document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    document.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if(scrollY > 45){
            header.classList.add('active');
        }else{
            header.classList.remove('active');
        }
    });
    const footerDate = document.getElementById('footerDate');
    footerDate.innerText = new Date().getFullYear();

    document.getElementById('logo').addEventListener('click', () => {
        window.location.assign('/')
    });
    
    const audioController = document.getElementById('audioController');
    const audioControllerIcon = audioController.querySelector('span');
    const player = document.getElementById('player');

    let isPlaying = false;
    
    const wasPlaying = sessionStorage.getItem('isPLaying') === 'true';
    const storedTime = parseFloat(sessionStorage.getItem('audioTime') || '0');

    if (player) {
      player.currentTime = storedTime;

      if (wasPlaying) {
        player.play().then(() => {
          isPlaying = true;
          audioController.classList.add('playing');
          audioControllerIcon.innerText = 'volume_up';
        }).catch((err) => {
          console.warn("Autoplay bloccato dal browser", err);
        });
      }
    }

    audioController.addEventListener('click', () => {
      if (isPlaying) {
        player.pause();
        audioControllerIcon.innerText = 'volume_off';
        audioController.classList.remove('playing');
      } else {
        player.play();
        audioControllerIcon.innerText = 'volume_up';
        audioController.classList.add('playing');
      }
      isPlaying = !isPlaying;
    });

    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('isPLaying', isPlaying.toString());
      sessionStorage.setItem('audioTime', player.currentTime.toString());
    });

});