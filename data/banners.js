const banners = [
  {
        img: 'https://aksharhanumandham.in/only-blessing.png',
        link: 'https://aksharhanumandham.in/',
    expiry: '2025-05-21T23:59:59'
  },
  {
      img: 'https://aksharhanumandham.in/ads/banner2.jpg',
      link: 'https://aksharhanumandham.in/home.html',
    expiry: '2025-05-22T23:59:59'
  },
  {
      img: 'https://aksharhanumandham.in/ads/banner3.jpg',
      link: 'https://aksharhanumandham.in/contact.html',
    expiry: '2025-05-05T12:00:00'
  }
];

(function loadRandomBanner() {
  const now = new Date();
  const validBanners = banners.filter(b => new Date(b.expiry) > now);

  const slot = document.getElementById('banner-slot');
  if (validBanners.length === 0) {
    slot.innerHTML = '<p>No active banners.</p>';
    return;
  }

  const banner = validBanners[Math.floor(Math.random() * validBanners.length)];

  slot.innerHTML = `
    <div style="position: relative;">
      <a href="${banner.link}" target="_blank" style="display: block;">
        <img src="${banner.img}" alt="Banner" style="width:100%; max-height:250px; display:block;">
      </a>
      <a href="advertise.html" target="_blank"
         style="
          position: absolute;
          top: 8px;
          right: 8px;
          background: rgba(0, 0, 0, 0.6);
          color: #fff;
          font-size: 12px;
          padding: 2px 6px;
          border-radius: 4px;
          text-decoration: none;
          z-index: 2;
        ">
        Sponsored Ad
      </a>
    </div>
  `;
})();
