var darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
handleDarkMode(darkModeMediaQuery);

function handleDarkMode(e) {
	var darkModeEnabled = e.matches;
	var favicon = document.querySelector('link[type="image/x-icon"]'); // Old favicon
	var appleTouchIcon = document.querySelector('link[rel="apple-touch-icon"]'); // iOS Icon
	var androidIcon = document.querySelector('link[type="image/png"]'); // Android image
	var gRecaptcha = document.querySelector('.g-recaptcha');

	if (!favicon || !appleTouchIcon || !androidIcon || !gRecaptcha) {
		return;
	}
	if (darkModeEnabled) {
		favicon.href = '/favicon/icon-dark.ico';
		appleTouchIcon.href = '/favicon/apple-touch-icon-dark.png';
		androidIcon.href = '/favicon/android-chrome-dark.png';
		gRecaptcha.dataset.theme = 'dark';
	} else {
		favicon.href = '/favicon/icon.ico';
		appleTouchIcon.href = '/favicon/apple-touch-icon.png';
		androidIcon.href = '/favicon/android-chrome.png';
		gRecaptcha.dataset.theme = 'light';
	}

}
darkModeMediaQuery.addListener(handleDarkMode);