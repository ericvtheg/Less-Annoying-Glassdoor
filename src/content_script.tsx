var s = document.createElement('script');
s.src = chrome.runtime.getURL('./js/remove_hardsell.js');
(document.head || document.documentElement).appendChild(s);