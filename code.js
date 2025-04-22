   // Toggle menu visibility on smaller screens
     function toggleMenu() {
       const menu = document.querySelector('.menu');
       menu.classList.toggle('show');
     }
     // Scroll to top function
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'  // Smooth scroll effect
      });
    }

    // Show or hide the "Back to Top" button based on scroll position
    window.onscroll = function() {
      var topButton = document.querySelector('.top-button');
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topButton.style.display = "block";  // Show button
      } else {
        topButton.style.display = "none";  // Hide button
      }
    };
//menu and ads
function loadHTML(elementId, file) {
  return fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch(error => {
      console.error('Error loading ' + file + ':', error);
    });
}

window.onload = function () {
  loadHTML('nav', 'https://aksharhanumandham.in/nav.html');
  loadHTML('sidebar', 'sidebar.html').then(() => {
    // Only run this after sidebar is fully loaded
    fetch('//aksharhanumandham.in/data/ads.json')
    .then(response => response.json())
    .then(ads => {
      console.log("Loaded ads:", ads);
      const today = new Date();
      const validAds = ads.filter(ad => new Date(ad.expires) >= today);
      console.log("Valid ads:", validAds);

      if (validAds.length > 0) {
        const randomAd = validAds[Math.floor(Math.random() * validAds.length)];
        console.log("Selected Ad:", randomAd);
        document.getElementById('sponsor-banner').src = randomAd.image;
        document.getElementById('sponsor-link').href = randomAd.link;
      } else {
        console.warn("No valid ads to show");
        document.getElementById('sponsored-ad').style.display = 'none';
      }
    })
    .catch(err => {
      console.error('Ad loading error:', err);
      document.getElementById('sponsored-ad').style.display = 'none';
    });

  loadHTML('footer', 'https://aksharhanumandham.in/footer.html');
};
