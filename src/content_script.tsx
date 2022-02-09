var s = document.createElement('script');
s.src = chrome.runtime.getURL('./js/remove_hardsell.js');
(document.head || document.documentElement).appendChild(s);

// chrome.tabs.executeScript({file: "./remove_hardsell.js"}, function() {
//     if(chrome.runtime.lastError) {
//       console.error("Script injection failed: " + chrome.runtime.lastError.message);
//     }
//   });