chrome.runtime.onMessage.addListener((message)=>{
    const delay = 1 * 1000 //1 seconds
    setTimeout(() => {
        chrome.notifications.create({
            type: chrome.notifications.TemplateType.BASIC,
            iconUrl: "icon.png",
            title: "Yo!",
            message: "HEELLLOOOO from background",
        });
    }, delay);
});
