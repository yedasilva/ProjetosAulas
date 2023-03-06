var InputBox = document.getElementById("inputBox");
var TextArea = document.getElementById("textArea");
var CopyButton = document.getElementById("copyButton");
var ClearButton = document.getElementById("clearButton");


function Copy(){
  TextArea.value = InputBox.value;  
  lista.push(TextArea.value);   
  }

  
function Clear(){
  InputBox.value = "";
  TextArea.value = "";    
  } 
 