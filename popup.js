document.querySelector('.yo').onclick = (event) => {
    const delay = 3 * 1000; //3 seconds
    const popupNotify = () => {
        event.target.textContent = 'Yay!';
        chrome.notifications.create(null, {
            type: chrome.notifications.TemplateType.BASIC,
            iconUrl: '/icon.png',
            title: 'Yo!',
            message:'お元気ですか',
        });
    };
    setTimeout(() => popupNotify(), delay)
};
