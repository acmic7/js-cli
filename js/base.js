function cmdprint(text,name){
	name=(name==undefined)?"print":name;
	document.getElementById("msg").innerHTML+=("</br>"+name+"-&gt;"+text);
}

function printf(text){
	document.getElementById("msg").innerHTML+=("</br>\t"+text);
}

document.getElementById("run").onkeypress=function(e){
	if(e.keyCode == 13){
		  command = document.getElementById("run").innerHTML;
		  document.getElementById("run").innerHTML = '';
		  document.getElementById("msg").innerHTML += ("<br>[usr@acmic.top ~] # " + command);
		  cstr = command.split(' ');
		  run(cstr);
	}
}

function run(cmd){
	switch(cmd[0]){
		case "hi":
			printf("Hey!");break;
		
		case "hello":
		case "hey":
			printf("Hi~");break;
		
		case "help":
		printf("<pre>clear\t清屏\nhelp \t帮助\nprint\t输出</pre>");break;
		
		case "clear":
		//document.getElementById("msg").innerHTML='-&gt;whq os 0.1.0';
		break;
		
		case "print":
		cmdprint(cmd[1],cmd[2]);
		break;
		
		
		
		
		
		
	//	printf("Hi~")
	//	break;


		default:
		document.getElementById("msg").innerHTML+=("<br>-bash: "+cmd[0]+": command not found");
		break;
	}
}