p1name = localStorage.getItem("player1name")
p2name = localStorage.getItem("player2name")

p1score = 0
p2score = 0

Q_turn = "p1"
A_turn = "p2"

document.getElementById("p1name").innerHTML = p1name + ":"
document.getElementById("p2name").innerHTML = p2name + ":"

document.getElementById("p1score").innerHTML = p1score
document.getElementById("p2score").innerHTML = p2score

document.getElementById("player_question").innerHTML = "Question Turn :" + p1name
document.getElementById("player_answer").innerHTML = "Answer Turn :" + p2name


function Send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='Check()'>Check</button>";
    row = question_number + input + check_button;

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    document.getElementById("output").innerHTML = row;
}
