let _on = false, // extension isn't on
    _react = "asset-manifest.json"; // react manifest

let getManifest = (file, callback) => {
    // file has to be in the root (/public)
    //var rawFile = new XMLHttpRequest();
	async function getFile() {
	  await fetch(file)
	    .then((response) => response.json())
	    .then((data) => callback(data));
	}

	getFile();

}
let disable = (tab) => {
    let code = () => {
		document.querySelector('#jk--chrome--extension').remove();
		document.body.classList.remove('jk--chrome--extension--wrapper');
	}

    chrome.action.setBadgeText({text: '', tabId: tab.id});
	chrome.scripting.executeScript({
       target: {tabId: tab.id},
       func: code
    });
}
let enable = (tab) => {
    // get the REACT manifest
    getManifest(_react, function(text) {
		
        let _data = text,
            _keys = Object.keys(_data.files),
            _js = [_data.files['main.js'],_data.files[_keys[0]],_data.files[_keys[5]]];

		chrome.scripting.executeScript({
	       target: {tabId: tab.id},
	       files: [_data.files['main.js']]
	    });
		chrome.scripting.insertCSS({
		      target: {tabId: tab.id},
		      files: [_data.files['main.css']]
		});
    	
    	// badge
        chrome.action.setBadgeText({text: 'ON', tabId: tab.id});
        chrome.action.setBadgeBackgroundColor({color: 'crimson'});
	});
}

// extension clicked on/off
chrome.action.onClicked.addListener((tab) => {
    
	chrome.action.getBadgeText({tabId: tab.id}, function(message){
		if (message != "ON") {
			enable(tab);
		} else {
			disable(tab);
		}
	})
});


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
		if (request.message == 'click') {
        	sendResponse({ message : 'wazzzzzzzuuuuuuup!?' });
        	return true;
		}
    }
);

chrome.runtime.onInstalled.addListener(() => {
    // default state goes here
    // this runs ONE TIME ONLY (unless the user reinstalls your extension)
});