function openmenu() {
			if (document.getElementById("menubutton").className=="menubutton") {
				document.getElementById("menubutton").className="menubutton2";
				document.getElementById("menu").className="menuopened";
				
			} else {
				document.getElementById("menubutton").className="menubutton";
				document.getElementById("menu").className="menuclosed";
			}
}


function openaccountfromcookie(string){
			let cookies=(document.cookie).split(";");
			//alert(cookies[2]);
			let cakes=cookies.length;
			//alert(cakes);
			let username="undefined guest";
			let userpassword="1234";
			for (let i =1;i<cakes;i++){
				thiscookie=cookies[i]+"";
				console.log(thiscookie);
				namethiscookie=thiscookie.split("=")[0];
				valuethiscookie=thiscookie.split("=")[1];
				if ((namethiscookie==" math_book_user_name")){
					username=valuethiscookie;
				}
			}
			console.log(username);
			if (cakes>1) {
				document.getElementById("loginbutton").innerHTML=`<a href="/math_book/myaccount/">${username}</a>`;
			}
			if (string=="name"){
				return username
			} else if (string=="password"){
				return userpassword
			}

			
			if (username == "undefined guest"){
				document.getElementById("creatorname2").innerHTML="вы можете зарегистрироваться <a href='/math_book/login/'>здесь</a> "
			} else {
				document.getElementById("creatorname2").remove()
			}
}


let massiveoftaskids=[]
let massiveoftasks=[]


function hiddentext(textid){
			let text=document.getElementById(textid).innerHTML
			let minitext=text.substring(0,90)
			minitext=minitext+"..."
			massiveoftaskids.push(textid)
			massiveoftasks.push(text)
			document.getElementById(textid).setAttribute("onclick", "showtext(id)")
			if (text.length>90){
				document.getElementById(textid).innerHTML="краткое условие: "+minitext
			} else {
				document.getElementById(textid).innerHTML=text		
			}
}


function showtext(textid){
			document.getElementById(textid).innerHTML=massiveoftasks[massiveoftaskids.indexOf(textid)]
			document.getElementById(textid).setAttribute("onclick", "hiddentext(id)")
		}


function openpage(){
	ismobileversion();
}


openpage();
console.log("ggg");


function ismobileversion(){
	if (window.innerWidth<window.innerHeight){
		//alert('mobile')
		let classes=['task','pagemenu','message','chat','my_message_place','another_message_place','messenger_place',]
		ih=""
		for (let i = 0; i < classes.length;i++){
			clas=classes[i]
			ih+=`.${clas}{margin-right:2%;margin-left:2%;width:auto}.${clas}:hover{margin-right:2%;margin-left:2%;width:auto}`;
		}
		classes=['create_message_place']
		
		for (let i = 0; i < classes.length;i++){
			clas=classes[i]
			ih+=`.${clas}{right:2%;left:calc(2% + 50px);width:auto}.${clas}:hover{right:2%;left:calc(2% + 50px);width:auto}`;
		}
		ih+=`.messenger_menu{width: 50px; top: 52px; left: -10px}.messenger_menu:hover{width: 50px; top: 52px; left: -10px}`
		ih+=`.chats_mini_place{left: -100%}.chats_mini_place:hover{left: -100%}`
		document.getElementById("style").innerHTML=ih;
	}
}


function saveaccount(){
	document.cookie="math_book_sorryitsimpossible={{user_name}}; samesite=strict; path=/; max-age=3600000000000000"
	document.cookie="math_book_user_name={{user_name}}; samesite=strict; path=/; max-age=3600000000000000"
	document.cookie="math_book_user_id={{user_id}}; samesite=strict; path=/; max-age=3600000000000000"
	document.cookie="math_book_session_key={{session_key}}; samesite=strict; path=/; max-age=3600000000000000"
}


function loadLatex(id_from, id_for){
    		resultText="";
    		text=document.getElementById(id_from).innerHTML;
    		//console.log(text);
    		// 0=normal ; 1=formula
    		typeElementNow=0;
    		formula="";
    		for (let i=0;i<=text.length;i++){
    			//console.log(text[i]);
    			if (text[i]=="$"){
    				typeElementNow++;
    				typeElementNow %= 2;
    				//console.log(formula);
    				resultText+=katex.renderToString(formula,{throwOnError: true});
    				formula="";
    			} else if (typeElementNow==1){
    				formula+=text[i];
    			} else {
    				//console.log(resultText);
    				if (text[i]=="\\"){
    					
    					console.log(text[i+1]);
    					if (text[i+1]=="i" && text[i+2]=="t" && text[i+3]=="e" && text[i+4]=="m"){
    						resultText+="<br>";
    						i+=4;
    					}
    					if (text[i+1]=="e" && text[i+2]=="n" && text[i+3]=="d"){
    						resultText+="<br>";
    						i+=3;
    					}
    					if (text[i+1]=="b" && text[i+2]=="e" && text[i+3]=="g" && text[i+4]=="i" && text[i+5]=="n"){
    						resultText+="<br>";
    						i+=5;
    					}
    				}
    				else{
    					resultText+=text[i];
    				}
    			}
    		}
    		//console.log(resultText);
    		document.getElementById(id_for).innerHTML=resultText;
    	}