// ==UserScript==
// @name         Neopets - Old notifications
// @namespace    https://github.com/JustDownloadin/NeopetsOldNotifs
// @version      1.0.0
// @description  Displays notifications on the new layout's nav bar
// @author       Zana
// @match        *://*.neopets.com/*
// @icon         https://images.neopets.com/themes/h5/basic/images/alert/neomail-icon.svg
// @grant        none
// @downloadURL  https://github.com/JustDownloadin/NeopetsOldNotifs/raw/main/Neopets%20-%20Old%20notifications-1.0.0.user.js
// @updateURL    https://github.com/JustDownloadin/NeopetsOldNotifs/raw/main/Neopets%20-%20Old%20notifications-1.0.0.user.js
// ==/UserScript==

var notifs = document.querySelector('#alerts.alerts-tab-content__2020 > ul > li');
function checkforNotifs() {
    if(notifs) {
        console.log("Notification detected");
        return true
    } else {
        console.log("No notification detected");
        return false
    };

};

function produceNewNotif(){

// Notif elements. Is there a better way to select these?
var notifText = document.querySelector('#alerts.alerts-tab-content__2020 > ul > li > p');
var notifHead = document.querySelector('#alerts.alerts-tab-content__2020 > ul > li > h4');
var notifTime = document.querySelector('#alerts.alerts-tab-content__2020 > ul > li > h5');
var notifA = document.querySelector('#alerts.alerts-tab-content__2020 > ul > li > a');
notifA.setAttribute("class","img");
var notifAImgFetch = document.querySelector('#alerts.alerts-tab-content__2020 > ul > li > a > div');
let notifAImg = window.getComputedStyle(notifAImgFetch, null).getPropertyValue('background-image');
var notifClose = document.querySelector('#alerts.alerts-tab-content__2020 > ul > li > div');
console.log("Initial variables set");

const STYLE = `
<style>
#notif {
	position: relative;
    left: 210px;
	box-sizing: content-box;
    text-align: left;
    width: 600px;
    height: 60px;
    padding: 0 10px;
    border: 2px solid #350000;
    border-radius: 10px;
    box-shadow: 0 3px 0 0 #350000;
    -webkit-box-shadow: 0 3px 0 0 #350000;
    -moz-box-shadow: 0 3px 0 0 #350000;
    background-color: #fff;

    p {
    	font-family: 'MuseoSansRounded700', 'Arial', sans-serif;
        font-size: 10pt;
        margin-top: 7px;
        margin-right: 15px;
    }

    .notifFooter {
    	position: fixed;
    	top: 40px;
    }

    .img {
    	float: left;
    	width: 50px;
    	height: 50px;
    	margin: 5px 10px 5px 0;
    	background-image: ${notifAImg};
    	cursor: pointer;
    	background-size: 100%;
    	background-repeat: no-repeat;
    	background-position: center;
    }
    .alert-x {
    	background: url(https://images.neopets.com/themes/h5/basic/images/x-icon.svg) center center no-repeat;
    	background-size: auto;
    	background-size: 100%;
    	position: absolute;
    	width: 15px;
    	height: 15px;
    	top: 5px;
    	right: 5px;
    	cursor: pointer;
    }

}
</style>
`;

console.log("Style set");

const notifHTML = `
${STYLE}
<div id="notif">
  ${notifClose.outerHTML}${notifA.outerHTML}
    <p><b>${notifHead.textContent}</b> — ${notifText.textContent}<br><b class="notifFooter">${notifTime.textContent} <a href="/allevents.phtml">» See all events «</a></b></p>
</div>
`;

// Where the notif will get inserted & the new element
$(".nav-top-grid__2020").prepend(notifHTML);

console.log("Notification printed");

};

var setFlag = checkforNotifs();
if (setFlag == true) {produceNewNotif();};
