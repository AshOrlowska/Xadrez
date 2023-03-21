var preta = {
  nome: "Preta",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
}

var branca = {
  nome: "Branca",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
}

branca.pontos = calculaPontos(branca)
preta.pontos = calculaPontos(preta)

function calculaPontos(jogadores) {
  var pontos = jogadores.vitorias * 3 + jogadores.empates
  return pontos
}

var jogadores = [branca, preta]

exibirJogadores(jogadores)

function exibirJogadores(jogadores) {
  var html = ""
  for (var i = 0; i < jogadores.length; i++) {
    html += "<tr><td>" + jogadores[i].nome + "</td>"
    html += "<td>" + jogadores[i].vitorias + "</td>"
    html += "<td>" + jogadores[i].empates + "</td>"
    html += "<td>" + jogadores[i].derrotas + "</td>"
    html += "<td>" + jogadores[i].pontos + "</td>"
    html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
  }
  var tabelaPeças = document.getElementById("tabelaPeças")
  tabelaPeças.innerHTML = html
}

function adicionarVitoria(i) {
  var jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadores(jogadores)
}

function adicionarEmpate(i) {
  var jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadores(jogadores)
 }

function adicionarDerrota(i) {
  var jogador = jogadores[i]
  jogador.derrotas++;
  jogador.pontos = calculaPontos(jogador)
  exibirJogadores(jogadores)
}

// Tabuleiro do Xadrez //

function inicia_jogo(){
vez = "branco"; 


	document.getElementById("t11").innerHTML = "&#9820;";
	document.getElementById("t12").innerHTML = "&#9822;";
	document.getElementById("t13").innerHTML = "&#9821;";
	document.getElementById("t14").innerHTML = "&#9819;";
	document.getElementById("t15").innerHTML = "&#9818;";
	document.getElementById("t16").innerHTML = "&#9821;";
	document.getElementById("t17").innerHTML = "&#9822;";
	document.getElementById("t18").innerHTML = "&#9820;";
	
	document.getElementById("t21").innerHTML = "&#9823;";
	document.getElementById("t22").innerHTML = "&#9823;";
	document.getElementById("t23").innerHTML = "&#9823;";
	document.getElementById("t24").innerHTML = "&#9823;";
	document.getElementById("t25").innerHTML = "&#9823;";
	document.getElementById("t26").innerHTML = "&#9823;";
	document.getElementById("t27").innerHTML = "&#9823;";
	document.getElementById("t28").innerHTML = "&#9823;";
	

	document.getElementById("t81").innerHTML = "&#9814;";
	document.getElementById("t82").innerHTML = "&#9816;";
	document.getElementById("t83").innerHTML = "&#9815;";
	document.getElementById("t84").innerHTML = "&#9813;";
	document.getElementById("t85").innerHTML = "&#9812;";
	document.getElementById("t86").innerHTML = "&#9815;";
	document.getElementById("t87").innerHTML = "&#9816;";
	document.getElementById("t88").innerHTML = "&#9814;";
	
	document.getElementById("t71").innerHTML = "&#9817;";
	document.getElementById("t72").innerHTML = "&#9817;";
	document.getElementById("t73").innerHTML = "&#9817;";
	document.getElementById("t74").innerHTML = "&#9817;";
	document.getElementById("t75").innerHTML = "&#9817;";
	document.getElementById("t76").innerHTML = "&#9817;";
	document.getElementById("t77").innerHTML = "&#9817;";
	document.getElementById("t78").innerHTML = "&#9817;";	
	


	
	cria_array();
	function cria_array(){
		var x,y;
		
		peca = new Array();
		
		for(x=1;x<=8;x++){
			
			peca[x] = new Array();
			
			for(y=1;y<=8;y++){
			
				peca[x][y] = new Array();
				peca[x][y]['peca'] = false; 		
				peca[x][y]['cor'] = false;			
			 
			}
		}
		

		il = new Array();
		il['preto'] = new Array();
		il['branco'] = new Array();
	
	}


	
	
		

	peca[1][1]['peca']="torre";		peca[1][1]['cor']="preto";	peca[1][1]['mov']=0; il['preto']['torre'] = "&#9820;";
	peca[1][2]['peca']="cavalo";	peca[1][2]['cor']="preto";	peca[1][2]['mov']=0; il['preto']['cavalo'] = "&#9822;";
	peca[1][3]['peca']="bispo"; 	peca[1][3]['cor']="preto";	peca[1][3]['mov']=0; il['preto']['bispo'] = "&#9821;";
	peca[1][4]['peca']="rainha";	peca[1][4]['cor']="preto";	peca[1][4]['mov']=0; il['preto']['rainha'] = "&#9819;";
	peca[1][5]['peca']="rei";		peca[1][5]['cor']="preto";	peca[1][5]['mov']=0; il['preto']['rei'] = "&#9818;";
	peca[1][6]['peca']="bispo";		peca[1][6]['cor']="preto";	peca[1][6]['mov']=0; 
	peca[1][7]['peca']="cavalo";	peca[1][7]['cor']="preto";	peca[1][7]['mov']=0; 
	peca[1][8]['peca']="torre";		peca[1][8]['cor']="preto";	peca[1][8]['mov']=0; 

	peca[2][1]['peca']="peao";		peca[2][1]['cor']="preto";	peca[2][1]['mov']=0; il['preto']['peao'] = "&#9823;";
	peca[2][2]['peca']="peao";		peca[2][2]['cor']="preto";	peca[2][2]['mov']=0;
	peca[2][3]['peca']="peao"; 		peca[2][3]['cor']="preto";	peca[2][3]['mov']=0;
	peca[2][4]['peca']="peao";		peca[2][4]['cor']="preto";	peca[2][4]['mov']=0;
	peca[2][5]['peca']="peao";		peca[2][5]['cor']="preto";	peca[2][5]['mov']=0;
	peca[2][6]['peca']="peao";		peca[2][6]['cor']="preto";	peca[2][6]['mov']=0;
	peca[2][7]['peca']="peao";		peca[2][7]['cor']="preto";	peca[2][7]['mov']=0;
	peca[2][8]['peca']="peao";		peca[2][8]['cor']="preto";	peca[2][8]['mov']=0;	


	peca[8][1]['peca']="torre";		peca[8][1]['cor']="branco";	peca[8][1]['mov']=0; il['branco']['torre'] = "&#9814;";
	peca[8][2]['peca']="cavalo";	peca[8][2]['cor']="branco";	peca[8][2]['mov']=0; il['branco']['cavalo'] = "&#9816;";
	peca[8][3]['peca']="bispo"; 	peca[8][3]['cor']="branco";	peca[8][3]['mov']=0; il['branco']['bispo'] = "&#9815;";
	peca[8][4]['peca']="rainha";	peca[8][4]['cor']="branco";	peca[8][4]['mov']=0; il['branco']['rainha'] = "&#9813;";
	peca[8][5]['peca']="rei";		peca[8][5]['cor']="branco";	peca[8][5]['mov']=0; il['branco']['rei'] = "&#9812;";
	peca[8][6]['peca']="bispo";		peca[8][6]['cor']="branco";	peca[8][6]['mov']=0;
	peca[8][7]['peca']="cavalo";	peca[8][7]['cor']="branco";	peca[8][7]['mov']=0;
	peca[8][8]['peca']="torre";		peca[8][8]['cor']="branco";	peca[8][8]['mov']=0;

	peca[7][1]['peca']="peao";		peca[7][1]['cor']="branco";	peca[7][1]['mov']=0; il['branco']['peao'] = "&#9817;";
	peca[7][2]['peca']="peao";		peca[7][2]['cor']="branco";	peca[7][2]['mov']=0;
	peca[7][3]['peca']="peao"; 		peca[7][3]['cor']="branco";	peca[7][3]['mov']=0;
	peca[7][4]['peca']="peao";		peca[7][4]['cor']="branco";	peca[7][4]['mov']=0;
	peca[7][5]['peca']="peao";		peca[7][5]['cor']="branco";	peca[7][5]['mov']=0;
	peca[7][6]['peca']="peao";		peca[7][6]['cor']="branco";	peca[7][6]['mov']=0;
	peca[7][7]['peca']="peao";		peca[7][7]['cor']="branco";	peca[7][7]['mov']=0;
	peca[7][8]['peca']="peao";		peca[7][8]['cor']="branco";	peca[7][8]['mov']=0;	




	movimenta = new Array();
	
	movimenta['selecionada'] = new Array();
	movimenta['selecionada']['x'] =0;
	movimenta['selecionada']['y'] =0;
	movimenta['selecionada']['peca']="0";
	movimenta['selecionada']['cor']="0";
	
	movimenta['destino'] = new Array();
	movimenta['destino']['x'] =0;
	movimenta['destino']['y'] =0; 
	movimenta['destino']['peca'] ="0";
	movimenta['destino']['cor']="0";


	possiveis = new Array();


}

function possiveis_movimentos(){
		var x,y;
		var c =0; 
		var i; 
		x = movimenta['selecionada']['x'];
		y = movimenta['selecionada']['y'];

		document.getElementById('t'+x+y).style.backgroundColor = "#3C9"; 
		possiveis[c] = "t"+x+y; c++;


	if(peca[x][y]['peca']=='peao'){
		if(peca[x][y]['cor']=="branco"){

				if(!peca[x-1][y]['peca']){
					possivel(x-1,y);
				}if(y-1>0 && peca[x-1][y-1]['peca']){
					possivel(x-1,y-1);						
				}
				if(y+1<9 && peca[x-1][y+1]['peca']){
					possivel(x-1,y+1);					
				}					

				if(x==7){				
					if(!peca[x-2][y]['peca'] && !peca[x-1][y]['peca']){
						possivel(x-2,y);
					}
				}

		}
		
		
		if(peca[x][y]['cor']=="preto"){
				
				if(!peca[x+1][y]['peca']){
					possivel(x+1,y);
				}if(y-1>0 && peca[x+1][y-1]['peca']){
					possivel(x+1,y-1);						
				}
				if(y+1<9 && peca[x+1][y+1]['peca']){
					possivel(x+1,y+1);					
				}					

				if(x==2){
				
					if(!peca[x+2][y]['peca'] && !peca[x+1][y]['peca']){
						possivel(x+2,y);
					}
		
				}

		}
	}


	if(peca[x][y]['peca']=='cavalo'){
		
		possivel(x-1,y-2);
		possivel(x+1,y+2);
		possivel(x+1,y-2);
		possivel(x-1,y+2);
		possivel(x-2,y-1);
		possivel(x+2,y+1);
		possivel(x+2,y-1);
		possivel(x-2,y+1);
		
	}



	if(peca[x][y]['peca']=='rei'){
		possivel(x-1,y);
		possivel(x,y-1);
		possivel(x-1,y-1);
		possivel(x+1,y);
		possivel(x,y+1);
		possivel(x+1,y+1);
		possivel(x-1,y+1);
		possivel(x+1,y-1);
	}

	if(peca[x][y]['peca']=='torre'){
		
		for(i=1;possivel(x-i,y);i++);
		for(i=1;possivel(x+i,y);i++);
		for(i=1;possivel(x,y-i);i++);
		for(i=1;possivel(x,y+i);i++);
	}

	if(peca[x][y]['peca']=='bispo'){
		
		for(i=1;possivel(x-i,y-i);i++);
		for(i=1;possivel(x+i,y+i);i++);
		for(i=1;possivel(x-i,y+i);i++);
		for(i=1;possivel(x+i,y-i);i++);
	}

	if(peca[x][y]['peca']=='rainha'){
		
		for(i=1;possivel(x-i,y-i);i++);
		for(i=1;possivel(x+i,y+i);i++);
		for(i=1;possivel(x-i,y+i);i++);
		for(i=1;possivel(x+i,y-i);i++);
		for(i=1;possivel(x-i,y);i++);
		for(i=1;possivel(x+i,y);i++);
		for(i=1;possivel(x,y-i);i++);
		for(i=1;possivel(x,y+i);i++);
		
	}




function possivel(px,py){
		if(px>0 && px <9 && py>0 && py <9 && peca[px][py]['cor']!= movimenta['selecionada']['cor']){
			document.getElementById('t'+(px)+(py)).style.backgroundColor = "#3C9"; 
			possiveis[c] = "t"+(px)+(py); c++;
			
			if(!peca[px][py]['peca']){
				return true;
			}
		}else{
			return false;
		}

	
	}

	return c;
}

function volta_fundo(){
	var cf;
	for(cf=0;cf<possiveis.length;cf++){
		document.getElementById(possiveis[cf]).style.backgroundColor = "";
	}	
}

function verifica_possivel(x,y,c){
	var pode=0;
	var cp;
	var div = "t"+x+y;
	
	for(cp=1;cp<c;cp++){
		
		if(possiveis[cp]==div){
			pode ++;
		}
		if(pode>0){
			return 1;
		}
	}	
	
}

function seleciona(x,y){
	
		
		if((movimenta['selecionada']['x']==0 || peca[x][y]['cor'] == movimenta['selecionada']['cor']) && peca[x][y]['cor']==vez){
			if(movimenta['selecionada']['x']!=0){
				volta_fundo(); 
			}
			if(peca[x][y]['peca']){ 
				movimenta['selecionada']['x'] = x;	
				movimenta['selecionada']['y'] = y;  
				movimenta['selecionada']['peca'] = peca[x][y]['peca'];
				movimenta['selecionada']['cor'] = peca[x][y]['cor'];	
				
				cont_possiveis = possiveis_movimentos();	
			}
			
		}else if(verifica_possivel(x,y,cont_possiveis)){ 
			
			if(peca[x][y]['peca']=="rei"){
				alert(movimenta['selecionada']['cor']+" venceu (:");
				
			}
			
			
			if(movimenta['selecionada']['peca']=='peao' && movimenta['selecionada']['cor']=='branco' && x==1){
				document.getElementById('escolhebranco').style.display='block';	
				document.getElementById('fundo').style.display='block';	
				xe=x;ye=y;
			}
			if(movimenta['selecionada']['peca']=='peao' && movimenta['selecionada']['cor']=='preto' && x==8){
				document.getElementById('escolhepreto').style.display='block';	
				document.getElementById('fundo').style.display='block';					
				xe=x;ye=y;
			}
			
			if(peca[x][y]['cor'] != movimenta['selecionada']['cor']){
				movimenta['destino']['x'] =x;	
				movimenta['destino']['y'] =y;  
				
				if(peca[x][y]['peca']){  
					movimenta['destino']['peca'] = peca[x][y]['peca'];	
					movimenta['destino']['cor'] = peca[x][y]['cor'];
				}
				
				
				document.getElementById("t"+movimenta['selecionada']['x']+""+movimenta['selecionada']['y']).innerHTML = ""; 
				document.getElementById("t"+x+""+y).innerHTML = il[movimenta['selecionada']['cor']][movimenta['selecionada']['peca']]; 
				peca[x][y]['peca']=movimenta['selecionada']['peca'];	
				peca[x][y]['cor']=movimenta['selecionada']['cor'];		
								
				peca[movimenta['selecionada']['x']][movimenta['selecionada']['y']]['peca'] = false;	
				peca[movimenta['selecionada']['x']][movimenta['selecionada']['y']]['cor'] = false;		
					
				movimenta['selecionada']['x'] =0;	
				movimenta['selecionada']['y'] =0;	
				movimenta['selecionada']['peca']="0";	
				movimenta['selecionada']['cor']="0";	
				
				
			}

			volta_fundo(); 
			
			if(vez=="branco"){vez="preto";}else{vez="branco";} 

		}
		
		

	
}

	function escolhe(pecae,core){
			peca[xe][ye]['peca']=pecae;
			document.getElementById("t"+xe+""+ye).innerHTML = il[core][pecae];
			document.getElementById('escolhe'+core).style.display='none';
			document.getElementById('fundo').style.display='none';
	}

	function escolhecor_incio(cor){
			document.getElementById('escolhecor-inicio').style.display='none';
			document.getElementById('fundo').style.display='none';
			vez = cor; 

	}

