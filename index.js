function onEncrypt(){
    let emptyMessage = document.getElementById("emptyMessage");
    let copyBtn = document.getElementById("copyBtn");
    emptyMessage.classList.remove("showEmptyMensage");
    emptyMessage.classList.add("hiddenEmptyMensage");
    copyBtn.classList.remove("hiddenCopyBtn");
      
    let userInput = document.getElementById("userInput").value;
    let encrypted = userInput.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/o/g, 'ober').replace(/u/g, 'ufat').replace(/a/g, 'ai');
    document.getElementById("showMessage").innerHTML = encrypted;
  
  }
  
  function onDecrypt(){
      let emptyMessage = document.getElementById("emptyMessage");
      let copyBtn = document.getElementById("copyBtn");
      emptyMessage.classList.remove("showEmptyMensage");
      emptyMessage.classList.add("hiddenEmptyMensage");
      copyBtn.classList.remove("hiddenCopyBtn");
  
      let userInput = document.getElementById("userInput").value;
      let decrypted = userInput.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ai/g, 'a').replace(/ufat/g, 'u');
      document.getElementById("showMessage").innerHTML = decrypted;
  }
  
  function handleCopy() {
  
    let copyText = document.getElementById("showMessage");
  
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
  
    navigator.clipboard.writeText(copyText.value);
  }