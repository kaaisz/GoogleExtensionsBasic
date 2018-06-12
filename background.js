chrome.runtime.onMessage.addListener((message)=>{
  console.log('backgroundだよ',message);
});
