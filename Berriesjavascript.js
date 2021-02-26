//BUTTON PUSHES

function menuFunction(){
	var x = document.getElementById("topnav");
    if (x.className === "topnav1") {
        x.className += " responsive";
    } else {
        x.className = "topnav1";
    }
}

function search(){
	document.getElementById("search_buttons").classList.toggle("search_buttons");
}

function categories(){
	document.getElementById("categories_buttons").classList.toggle("categories_buttons");
}

//SEARCH BY NEEDS

function searchBy(){
	var virag=document.getElementsByClassName("flower");
	var i;
	for(i=0;i<virag.length;i++){
			virag[i].style.display="none";
	}
	
	
	if (document.getElementById("low1").checked && document.getElementById("low2").checked && document.getElementById("low3").checked && document.getElementById("low4").checked){
		var flowercount = document.getElementsByClassName("1111");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("low1").checked && document.getElementById("low2").checked && document.getElementById("low3").checked && document.getElementById("medium4").checked){
		var flowercount = document.getElementsByClassName("1112");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("low1").checked && document.getElementById("low2").checked && document.getElementById("low3").checked && document.getElementById("high4").checked){
		var flowercount = document.getElementsByClassName("1113");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("low1").checked && document.getElementById("low2").checked && document.getElementById("medium3").checked && document.getElementById("low4").checked){
		var flowercount = document.getElementsByClassName("1121");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("low1").checked && document.getElementById("low2").checked && document.getElementById("medium3").checked && document.getElementById("medium4").checked){
		var flowercount = document.getElementsByClassName("1122");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("low1").checked && document.getElementById("low2").checked && document.getElementById("medium3").checked && document.getElementById("high4").checked){
		var flowercount = document.getElementsByClassName("1123");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("low1").checked && document.getElementById("low2").checked && document.getElementById("high3").checked && document.getElementById("low4").checked){
		var flowercount = document.getElementsByClassName("1131");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("low1").checked && document.getElementById("low2").checked && document.getElementById("high3").checked && document.getElementById("medium4").checked){
		var flowercount = document.getElementsByClassName("1132");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("low1").checked && document.getElementById("low2").checked && document.getElementById("high3").checked && document.getElementById("high4").checked){
		var flowercount = document.getElementsByClassName("1133");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("low1").checked && document.getElementById("medium2").checked && document.getElementById("low3").checked && document.getElementById("low4").checked){
		var flowercount = document.getElementsByClassName("1211");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("low1").checked && document.getElementById("medium2").checked && document.getElementById("low3").checked && document.getElementById("medium4").checked){
		var flowercount = document.getElementsByClassName("1212");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("low1").checked && document.getElementById("medium2").checked && document.getElementById("low3").checked && document.getElementById("high4").checked){
		var flowercount = document.getElementsByClassName("1213");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("low1").checked && document.getElementById("medium2").checked && document.getElementById("medium3").checked && document.getElementById("low4").checked){
		var flowercount = document.getElementsByClassName("1221");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("low1").checked && document.getElementById("medium2").checked && document.getElementById("medium3").checked && document.getElementById("medium4").checked){
		var flowercount = document.getElementsByClassName("1222");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("low1").checked && document.getElementById("medium2").checked && document.getElementById("medium3").checked && document.getElementById("high4").checked){
		var flowercount = document.getElementsByClassName("1223");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("low1").checked && document.getElementById("medium2").checked && document.getElementById("high3").checked && document.getElementById("low4").checked){
		var flowercount = document.getElementsByClassName("1231");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("low1").checked && document.getElementById("medium2").checked && document.getElementById("high3").checked && document.getElementById("medium4").checked){
		var flowercount = document.getElementsByClassName("1232");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("low1").checked && document.getElementById("medium2").checked && document.getElementById("high3").checked && document.getElementById("high4").checked){
		var flowercount = document.getElementsByClassName("1233");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("low1").checked && document.getElementById("high2").checked && document.getElementById("low3").checked && document.getElementById("low4").checked){
		var flowercount = document.getElementsByClassName("1311");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("low1").checked && document.getElementById("high2").checked && document.getElementById("low3").checked && document.getElementById("medium4").checked){
		var flowercount = document.getElementsByClassName("1312");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("low1").checked && document.getElementById("high2").checked && document.getElementById("low3").checked && document.getElementById("high4").checked){
		var flowercount = document.getElementsByClassName("1313");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("low1").checked && document.getElementById("high2").checked && document.getElementById("medium3").checked && document.getElementById("low4").checked){
		var flowercount = document.getElementsByClassName("1321");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("low1").checked && document.getElementById("high2").checked && document.getElementById("medium3").checked && document.getElementById("medium4").checked){
		var flowercount = document.getElementsByClassName("1322");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("low1").checked && document.getElementById("high2").checked && document.getElementById("medium3").checked && document.getElementById("high4").checked){
		var flowercount = document.getElementsByClassName("1323");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("low1").checked && document.getElementById("high2").checked && document.getElementById("high3").checked && document.getElementById("low4").checked){
		var flowercount = document.getElementsByClassName("1331");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("low1").checked && document.getElementById("high2").checked && document.getElementById("high3").checked && document.getElementById("medium4").checked){
		var flowercount = document.getElementsByClassName("1332");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("low1").checked && document.getElementById("high2").checked && document.getElementById("high3").checked && document.getElementById("high4").checked){
		var flowercount = document.getElementsByClassName("1333");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("medium1").checked && document.getElementById("low2").checked && document.getElementById("low3").checked && document.getElementById("low4").checked){
		var flowercount = document.getElementsByClassName("2111");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("medium1").checked && document.getElementById("low2").checked && document.getElementById("low3").checked && document.getElementById("medium4").checked){
		var flowercount = document.getElementsByClassName("2112");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("medium1").checked && document.getElementById("low2").checked && document.getElementById("low3").checked && document.getElementById("high4").checked){
		var flowercount = document.getElementsByClassName("2113");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("medium1").checked && document.getElementById("low2").checked && document.getElementById("medium3").checked && document.getElementById("low4").checked){
		var flowercount = document.getElementsByClassName("2121");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("medium1").checked && document.getElementById("low2").checked && document.getElementById("medium3").checked && document.getElementById("medium4").checked){
		var flowercount = document.getElementsByClassName("2122");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("medium1").checked && document.getElementById("low2").checked && document.getElementById("medium3").checked && document.getElementById("high4").checked){
		var flowercount = document.getElementsByClassName("2123");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("medium1").checked && document.getElementById("low2").checked && document.getElementById("high3").checked && document.getElementById("low4").checked){
		var flowercount = document.getElementsByClassName("2131");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("medium1").checked && document.getElementById("low2").checked && document.getElementById("high3").checked && document.getElementById("medium4").checked){
		var flowercount = document.getElementsByClassName("2132");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("medium1").checked && document.getElementById("low2").checked && document.getElementById("high3").checked && document.getElementById("high4").checked){
		var flowercount = document.getElementsByClassName("2133");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("medium1").checked && document.getElementById("medium2").checked && document.getElementById("low3").checked && document.getElementById("low4").checked){
		var flowercount = document.getElementsByClassName("2211");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("medium1").checked && document.getElementById("medium2").checked && document.getElementById("low3").checked && document.getElementById("medium4").checked){
		var flowercount = document.getElementsByClassName("2212");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("medium1").checked && document.getElementById("medium2").checked && document.getElementById("low3").checked && document.getElementById("high4").checked){
		var flowercount = document.getElementsByClassName("2213");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("medium1").checked && document.getElementById("medium2").checked && document.getElementById("medium3").checked && document.getElementById("low4").checked){
		var flowercount = document.getElementsByClassName("2221");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("medium1").checked && document.getElementById("medium2").checked && document.getElementById("medium3").checked && document.getElementById("medium4").checked){
		var flowercount = document.getElementsByClassName("2222");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("medium1").checked && document.getElementById("medium2").checked && document.getElementById("medium3").checked && document.getElementById("high4").checked){
		var flowercount = document.getElementsByClassName("2223");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("medium1").checked && document.getElementById("medium2").checked && document.getElementById("high3").checked && document.getElementById("low4").checked){
		var flowercount = document.getElementsByClassName("2231");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("medium1").checked && document.getElementById("medium2").checked && document.getElementById("high3").checked && document.getElementById("medium4").checked){
		var flowercount = document.getElementsByClassName("2232");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("medium1").checked && document.getElementById("medium2").checked && document.getElementById("high3").checked && document.getElementById("high4").checked){
		var flowercount = document.getElementsByClassName("2233");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("medium1").checked && document.getElementById("high2").checked && document.getElementById("low3").checked && document.getElementById("low4").checked){
		var flowercount = document.getElementsByClassName("2311");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("medium1").checked && document.getElementById("high2").checked && document.getElementById("low3").checked && document.getElementById("medium4").checked){
		var flowercount = document.getElementsByClassName("2312");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("medium1").checked && document.getElementById("high2").checked && document.getElementById("low3").checked && document.getElementById("high4").checked){
		var flowercount = document.getElementsByClassName("2313");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("medium1").checked && document.getElementById("high2").checked && document.getElementById("medium3").checked && document.getElementById("low4").checked){
		var flowercount = document.getElementsByClassName("2321");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("medium1").checked && document.getElementById("high2").checked && document.getElementById("medium3").checked && document.getElementById("medium4").checked){
		var flowercount = document.getElementsByClassName("2322");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("medium1").checked && document.getElementById("high2").checked && document.getElementById("medium3").checked && document.getElementById("high4").checked){
		var flowercount = document.getElementsByClassName("2323");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("medium1").checked && document.getElementById("high2").checked && document.getElementById("high3").checked && document.getElementById("low4").checked){
		var flowercount = document.getElementsByClassName("2331");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("medium1").checked && document.getElementById("high2").checked && document.getElementById("high3").checked && document.getElementById("medium4").checked){
		var flowercount = document.getElementsByClassName("2332");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("medium1").checked && document.getElementById("high2").checked && document.getElementById("high3").checked && document.getElementById("high4").checked){
		var flowercount = document.getElementsByClassName("2333");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("high1").checked && document.getElementById("low2").checked && document.getElementById("low3").checked && document.getElementById("low4").checked){
		var flowercount = document.getElementsByClassName("3111");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("high1").checked && document.getElementById("low2").checked && document.getElementById("low3").checked && document.getElementById("medium4").checked){
		var flowercount = document.getElementsByClassName("3112");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("high1").checked && document.getElementById("low2").checked && document.getElementById("low3").checked && document.getElementById("high4").checked){
		var flowercount = document.getElementsByClassName("3113");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("high1").checked && document.getElementById("low2").checked && document.getElementById("medium3").checked && document.getElementById("low4").checked){
		var flowercount = document.getElementsByClassName("3121");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("high1").checked && document.getElementById("low2").checked && document.getElementById("medium3").checked && document.getElementById("mediium4").checked){
		var flowercount = document.getElementsByClassName("3122");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("high1").checked && document.getElementById("low2").checked && document.getElementById("medium3").checked && document.getElementById("high4").checked){
		var flowercount = document.getElementsByClassName("3123");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("high1").checked && document.getElementById("low2").checked && document.getElementById("high3").checked && document.getElementById("low4").checked){
		var flowercount = document.getElementsByClassName("3131");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("high1").checked && document.getElementById("low2").checked && document.getElementById("high3").checked && document.getElementById("medium4").checked){
		var flowercount = document.getElementsByClassName("3132");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("high1").checked && document.getElementById("low2").checked && document.getElementById("high3").checked && document.getElementById("high4").checked){
		var flowercount = document.getElementsByClassName("3133");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("high1").checked && document.getElementById("medium2").checked && document.getElementById("low3").checked && document.getElementById("low4").checked){
		var flowercount = document.getElementsByClassName("3211");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("high1").checked && document.getElementById("medium2").checked && document.getElementById("low3").checked && document.getElementById("medium4").checked){
		var flowercount = document.getElementsByClassName("3212");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("high1").checked && document.getElementById("medium2").checked && document.getElementById("low3").checked && document.getElementById("high4").checked){
		var flowercount = document.getElementsByClassName("3213");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("high1").checked && document.getElementById("medium2").checked && document.getElementById("medium3").checked && document.getElementById("low4").checked){
		var flowercount = document.getElementsByClassName("3221");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("high1").checked && document.getElementById("medium2").checked && document.getElementById("medium3").checked && document.getElementById("medium4").checked){
		var flowercount = document.getElementsByClassName("3222");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("high1").checked && document.getElementById("medium2").checked && document.getElementById("medium3").checked && document.getElementById("high4").checked){
		var flowercount = document.getElementsByClassName("3223");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("high1").checked && document.getElementById("medium2").checked && document.getElementById("high3").checked && document.getElementById("low4").checked){
		var flowercount = document.getElementsByClassName("3231");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("high1").checked && document.getElementById("medium2").checked && document.getElementById("high3").checked && document.getElementById("medium4").checked){
		var flowercount = document.getElementsByClassName("3232");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("high1").checked && document.getElementById("medium2").checked && document.getElementById("high3").checked && document.getElementById("high4").checked){
		var flowercount = document.getElementsByClassName("3233");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("high1").checked && document.getElementById("high2").checked && document.getElementById("low3").checked && document.getElementById("low4").checked){
		var flowercount = document.getElementsByClassName("3311");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("high1").checked && document.getElementById("high2").checked && document.getElementById("low3").checked && document.getElementById("medium4").checked){
		var flowercount = document.getElementsByClassName("3312");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("high1").checked && document.getElementById("high2").checked && document.getElementById("low3").checked && document.getElementById("high4").checked){
		var flowercount = document.getElementsByClassName("3313");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("high1").checked && document.getElementById("high2").checked && document.getElementById("medium3").checked && document.getElementById("low4").checked){
		var flowercount = document.getElementsByClassName("3321");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("high1").checked && document.getElementById("high2").checked && document.getElementById("medium3").checked && document.getElementById("medium4").checked){
		var flowercount = document.getElementsByClassName("3322");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("high1").checked && document.getElementById("high2").checked && document.getElementById("medium3").checked && document.getElementById("high4").checked){
		var flowercount = document.getElementsByClassName("3323");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("high1").checked && document.getElementById("high2").checked && document.getElementById("high3").checked && document.getElementById("low4").checked){
		var flowercount = document.getElementsByClassName("3331");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("high1").checked && document.getElementById("high2").checked && document.getElementById("high3").checked && document.getElementById("medium4").checked){
		var flowercount = document.getElementsByClassName("3332");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}
	if (document.getElementById("high1").checked && document.getElementById("high2").checked && document.getElementById("high3").checked && document.getElementById("high4").checked){
		var flowercount = document.getElementsByClassName("3333");
		var count;
		for(count=0;count<flowercount.length;count++){
			flowercount[count].style.display="block";
		}
	}

}

//CATEGORIES

function searchIndoor(){
	var virag=document.getElementsByClassName("flower");
	var i;
	for(i=0;i<virag.length;i++){
			virag[i].style.display="none";
	}
	
	var cat = document.getElementsByClassName("indoor");
	var count;
	for(count = 0; count < cat.length; count++){
		cat[count].style.display="block";
	}
}

function searchOutdoor(){
	var virag=document.getElementsByClassName("flower");
	var i;
	for(i=0;i<virag.length;i++){
			virag[i].style.display="none";
	}
	
	var cat = document.getElementsByClassName("outdoor");
	var count;
	for(count = 0; count < cat.length; count++){
		cat[count].style.display="block";
	}
}

function searchBalcony(){
	var virag=document.getElementsByClassName("flower");
	var i;
	for(i=0;i<virag.length;i++){
			virag[i].style.display="none";
	}
	
	var cat = document.getElementsByClassName("balcony");
	var count;
	for(count = 0; count < cat.length; count++){
		cat[count].style.display="block";
	}
}

function searchMedi(){
	var virag=document.getElementsByClassName("flower");
	var i;
	for(i=0;i<virag.length;i++){
			virag[i].style.display="none";
	}
	
	var cat = document.getElementsByClassName("medi");
	var count;
	for(count = 0; count < cat.length; count++){
		cat[count].style.display="block";
	}
}


//FLOWERPAGES

// LOTUS PAGE
function openLotus(){
	document.getElementById("lotus").style.width="100%";
}
function closeLotus(){
	document.getElementById("lotus").style.width="0%";
}

//PEONY PAGE
function openPeony(){
	document.getElementById("peony").style.width="100%";
}
function closePeony(){
	document.getElementById("peony").style.width="0%";
}

//ROSE PAGE
function openRose(){
	document.getElementById("rose").style.width="100%";
}
function closeRose(){
	document.getElementById("rose").style.width="0%";
}

//PLUMERIA PAGE
function openPlumeria(){
	document.getElementById("plumeria").style.width="100%";
}
function closePlumeria(){
	document.getElementById("plumeria").style.width="0%";
}

//HYDRANGEA PAGE
function openHydrangea(){
	document.getElementById("hydrangea").style.width="100%";
}
function closeHydrangea(){
	document.getElementById("hydrangea").style.width="0%";
}

//MAGNOLIA PAGE
function openMagnolia(){
	document.getElementById("magnolia").style.width="100%";
}
function closeMagnolia(){
	document.getElementById("magnolia").style.width="0%";
}

//FERN PAGE
function openFern(){
	document.getElementById("fern").style.width="100%";
}
function closeFern(){
	document.getElementById("fern").style.width="0%";
}

//LAVENDER PAGE
function openLavender(){
	document.getElementById("lavender").style.width="100%";
}
function closeLavender(){
	document.getElementById("lavender").style.width="0%";
}

//CACTUS PAGE
function openCactus(){
	document.getElementById("cactus").style.width="100%";
}
function closeCactus(){
	document.getElementById("cactus").style.width="0%";
}

//GAZANIA PAGE
function openGazania(){
	document.getElementById("gazania").style.width="100%";
}
function closeGazania(){
	document.getElementById("gazania").style.width="0%";
}

//SNOWDROP PAGE
function openSnowdrop(){
	document.getElementById("snowdrop").style.width="100%";
}
function closeSnowdrop(){
	document.getElementById("snowdrop").style.width="0%";
}

//TULIP PAGE
function openTulip(){
	document.getElementById("tulip").style.width="100%";
}
function closeTulip(){
	document.getElementById("tulip").style.width="0%";
}

//CHRYSANTHEMUM PAGE
function openChrysanthemum(){
	document.getElementById("chrysanthemum").style.width="100%";
}
function closeChrysanthemum(){
	document.getElementById("chrysanthemum").style.width="0%";
}

//ORCHID PAGE
function openOrchid(){
	document.getElementById("orchid").style.width="100%";
}
function closeOrchid(){
	document.getElementById("orchid").style.width="0%";
}

//IRIS PAGE
function openIris(){
	document.getElementById("iris").style.width="100%";
}
function closeIris(){
	document.getElementById("iris").style.width="0%";
}

//CHERRY BLOSSOM PAGE
function openCherryblossom(){
	document.getElementById("cherryblossom").style.width="100%";
}
function closeCherryblossom(){
	document.getElementById("cherryblossom").style.width="0%";
}

//MEMBRILLO PAGE
function openMembrillo(){
	document.getElementById("membrillo").style.width="100%";
}
function closeMembrillo(){
	document.getElementById("membrillo").style.width="0%";
}

//CROCUS PAGE
function openCrocus(){
	document.getElementById("crocus").style.width="100%";
}
function closeCrocus(){
	document.getElementById("crocus").style.width="0%";
}

//MONSTERA PAGE
function openMonstera(){
	document.getElementById("monstera").style.width="100%";
}
function closeMonstera(){
	document.getElementById("monstera").style.width="0%";
}

//HIBISCUS PAGE
function openHibiscus(){
	document.getElementById("hibiscus").style.width="100%";
}
function closeHibiscus(){
	document.getElementById("hibiscus").style.width="0%";
}

//EDELWEISS PAGE
function openEdelweiss(){
	document.getElementById("edelweiss").style.width="100%";
}
function closeEdelweiss(){
	document.getElementById("edelweiss").style.width="0%";
}

//CYCLAMEN PAGE
function openCyclamen(){
	document.getElementById("cyclamen").style.width="100%";
}
function closeCyclamen(){
	document.getElementById("cyclamen").style.width="0%";
}

//LILAC PAGE
function openLilac(){
	document.getElementById("lilac").style.width="100%";
}
function closeLilac(){
	document.getElementById("lilac").style.width="0%";
}

//PULSATILLA PAGE
function openPulsatilla(){
	document.getElementById("pulsatilla").style.width="100%";
}
function closePulsatilla(){
	document.getElementById("pulsatilla").style.width="0%";
}

function openForm(){
	window.open("form.html","_self");
}
