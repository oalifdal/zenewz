// 2013 
// Author: Omar Ali Fdal


function zenRead() {
  // then injectCSS;
  //hide #offre_decouverte_form 
  //hid div fond_overlay offre_decouverte
  console.log("Injecting css");
  var link = document.createElement("link");
  link.href = chrome.extension.getURL("zen.css");
  link.type = "text/css";
  link.rel = "stylesheet";
  document.getElementsByTagName("head")[0].appendChild(link);
}

chrome.extension.sendMessage({type:'showPageAction'});

setTimeout(function() {
  var zenButton = document.querySelector("div.btn_lecture_zen");
  //if div.btn_lecture_zen exists click on it
  if (zenButton !== null) {
    console.log("Found the zen button");
    zenButton.onclick = zenRead ;
    zenButton.click();
  }
}, 3000);
