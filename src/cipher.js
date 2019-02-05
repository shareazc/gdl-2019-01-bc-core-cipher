window.cipher = {
  encode (str, offset) {
    const abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let newStr = "";
    for(let i=0; i < str.length; i++){
      const currentPosition = abecedario.search(str[i]);
      if (str[i]== " ") {
        newStr += " ";
      } else {
        const newPosition = (parseInt(currentPosition) + parseInt(offset)) % 26;
        const newMsg = (abecedario[newPosition]);
        newStr+=newMsg;
      }
    }

    return newStr;
  }, 

  decode (str, offset) {
    const abecedario = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
    let newStr = "";
    for(let i=0; i < str.length; i++){
      const currentPosition = abecedario.search(str[i]);
      if (str[i]== " ") {
        newStr += " ";
      } else {
        const newPosition = (parseInt(currentPosition) + parseInt(offset)) % 26;
        const newMsg = (abecedario[newPosition]);
        newStr+=newMsg;
      }
    }
    
    return newStr;
  }
};
