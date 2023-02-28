
player1_name = localStorage.getItem("player1_name") 
player2_name = localStorage.getItem("player2_name") 

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("playerQuestion").innerHTML="Question turn"+ player1_name;
document.getElementById("playerAnswer").innerHTML="Answer turn"+ player2_name;

function send() {
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();//DEIXANDO TODA A PALAVRA EM LETRA MINUSCULA
console.log(word);
//Variável que vai guardar letra da posição 1: (charAt1)
charAt1=word.charAt(1)
console.log(charAt1)
//Variável que vai guardar letra da posição central: (charAt2)
length_divide2= Math.floor(word.length/2)
charAt2=word.charAt(length_divide2)
console.log(charAt2)
//Variável que guarda a penúltima letra (charAt3)
lengthminus1=word.length-1 //Descobrindo a posição da penúltima letra
charAt3=word.charAt(lengthminus1) //Passando a posição da penúltima letra para o charAt3

//word=cavalo
remove_charAt1=word.replace(charAt1,"_")//A palavra CAVALO ficaria assim: remove charAt =C_VALO
remove_charAt2=remove_charAt1.replace(charAt2,"_")//remove charAt2=C_v_LO
remove_charAt3=remove_charAt2.replace(charAt3,"_")
console.log(remove_charAt3);
question_word="<h4 id='word_display'> "+remove_charAt3+"</h4>";
input_box="<br>Answer : <input type='text' id='input_check_box'>";
check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row=question_word+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}

//AULA C91 ACABA AQUI
question_turn = "player1";
 answer_turn = "player2";

function check()
{ 
    getAnswer=document.getElementById("input_checkbox").value
    answer=getAnswer.toLowerCase()
    console.log(answer);
    if(word==answer){
     if(answer_turn==player1){
        player1_score = player1_score +1;
        document.getElementById("player1_score").innerHTML = player1_score;
     } else{
        player2_score=player2_score +1;
        document.getElementById("player2_score").innerHTML = player2_score;
     }   
    } 

    if(question_turn==player1){
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;   
    } else{
        question_turn = "player1"
         document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;  
    }

    if(answer_turn == "player1"){
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
    } else {
        answer_turn = "player1" 
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;
     } 
     document.getElementById("output").innerHTML = "";
 }


