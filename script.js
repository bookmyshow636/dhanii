  // header.html à¤•à¥‹ à¤²à¥‹à¤¡ à¤•à¤°à¤¾à¤•à¥‡ div à¤®à¥‡à¤‚ à¤¡à¤¾à¤² à¤¦à¥‡à¤—à¤¾
  fetch('nav.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('nav').innerHTML = html;
    })
    .catch(err => console.error('Header load error', err));


      // header.html à¤•à¥‹ à¤²à¥‹à¤¡ à¤•à¤°à¤¾à¤•à¥‡ div à¤®à¥‡à¤‚ à¤¡à¤¾à¤² à¤¦à¥‡à¤—à¤¾
  fetch('footer.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('footer').innerHTML = html;
    })
    .catch(err => console.error('Header load error', err));