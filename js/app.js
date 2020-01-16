// Typed.js
var typed = new Typed('.typing', {
    strings: ['Freelance Web Designer', 'IT Technician', 'Web Administrator', 'IT Administrator', 'Photographer', 'Video Editor', 'Gamer and Nerd'],
    typeSpeed: 30,
    startDelay: 5,
    backSpeed: 50,
    backDelay: 700,
    loop: true
});
// Analytics
function getCookie(name) {
    var b = document.cookie.match('(^|[^;]+)\\s*' + name + '\\s*=\\s*([^;]+)'); return b ? b.pop() : '';
  }

  function GoogleAnalytics() {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());  gtag('config', 'UA-47485892-14');
  }

  window.addEventListener("load", function () {
    const cookieConsent = getCookie('cookieconsent_status');
    if (cookieConsent === 'allow' || cookieConsent === '') {
      GoogleAnalytics();        
    }
    window.cookieconsent.initialise({
        "palette": { "popup": { "background": "#252e39" }, "button": { "background": "#14a7d0" } },
        "theme": "edgeless",
        "position": "bottom-right",
        "type": "opt-in",
        "content": { "message": "This website uses cookies to ensure you get the best experience on our website.", "dismiss": "Dismiss", "allow": "Allow",
          "link": "Privacy Policy", "href": "https://idzan.eu/privacy-policy/" },

          onStatusChange: function (status, chosenBefore) { location.reload(); }
    })
  });