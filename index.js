function muh(){
   var date = new Date();
   var stime = document.getElementById("stime");
    stime.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
   var sd = document.getElementById("sd");
    // sd.innerHTML = date.getDate + "-" + parseInt(date.getMonth() +1) + "-"+ date.getFullYear();

}
setInterval(muh,100);

onload = muh();

function g_c(){
    var input_color = document.getElementById("input-color").value;
    localStorage.setItem("color",input_color);
    document.getElementById("time").style.background= localStorage.getItem("color");
    document.getElementById("bbb").style.background= localStorage.getItem("color");
    
}
function s_cc(){

    document.getElementById("input-color").value = localStorage.getItem("color");
    document.getElementById("time").style.background= localStorage.getItem("color");
    // document.getElementById("bbb").style.background= localStorage.getItem("color");

}
setInterval( s_cc,100);