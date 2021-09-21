function Send() {
    number1 = document.gentElementById("number1").value;
    number2 = document.gentElementById("number1").value;
    actual_answer = parseInt(number1) * parseInt(number1);

    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='Check()'>Check</button>";
    row = question_number + input_box + check_button;

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    document.getElementById("output").innerHTML = row;
}
