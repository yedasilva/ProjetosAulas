  
  var InputBox = document.getElementById("inputBox");
  var TextArea = document.getElementById("textArea");
  var CopyButton = document.getElementById("copyButton");
  var ClearButton = document.getElementById("clearButton");
  

  CopyButton.addEventListener("click", Copy);
  
  function Copy(){
    TextArea.value = InputBox.value;    
    }

  ClearButton.addEventListener("click",Clear);
  
  function Clear(){
    InputBox.value = "";
    TextArea.value = "";    
    }

