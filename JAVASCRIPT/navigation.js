var icon = document.getElementById("icon");
var line = document.querySelector(".line");
      
      setInterval(() => {
        let online = navigator.onLine;
        if (online == true) {
          icon.style.backgroundColor="green";
          line.style.backgroundColor="green"
          document.getElementById("active").innerHTML =
            "YEAH! You're Online!! ";
            setTimeout(() => {
              document.getElementById("toastMessageBox").style.display="flex";
            }, 8000);

        } else {
          icon.style.backgroundColor=" red";
          line.style.backgroundColor=" red";
          icon.innerHTML='  <i class="fa-solid fa-exclamation"></i>'
          document.getElementById("active").innerHTML =
            "Oops,something went wrong ";
              document.getElementById("toastMessageBox").style.display="flex";
              document.getElementById("myBtn").disabled = true;
        }
      }, 500);


      function hideAlert() {
        document.getElementById("toastMessageBox").style.display="none";
      }