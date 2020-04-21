var x = 0;
var array = Array();

function add_element_to_array(){
 array[x] = document.getElementById("review").value;
 alert( "Your review has been recorded");
 x++;
 document.getElementById("review").value = "";
}

function display_array(){
   var e = "<hr/>";
   for (var y=0; y<array.length; y++)
   {
     e += "Review " + y+1+  " : " + array[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}



function search(){
  $("#movies").empty();
  var usersearchkeyword = document.getElementById('keyword').value;
  var url ="http://www.omdbapi.com/?apikey=9e6320eb&t=";
  var key  = "9e6320eb";
  var full = "&plot=full";
  var data = url+usersearchkeyword;
  // replace spaces with '+'

  $.get(url,data).done(function(response){
    console.log(JSON.stringify(response));
    if(response.Response == "False"){
      $("#movies").append('<p>'+usersearchkeyword+' not found :(</p>');
    }
    else{
      $('body').css('backgroundImage', 'url('+response.Poster+')');
      $("#movies").append(
        '<table class="results">'
        +'<tr>'+'<td rowspan="8"><img src="'+response.Poster+'" height="450"></td>'+'</tr>'
        +'<tr>'+'<td><p>'+response.Title+' ('+response.Year+')</p></td>'+'</tr>'
        +'<tr>'+'<td><p>'+response.Runtime+'</p></td>'+'</tr>'
        +'<tr>'+'<td><p>'+response.Genre+'</p></td>'+'</tr>'
        +'<tr>'+'<td><p>'+response.Rated+'</p></td>'+'</tr>'
        +'<tr>'+'<td><p>'+response.Plot+'</p></td>'+'</tr>'
        +'<tr>'+'<td><p>Metascore: '+response.Metascore+'</p></td>'+'</tr>'
        +'<tr>'+'<td><p>imdb Rating: '+response.imdbRating+'</p></td>'+'</tr>'
        +'</table>'
      );

      var commentdiv = $('<textarea id="review" rows="4" cols="50"> </textarea> <br><input type="button" id="button1" value="Post a review" onclick="add_element_to_array();"></input> <br> <input type="button" id="button2" value="See Review" onclick="display_array();"></input> <div id="Result"></div>  ');
      $("#movies").append(commentdiv);







      // var commentdiv = $('<div id="review"><form> <textarea rows="7" cols="60" name="comment" placeholder="Leave a revoew or a comment here..."></textarea> <br><input type="submit" id="submit"></form></div>');
      // $("#movies").append(commentdiv);
    }


  });
}

$(document).ready(function(){
  $("#search").on("click",search);
});
