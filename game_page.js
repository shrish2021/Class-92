player1Name = localStorage.getItem("Player1");
player2Name = localStorage.getItem("Player2");
document.getElementById("Player1").innerHTML = player1Name + " : ";
document.getElementById("Player2").innerHTML = player2Name + " : ";

player1Score = 0;
player2Score = 0;
document.getElementById("player1Score").innerHTML = player1Score;
document.getElementById("player2Score").innerHTML = player2Score;

document.getElementById("playerQuestion").innerHTML = "Question Turn - " + player1Name;
document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + player2Name;

function send() {
	get_word = document.getElementById("word").value;
	word = get_word.toLowerCase();
	console.log("word in lowerCase = " + word);

    charAt1 = word.charAt(1);
	console.log(charAt1);

	lenght_divide_2 = Math.floor(word.length/2);
	charAt2 = word.charAt(lenght_divide_2);
	console.log(charAt2);

    lenght_minus_1 = word.length - 1; 
    charAt3 = word.charAt(lenght_minus_1); 
	console.log(charAt3);

    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
	console.log(remove_charAt3);

    question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_word + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}


questionTurn = "Player1";
answerTurn = "Player2";

function check() {
    getAnswer = document.getElementById("input_check_box").value;
    answer = getAnswer.toLowerCase();

    if(answer == word) {

        if(answerTurn == "Player1") {
            player1Score = player1Score + 1;
            document.getElementById("player1Score").innerHTML = player1Score;
        }
        else {
            player2Score = player2Score + 1;
            document.getElementById("player2Score").innerHTML = player2Score;
        }

    }
    if(questionTurn == "Player1")
     {
        questionTurn = "Player2";
        document.getElementById("playerQuestion").innerHTML = "Question Turn - " + player2Name;
    }
    else
     {
        questionTurn = "Player1";
        document.getElementById("playerQuestion").innerHTML = "Question Turn - " + player1Name;
    }
    if(answerTurn == "Player2") 
    {
        answerTurn = "Player1";
        document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + player1Name;
    }
    else 
    {
        answerTurn = "Player2";
        document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + player2Name;
    }
    document.getElementById("output").innerHTML = "";
}