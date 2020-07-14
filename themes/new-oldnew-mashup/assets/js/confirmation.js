function ready(fn) {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

ready(doConfirmation);

function param(name) {
  return decodeURIComponent((location.search.split(name + "=")[1] || "").split("&")[0]).replace(/\+/g, " ");
}

var confirmationCode = param("ConfirmationCode");

function doConfirmation() {
  if (document.getElementById("ConfirmationCode")) {
    if (confirmationCode) {
      document.getElementById("ConfirmationCode").value = confirmationCode;
    } else {
      document.getElementById("ConfirmationCode").value = "Missing confirmation code";
    }
  }
}
