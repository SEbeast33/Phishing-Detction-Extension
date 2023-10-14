

function transfer(){	
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      
        if (tabs[0]) {
         
          const currentTab = tabs[0];
          const tabUrl = currentTab.url
          console.log(currentTab);

          fetch("https://safesurf1.onrender.com/sharad/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify( {
                url : tabUrl
            })
        })
            .then(response => response.json())
            .then(responseData => {
                document.getElementById("ret").textContent = responseData.result;
                console.log("Response from the API:", responseData);
            })
            .catch(error => {
                console.error("Error while posting to the API:", error);
            });
        }
      });
      
}




transfer();