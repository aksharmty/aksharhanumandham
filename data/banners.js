const banners = [
   {
        img: 'https://m.media-amazon.com/images/I/71-H331HNcS._SY425_.jpg',
        link: 'https://www.amazon.in/dp/B095J3TKBB?tag=rajkumar06322-21',
    expiry: '2100-01-01T23:59:59'
  },
   {
        img: 'https://m.media-amazon.com/images/I/819uYlraOML._SY425_.jpg',
        link: 'https://www.amazon.in/dp/B09FK66917?tag=rajkumar06322-21',
    expiry: '2100-01-01T23:59:59'
  },
   {
        img: 'https://m.media-amazon.com/images/I/71d4dtqTHWL._SY425_.jpg',
        link: 'https://www.amazon.in/dp/B09JVY4VMR?tag=rajkumar06322-21',
    expiry: '2100-01-01T23:59:59'
  },
   {
        img: 'https://m.media-amazon.com/images/I/41doe8uNvhS._SY445_SX342_ControlCacheEqualizer_.jpg',
        link: 'https://www.amazon.in/dp/B096X73C74?tag=rajkumar06322-21',
    expiry: '2100-01-01T23:59:59'
  },
   {
        img: 'https://m.media-amazon.com/images/I/71M856s7nwL._SY425_.jpg',
        link: 'https://www.amazon.in/dp/B0D1PM6PWP?tag=rajkumar06322-21',
    expiry: '2100-01-01T23:59:59'
  },
   {
        img: 'https://m.media-amazon.com/images/I/614iGOXVTYL._SY425_.jpg',
        link: 'https://www.amazon.in/dp/B0FN3Z7G3H?tag=rajkumar06322-21',
    expiry: '2100-01-01T23:59:59'
  },
  {
      img: 'https://aksharmty.github.io/aksharhanumandham/ads/manifest.jpeg',
      link: 'https://approveme.adquash.com',
    expiry: '2100-01-01T23:59:59'
  }, 
   {
        img: 'https://aksharhanumandham.in/ads/shubham.png',
        link: 'https://wa.me/918750685516',
    expiry: '2100-01-01T23:59:59'
  },
      {
         img: 'https://m.media-amazon.com/images/I/51iCgqihd8L._UF1000,1000_QL80_FMwebp_.jpg',
         link: 'https://www.amazon.in/dp/B0FQ6GFLLT?tag=rajkumar06322-21',
         expiry: '2100-01-01T23:59:59'
      },
   {
         img: 'https://m.media-amazon.com/images/I/61Jkutfp7oL._SY425_.jpg',
         link: 'https://www.amazon.in/dp/B0FRYBPLZW?tag=rajkumar06322-21',
         expiry: '2100-01-01T23:59:59'
      },
    {
      img: 'https://m.media-amazon.com/images/I/61WaJ4E9D1L._SY425_.jpg',
      link: 'https://www.amazon.in/dp/B0FTMQZWP5?tag=rajkumar06322-21',
    expiry: '2100-01-01T23:59:59'
  },
  {
      img: 'https://aksharhanumandham.in/ads/adquash.png',
      link: 'https://adquash.com',
    expiry: '2100-01-01T23:59:59'
  },
  {
      img: 'https://aksharhanumandham.in/ads/5-minute.png',
      link: 'https://aksharhanumandham.in',
    expiry: '2100-01-01T23:59:59'
  },
   {
      img: 'https://aksharhanumandham.in/ads/hit.png',
      link: 'https://compoundtrading.adquash.com/bot.html',
    expiry: '2100-01-01T23:59:59'
  },
   {
      img: 'https://aksharhanumandham.in/ads/hypnosis.png',
      link: 'https://wa.me/919213816442?text=hypnosis+course',
    expiry: '2100-01-01T23:59:59'
  },
  {
      img: 'https://aksharhanumandham.in/ads/advertise.png',
      link: 'https://aksharhanumandham.in/advertise.html',
    expiry: '2100-01-01T12:00:00'
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
          top: 1px;
          right: 1px;
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
