window.addEventListener('load', function(){
    let astroInfo = [];
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json) {
           console.log(json);
        });
     });
     const destination = document.getElementById("destination");
     let htmlOut = "";
       for(let astronauts of json){
           htmlOut += `<h1> ${astronauts.name}`
       }
       container.innerHTML = htmlOut;

});