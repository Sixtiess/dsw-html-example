var isText = false;

function textAppear(){
  var text = document.getElementById("txt");
  if(isText == false){
    text.style.display = "block";
    isText = true;
  } else {
    text.style.display = "none";
    isText = false;
  }
}
 