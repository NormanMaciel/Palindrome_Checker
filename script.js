document.getElementById("check-btn").addEventListener("click", function() {
    let inputText = document.getElementById("text-input").value;
    let resultElement = document.getElementById("result");

    if (inputText.trim() === "") {
        alert("Please input a value.");
        return;
    }

    if (isPalindrome(inputText)) {
        resultElement.textContent = `${inputText} is a palindrome.`;
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = `${inputText} is not a palindrome.`;
        resultElement.style.color = "red";
    }
});

function isPalindrome(str) {
    // Eliminar caracteres no alfanuméricos y convertir a minúsculas
    let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}
