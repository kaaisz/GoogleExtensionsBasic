const delay = 3 * 1000;
const popupNotify = () => {
    chrome.notifications.create(null, {
        type: chrome.notifications.TemplateType.BASIC,
        iconUrl: '/icon.png',
        title: 'Yo!',
        message:'お元気ですか',
    });
};
setTimeout(() => popupNotify(), delay)
