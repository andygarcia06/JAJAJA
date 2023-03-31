// BRING TO FRONT

function bringToFront(popup) {
  let popups = document.querySelectorAll('.popup');
  popups.forEach(function (popup) {
    popup.classList.remove('active');
  });

  popup.classList.add('active');
}
     


//PRELOADER



const progressBar = document.getElementById("progressbar");

function updateProgressBar() {
  const progress = parseInt(progressBar.value);
  if (progress < 100) {
    progressBar.value = progress + 1;
    if (progress > 0) {
      progressBar.style.background = `linear-gradient(to right, rgb(250, 0, 31)${progress}%,rgb(255, 247, 199)  ${progress}%)`;
    }
  } else {
    clearInterval(intervalId);
    document.getElementById("preloader").style.display = "none";
  }
}

const intervalId = setInterval(updateProgressBar, 40); 



// FULL SCREEN API

let fullScreenElement = document.querySelector('.fullscreen-btn');
    const removeFullScreenElement = document.querySelector('.exit-fullscreen-btn');


function fullscreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
            
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}

function fullScreenEvent() {
    document.documentElement.requestFullscreen();
    fullScreenElement.innerHTML = 'exit full screen';
    fullScreenElement.classList.remove('fullscreen-btn');
    fullScreenElement.classList.add('exit-fullscreen-btn');
    const removeFullScreenElement = document.querySelector('.exit-fullscreen-btn');

    function closeFullscreen() {
        if (document.exitFullscreen) {
          document.exitFullscreen();
          removeFullScreenElement.innerHTML = 'Fullscreen';
          fullScreenElement.classList.remove('exit-fullscreen-btn');
          fullScreenElement.classList.add('fullscreen-btn');
        } else if (document.webkitExitFullscreen) { /* Safari */
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
          document.msExitFullscreen();
        }

      }

      console.log(removeFullScreenElement)

      removeFullScreenElement.addEventListener('click', closeFullscreen)
}


fullScreenElement.addEventListener('click',fullScreenEvent);

// NAVIGATION

const arrowToNext = document.querySelectorAll('.to-next-section[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : 'smooth'
        });
    });
});

const section1 = document.querySelector('.jajaja-section-1');

window.onResize = function() {
  if (window.innerWidth <= 1000) section1.classList.add('container');
  else section1.classList.remove('container');
};

// RIGHT CLICK

const rightClickCloseBtn = document.querySelector("#tools-close-btn")
const el = (sel, par) => (par||document).querySelector(sel);

const elPopup = el("#popup-tools");

function rightClick(evt) {
    evt.preventDefault();
  const elBtn = evt.currentTarget;
  
  Object.assign(elPopup.style, {
    left: `${evt.pageX + elBtn.scrollLeft - elBtn.offsetLeft}px`,
    top:  `${evt.pageY + elBtn.scrollTop - elBtn.offsetTop}px`,
    display: `block`,
    zIndex:800000000000,
  });
};

section1.addEventListener("contextmenu", rightClick,false);
section1.addEventListener("click",()=>{
    elPopup.style.display = 'none';
    bringToFront(popup);
});
rightClickCloseBtn.addEventListener('click',()=>{
    elPopup.style.display = 'none';
})



const popupToolsClock = document.querySelector('#popup-clock');
const triggerPopupToolsClock = document.getElementById('jajaja-trigger-popup-tools-clock');
const popupToolsBackground = document.querySelector('.popup-background');
const triggerPopupToolsBg = document.getElementById('jajaja-trigger-popup-tools-bg');

// POPUP CLOCK

function openPopupToolsClock(){
    popupToolsClock.style.display = 'block';
    popupToolsBackground.style.display ='none';
};

function closePopupToolsClock(){
    popupToolsClock.style.display = 'none';
};

triggerPopupToolsClock.addEventListener('click',openPopupToolsClock)

//POPUP BACKGROUND



function openPopupToolsBg(){
    popupToolsBackground.style.display = 'block';
    popupToolsClock.style.display ='none';
    bringToFront(popup);
};

function closePopupToolsBg(){
    popupToolsBackground.style.display = 'none';
};

triggerPopupToolsBg.addEventListener('click',openPopupToolsBg)

// FORMULAIRE

function validateForm() {
    const name = document.forms["contactForm"]["name"].value;
    const email = document.forms["contactForm"]["email"].value;
    const message = document.forms["contactForm"]["message"].value;

    const regex = /^[a-zA-Z0-9\s]+$/; // vérifie si les caractères sont alphanumériques

    if (name == "") {
        alert("Veuillez entrer votre nom");
        return false;
    }
    if (!regex.test(name)) {
        alert("Le nom ne doit contenir que des caractères alphanumériques");
        return false;
    }
    if (email == "") {
        alert("Veuillez entrer votre adresse e-mail");
        return false;
    }
    if (message == "") {
        alert("Veuillez entrer un message");
        return false;
    }
    if (!regex.test(message)) {
        alert("Le message ne doit contenir que des caractères alphanumériques");
        return false;
    }
    return true;
}


// POPUP CONTACTS

const popupContact = document.getElementById("jajaja-contact-trigger");
const audio = document.getElementById("audioPlayer"); 



function triggerContacts() {
  const popup = document.querySelector('.popup-contacts');
  // Définir la position de la popup
  popup.style.position = "absolute";
  popup.style.display = "block";
  popup.style.width = '10%';
  popup.style.left = event.clientX + "px";
  popup.style.top = event.clientY + "px";
  // Ajouter la popup au document
  document.body.appendChild(popup);
}

function contactTrigger(){
    const popup = document.querySelector('.popup-contact')
    // Définir la position de la popup
    popup.style.position = "absolute";
    popup.style.display = "block";
    popup.style.left = 50+ "%";
    popup.style.top =45 + "vh";
    // Ajouter le contenu souhaité à la popup
    // Ajouter la popup au document
    document.body.appendChild(popup);
    bringToFront(popup);
}

function openPopupMusic(){
    const popup = document.querySelector('.popup-music');
    popup.style.display = 'block';
    bringToFront(popup);
}

function windowNotMuted() {
  setTimeout(() => {
    audio.load();
    audio.play();
  },4000);

}

// Close POPUP

function closePopupContact() {
  const popupContact = document.querySelector('.popup-contact');
  popupContact.style.display = 'none';
}

function closePopupContacts(){
    const popupContact = document.querySelector('.popup-contact');
    const popupContacts = document.querySelector('.popup-contacts');
    popupContact.style.display = 'none';
    popupContacts.style.display = 'none';

}

function closePopupMusic(){
    const popupMusic = document.querySelector('.popup-music');
    popupMusic.style.display = 'none';

}

//MUSIC CONTROLEUR

const tracks = ["./public/audio/Mexican 2.wav", "./public/audio/Mexican 2.wav", "./public/audio/Mexican 2.wav"];
const currentTrackIndex = 0;
const audioSource = document.getElementById("audioSource");
const playPauseButton = document.getElementById("playPauseButton"); 
const muteButton = document.querySelector('#mute-btn');
const canvas = document.getElementById("audioCanvas"); // Récupère le canvas
const canvasCtx = canvas.getContext("2d"); 
const audioCtx = new AudioContext(); // Crée un contexte audio
const audioSrc = audioCtx.createMediaElementSource(audio); 
const analyser = audioCtx.createAnalyser(); // Crée un analyseur de fréquence
analyser.fftSize = 2048; // Définit la taille de la FFT (Fast Fourier Transform)

  // Connecte la source audio à l'analyseur de fréquence
  audioSrc.connect(analyser);
  // Connecte l'analyseur de fréquence à la sortie audio
  analyser.connect(audioCtx.destination);

function nextTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  audioSource.src = tracks[currentTrackIndex];
  audio.load();
  audio.play();
  playPauseButton.innerHTML = '<i class="fi fi-rr-pause"></i>';
}

function previousTrack() {
  currentTrackIndex--;
  if (currentTrackIndex < 0) {
    currentTrackIndex = tracks.length - 1;
  }
  audioSource.src = tracks[currentTrackIndex];
  audio.load();
  audio.play();
  playPauseButton.innerHTML = '<i class="fi fi-rr-pause"></i>'; 
}

function togglePlay() {
  if (audio.paused) {
    audio.play();
    playPauseButton.innerHTML = '<i class="fi fi-rr-pause"></i>'; 
  } else {
    audio.pause();
    playPauseButton.innerHTML =' <i class="fi fi-rr-play"></i>';
  }
}

function toggleMute() {
  if (audio.muted) {
    audio.muted = false;
    muteButton.innerHTML = '<p>mute</p>'
    
  } else {
    audio.muted = true;
    muteButton.innerHTML = '<p>unmute</p>'
  }
} 



function shareAudio() {
    // URL de l'audio
    const audioUrl = audioSource.src;
    // URL de partage pour Twitter
    const twitterShareUrl = "https://twitter.com/intent/tweet?text=Écoutez%20ce%20morceau%20!&url=" + encodeURIComponent(audioUrl);
    // URL de partage pour Facebook
    const facebookShareUrl = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(audioUrl);

    // Ouvre une nouvelle fenêtre pour partager sur Twitter
    window.open(twitterShareUrl, "_blank", "width=550,height=420");
    // Ouvre une nouvelle fenêtre pour partager sur Facebook
    window.open(facebookShareUrl, "_blank", "width=550,height=420");
  };

  // Fonction pour dessiner l'onde sonore
function drawWaveform() {
    let bufferLength = analyser.frequencyBinCount;
    let dataArray = new Uint8Array(bufferLength);
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
    canvasCtx.lineWidth = 2;
    canvasCtx.strokeStyle = "black";
    canvasCtx.beginPath();
    let sliceWidth = canvas.width / bufferLength;
    let x = 0;
    analyser.getByteTimeDomainData(dataArray);
    for (let i = 0; i < bufferLength; i++) {
    let v = dataArray[i] / 128.0;
    let y = v * canvas.height / 2;
    if (i === 0) {
    canvasCtx.moveTo(x, y);
    } else {
    canvasCtx.lineTo(x, y);
    }
    x += sliceWidth;
    }
    canvasCtx.stroke();
    requestAnimationFrame(drawWaveform);
    }
    
    // Lance la visualisation d'onde sonore
    drawWaveform();

    // MUTE/UNMUTE

const muteAll = document.querySelector("#jajaja-volume");
muteAll.addEventListener("click", function() {
  setMute(!mediaElements[0].muted); // inverse la valeur du premier élément
});

// MODAL RECIPE
const openModalRecipeBtn = document.querySelector('#open-modal-recipe')
const closeModalRecipeBtn = document.querySelector('.modal-recipe-close-btn')
const modalRecipeWrapper = document.querySelector(".modal-recipe-wrapper");



function openRecipeModal() {
    modalRecipeWrapper.style.display = 'block';
};

function closeRecipeModal() {
    modalRecipeWrapper.style.display = 'none';
};





// HOUR

const heureDiv = document.getElementById('jajaja-nav-hour');

function afficherHeureFrance() {
  heureDiv.innerHTML = `France: ${new Date().toLocaleTimeString()}`;
}

function afficherHeureMexique() {
  const offsetMexique = -5; // Fuseau horaire du Mexique : UTC-5
  const dateMexique = new Date(new Date().getTime() + offsetMexique * 60 * 60 * 1000);
  heureDiv.innerHTML = `Mexique: ${dateMexique.toLocaleTimeString()}`;
}

function miseAJourHeure() {
  setInterval(function() {
    if (heureDiv.innerHTML.includes('France')) {
      afficherHeureFrance();
    } else {
      afficherHeureMexique();
    }
  }, 1000);
}

miseAJourHeure();


// MODAL HIT

const modalHitWrapper = document.querySelector("#popup-hit"),
ModalHitHeader = modalHitWrapper.querySelector("#header-it");



function openRecipeHit() {
  modalHitWrapper.style.display = 'block';
};

function  closeRecipeHit() {
  modalHitWrapper.style.display = 'none';
};

















