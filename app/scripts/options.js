'use strict';

var url = 'chrome://apps';
chrome.tabs.update({
    'url'     : url,
    'selected': true
});
