function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
    xmlhttp.open("GET", "dbshop.xml", true);
    xmlhttp.send();
}
  
function myFunction(xml) {
    var uid, user, pass, uname, tel, i, xmlDoc, txt1, txt2, txt3, txt4, txt5 ;
    xmlDoc = xml.responseXML;
    txt1 = "";
    txt2 = "";
    txt3 = "";
    txt4 = "";
    txt5 = "";

    uid = xmlDoc.getElementsByTagName("UID");
    user = xmlDoc.getElementsByTagName("USER");
    pass = xmlDoc.getElementsByTagName("PASS");
    uname = xmlDoc.getElementsByTagName("UNAME");
    tel = xmlDoc.getElementsByTagName("TEL");

    for (i = 0; i < uid.length; i++) {
      txt1 += uid[i].childNodes[0].nodeValue + "<br>";
      txt2 += user[i].childNodes[0].nodeValue + "<br>";
      txt3 += pass[i].childNodes[0].nodeValue + "<br>";
      txt4 += uname[i].childNodes[0].nodeValue + "<br>";
      txt5 += tel[i].childNodes[0].nodeValue + "<br>";
      
    }
    document.getElementById("demo1").innerHTML = txt1;
    document.getElementById("demo2").innerHTML = txt2;
    document.getElementById("demo3").innerHTML = txt3;
    document.getElementById("demo4").innerHTML = txt4;
    document.getElementById("demo5").innerHTML = txt5;
}

function loadXMLDoc1() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction1(this);
    }
  };
  xmlhttp.open("GET", "dbshop1.xml", true);
  xmlhttp.send();
}

function myFunction1(xml) {
  var pid, pname, detail, stock, i, xmlDoc, txt1, txt2, txt3, txt4 ;
  xmlDoc = xml.responseXML;
  txt1 = "";
  txt2 = "";
  txt3 = "";
  txt4 = "";

  pid = xmlDoc.getElementsByTagName("PID");
  pname = xmlDoc.getElementsByTagName("PNAME");
  detail = xmlDoc.getElementsByTagName("DETAIL");
  stock = xmlDoc.getElementsByTagName("STOCK");

  for (i = 0; i < pid.length; i++) {
    txt1 += pid[i].childNodes[0].nodeValue + "<br>";
    txt2 += pname[i].childNodes[0].nodeValue + "<br>";
    txt3 += detail[i].childNodes[0].nodeValue + "<br>";
    txt4 += stock[i].childNodes[0].nodeValue + "<br>";
    
  }
  document.getElementById("po1").innerHTML = txt1;
  document.getElementById("po2").innerHTML = txt2;
  document.getElementById("po3").innerHTML = txt3;
  document.getElementById("po4").innerHTML = txt4;
}
