function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
//Prompts the new tab input box when button is pressed
document.getElementById("myBtn").addEventListener("click", function() {
    const tabNames = [];
    let userInput = [prompt("Please enter a new tab name")];
    if(userInput != null) {
        tabNames.push(userInput);
        for(i = 0; i < tabNames.length; i++) {
            document.getElementById("demo").innerHTML += "<button>" + tabNames[i] + "</button>";
        }
    }
});