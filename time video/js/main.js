var x;
var y;
var z;
var j;
var timer;

function f1 () {
	x = document.getElementById("name_1").value;
	y = document.getElementById("name_2").value;
	z = "00";
	if (x != "" && y != ""){
		document.getElementById("name_3").innerText = x + ":" + y + ":" + z;
		timer = setInterval(function(){
			if(z == "00"){
				if(y != "00"){
					z ="59";
					j = x + ":" + (y--) + ":" + z;
				}
				else {
					y ="59";
					j = (x--) + ":" + "59" + ":" + z;
				}
			}
			document.getElementById("name_3").innerText = j;
		}, 1000);
	}
} 

