// $(document).ready(function () {
//     $("input").focus(function () {
//         $(this).css("background-color", "lightblue");
//     });
//     //change font size to 3.5em
// });

// $(document).ready(function(){
//     $(".social").hover(function(){
//         $(this).css("background-color", green);
//     }, function(){
//         $(this).css("color", blue);
//     });
// });


// $(document).ready(function() {
//     $("#driver").click(function(event) {
//       $("#stage").load("info.html");
//     });
//   });

function loadRepo(){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            results = JSON.parse(this.responseText);
            // console.log(this.responseText);
            for (var i = 0; i <results.length; i++) {
            // console.log(results[i].name);
            // console.log(results[i].html_url);
     
          //  document.getElementById("results").innerHTML = results.name;

                var ul = document.getElementById("repositories");
                var li = document.createElement("li");
                var a = document.createElement("a");

                // var newli = ul.appendChild(li );
                // newli.innerHTML = results[i].name;
                var newa = ul.appendChild(li);
                var newline = newa.appendChild(a);
                newline.setAttribute("href", results[i].html_url);
                newline.innerHTML = results[i].name;

                //li.appendChild(document.createTextNode(results[i].name));

                //a.appendChild(li);
               // a.setAttribute("href", results[i].html_url);
                //a.appendChild(a);

            }
        }
    }
    xhttp.open("GET", "https://api.github.com/users/llcoolk/repos", true);
    xhttp.send();
}

// function loadRepo(url, callback) {
//     const gitHubRequest = new XMLHttpRequest();
//       // Finish your request here
//       // Don't forget the callback()
//   }
  
//   function loadRepoCallback(gitHubRequest) {
//     // Callback function needs to parse the JSON
//     // Using the DOM get the element ID from your <ul> in your HTML
//     // You will need a forEach to loop through the parsed object
//     // Using the DOM create new list elements
//     // Plug in the .html_url and .name from the parsed object.  To make this a link you'll need 
//     // Append the new list items to the element you retrieved from HTML
//   }
  
