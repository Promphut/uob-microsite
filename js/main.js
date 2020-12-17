$(document).ready(function () {
  if (getMobileOperatingSystem() == "iOS") {
    $("#download").attr("href", "https://apps.apple.com/th/app/uobam-invest-thailand/id1300074943");
  } else {
    $("#download").attr("href", "https://play.google.com/store/apps/details?id=com.uobam.premier&hl=en&gl=US");
  }
});
function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }
  if (/android/i.test(userAgent)) {
    return "Android";
  }
  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }

  return "unknown";
}

function playMusic(target){
  document.getElementById(target).play();
}

function pauseMusic(target){
  document.getElementById(target).pause();
}