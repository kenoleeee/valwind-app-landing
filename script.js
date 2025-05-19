const buttonGitLink = document.querySelector('.subscribe');

buttonGitLink.addEventListener('click', () => {
    window.open('https://github.com/ValWind', '_blank');
});

const buttonPlayStoreLink = document.querySelector('.subscribe');

buttonPlayStoreLink.addEventListener('click', () => {
    window.open('https://play.google.com/store/apps/details?id=com.valwind.app', '_blank');
});

const buttonFdroidLink = document.querySelector('.subscribe');

buttonFdroidLink.addEventListener('click', () => {
    window.open('https://f-droid.org/packages/com.valwind.app/', '_blank');
});
