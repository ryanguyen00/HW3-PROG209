


 document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("show").addEventListener("click", function () {
        console.log(movieArray);
        let message = "Movie Rating\n";
        for (i = 0; i < movieArray.length; i++) {
            message = message + movieArray[i].title + "  " + movieArray[i].rating + "\n";
        }
        document.getElementById("output").value = message;
    });

 });


movieArray = []; 



function Submit() {
    let aMovieTitle = document.getElementById("movieTitle").value;
    let aYearReleased = document.getElementById("yearRelease").value;
    let e = document.getElementById("rating");
    let optionSelected = e.options[e.selectedIndex].value;

    if ((aMovieTitle.trim() == '') || (aYearReleased.trim() == '')) {
        alert("Please fill out all fields");
        
    } 
    else  {
        let Movie = {
            title:  aMovieTitle,
            year: aYearReleased,
            rating: optionSelected
        }
        
         document.getElementById("movieTitle").value = "";
         document.getElementById("yearRelease").value= "";
        movieArray.push(Movie);
        console.log(movieArray);
        
    }
    

   

    
 
}










