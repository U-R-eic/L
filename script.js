document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const response = document.getElementById('response');
    const whatsappMessage = document.getElementById('whatsapp-message');
    const content = document.querySelector('.content');
    const musicToggle = document.getElementById('music-toggle');
    const backgroundMusic = document.getElementById('background-music');
    const intro = document.getElementById('intro');
    const mainContent = document.getElementById('main-content');
    
    // Start with music unmuted
    backgroundMusic.volume = 0.168;
    backgroundMusic.muted = false;
    backgroundMusic.loop = true;
    
    // Toggle music on/off
    musicToggle.addEventListener('click', () => {
      if (backgroundMusic.muted) {
        backgroundMusic.muted = false;
        backgroundMusic.play();
        musicToggle.style.boxShadow = '0 0 15px rgba(255, 69, 0, 0.9)';
      } else {
        backgroundMusic.muted = true;
        musicToggle.style.boxShadow = '0 0 15px rgba(255, 69, 0, 0.5)';
      }
    });
    
    // Skip intro if clicked
    intro.addEventListener('click', () => {
      intro.style.animation = 'fadeOut 0.5s ease-in-out forwards';
      mainContent.style.animation = 'fadeIn 1s ease-in-out forwards';
      mainContent.style.animationDelay = '0.5s';
      mainContent.classList.remove('hidden');
      
      // Play music after user interaction
      backgroundMusic.play().catch(error => {
        console.error('Failed to play music:', error);
      });
    });
    
    // Yes button click
    yesBtn.addEventListener('click', () => {
      response.innerHTML = "<span class='dramatic-text'>Super! Das freut mich!</span>";
      response.classList.remove('hidden');
      response.classList.add('visible');
      
      // Show WhatsApp message
      setTimeout(() => {
        whatsappMessage.classList.remove('hidden');
        whatsappMessage.classList.add('visible');
      }, 2000);
      
      // Add burning effect to content
      content.classList.add('burning');
      
      // Unmute and play music if it's not already playing
      if (backgroundMusic.muted) {
        backgroundMusic.muted = false;
        musicToggle.style.boxShadow = '0 0 15px rgba(255, 69, 0, 0.9)';
      }
      backgroundMusic.play();
    });
    
    // No button click
    noBtn.addEventListener('click', () => {
      // Add shake animation to the content
      content.classList.add('shake-animation');
      setTimeout(() => {
        content.classList.remove('shake-animation');
      }, 500);
      
      response.innerHTML = "<span class='dramatic-text'>Schade... Vielleicht überlegst du es dir noch einmal...</span>";
      response.classList.remove('hidden');
      response.classList.add('visible');
      
      // Show WhatsApp message
      setTimeout(() => {
        whatsappMessage.classList.remove('hidden');
        whatsappMessage.classList.add('visible');
      }, 2000);
      
      // Make the Yes button more attractive
      yesBtn.style.transform = 'scale(1.2)';
      yesBtn.style.boxShadow = '0 0 30px rgba(255, 69, 0, 0.9)';
    });
});