var xml = new XMLHttpRequest();
xml.onreadystatechange = function(){
    if(this.readyState===4&&this.status===200){
        document.getElementById("tests").innerHTML = this.responseText;
        // console.log(this.responseText);
    }
}


xml.open("get","../php/login.php",true);
xml.send();