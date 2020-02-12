var darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
handleDarkMode(darkModeMediaQuery);

function handleDarkMode(e) {
	var darkModeEnabled = e.matches;
	var favicon = document.querySelector('link[type="image/x-icon"]'); // Old favicon
	var appleTouchIcon = document.querySelector('link[rel="apple-touch-icon"]'); // iOS Icon

	if (!favicon || !appleTouchIcon) {
		return;
	}
	if (darkModeEnabled) {
		favicon.href = '/favicon/icon-dark.ico';
		appleTouchIcon.href = '/favicon/apple-touch-dark.png';
	} else {
		favicon.href = '/favicon/icon.ico';
		appleTouchIcon.href = '/favicon/apple-touch-icon.png';
	}

}
darkModeMediaQuery.addListener(handleDarkMode);