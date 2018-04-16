$(document).ready(function () {
    $("input").focus(function () {
        $(this).css("background-color", "lightblue");
    });

    //change font size to 3.5em
});

function loadRepo() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            results = JSON.parse(this.responseText);
            for (var i = 0; i < results.length; i++) {
                console.log(results[i].name);

                var ul = document.getElementById("repositories");
                var li = document.createElement("li");
                var a = document.createElement("a");

                li.appendChild(document.createTextNode(results[i].name));

                a.appendChild(li);
                a.setAttribute("href", results[i].html_url);
                a.appendChild(a);
            }
        }
    }
    xhttp.open("GET", "https://api.github.com/users/llcoolk/repos", true);
    xhttp.send();

}