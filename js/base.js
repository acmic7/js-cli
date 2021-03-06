function cmdprint(text,name){
	name=(name==undefined)?"print":name;
	document.getElementById("msg").innerHTML+=("</br>"+name+"-&gt;"+text);
}

function printf(text){
	document.getElementById("msg").innerHTML+=("</br>\t"+text);
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
		
		case "ls":
		printf("<span class='blue'>blog</span><span class='blue'>contact</span><span class='white'>hello.txt</span><span class='green'>home</span>");
		break;
		
		case "cd":
		switch(cmd[1]){
			case "blog":
				document.getElementById("msg").innerHTML += ("<br>[usr@acmic.top blog] # " );
				break;
		}
		break;
		
		case "vi":
		switch(cmd[1]){
			case "hello.txt":
				document.getElementById("msg").innerHTML += ("<br>ooo!my friend !~welcome back~~~" );
				break;
		}
		break;
		
		case "./home":
			document.getElementById("msg").innerHTML += ("<br><a href='https://acmic.top'>acmic.top</a>" );
		break;
		
		case "print":
		cmdprint(cmd[1],cmd[2]);
		break;

		default:
		document.getElementById("msg").innerHTML+=("<br>-bash: "+cmd[0]+": command not found");
		break;
	}
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