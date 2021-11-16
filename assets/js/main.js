function busca(){

var elemento=document.getElementById("imagem");

var domain = "https://ironhotel.biz/avatar/";

var value = document.getElementById("nick").value;

var item = document.getElementById("cars").value;

var action = "/action=crr="+item+"&size=l&head_direction=2&direction=2&gesture=sml&dance=0&img_format=png&effect=&frame_num=0";

if (value == "")

value = "Dominguez"

elemento.src= domain + value + action;

}

