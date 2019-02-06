const encodeShow = () => {
    const userMsg = document.getElementById("userMsg").value;
    const userOffset = parseInt(document.getElementById("userOffset").value);
    const newMsg = cipher.encode(userOffset, userMsg);
    document.getElementById("resultMsg").innerHTML = newMsg;
};
const btn1 = document.getElementById ("codifica");
btn1.addEventListener ("click",encodeShow);

const decodeShow = () => {
    const userMsg = document.getElementById("userMsg").value;
    const userOffset = parseInt(document.getElementById("userOffset").value);
    const newMsg = cipher.decode(userOffset, userMsg);
    document.getElementById("resultMsg").innerHTML = newMsg;
};
const btn2 = document.getElementById("decodifica");
btn2.addEventListener ("click",decodeShow);