function palindromeResponse(entry, error, success) {
    let entryValue = entry.value.toLowerCase(); 
    let splitValueArray = entryValue.split("");
    let reverseArrayValue = splitValueArray.reverse();
    let palindromeJoin = reverseArrayValue.join("");
    if (palindromeJoin === entryValue) {
        success.palindrome = 'Bravo, il s\'agit bien d\'un palindrome !';
    } else {
        error.palindrome = 'Dommage, il ne s\'agit pas d\'un palindrome !';
    }
}

function displayMessage(messageContainer, inputClassToAdd, inputClass2, valueType) {
    if (messageContainer.classList.contains(inputClassToAdd)) {
        messageContainer.classList.remove(inputClassToAdd);
    }
    if (messageContainer.classList.contains(inputClass2)) {
        messageContainer.classList.remove(inputClass2);
    }

    messageContainer.innerHTML = valueType;
    messageContainer.classList.add(inputClassToAdd);
}

export { palindromeResponse, displayMessage };