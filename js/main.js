var x;
var y;
var z;
var j;
var timer;

function f1 () {
	x = document.getElementById("name_1").value;
	y = document.getElementById("name_2").value;
	z = document.getElementById("name_3").value;
	if (x == "00" && y == "00" && z == "00"){
		document.getElementById("main").innerText = "lracreq";
		return
	}
	timer = setInterval(function(){
			if(z == "00"){ 
				if(y != "00"){
					z = "59";
					y--;
				}
				else { 
					if (x != "00") {
						x--;
						y = "59";
						z = "59";
					}
					else {
						alert();
					}
				}
			}
			else {
				z--;
			}
			j = x + ":" + y + ":" + z;
			document.getElementById("main").innerText = j;
		}, 1000);
	};	

