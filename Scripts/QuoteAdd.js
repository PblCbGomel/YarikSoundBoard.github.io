let buttonClick;
const codeWord = "Схуя ли";

function buttonClicked() {
        let pass = prompt("Введите кодовое слово: ");
    if(pass === codeWord) {
        alert("Верно :)");
    }
    else {
        alert("Кодовое слово введено ошибочно :(");
    }
}