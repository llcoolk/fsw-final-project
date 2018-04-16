
function loadRepo(){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            results = JSON.parse(this.responseText);

            for (var i = 0; i <results.length; i++) {
 
                var ul = document.getElementById("repositories");
                var li = document.createElement("li");
                var a = document.createElement("a");

                var newa = ul.appendChild(li);
                var newline = newa.appendChild(a);
                newline.setAttribute("href", results[i].html_url);
                newline.innerHTML = results[i].name;

            }
        }
    }
    xhttp.open("GET", "https://api.github.com/users/llcoolk/repos", true);
    xhttp.send();
}


  
