document.addEventListener('DOMContentLoaded', (e) => {

    let error = {};
    let success = {};
    let palindromeForm = document.querySelector('.palindrome-form');
    let palindromeMessage = palindromeForm.querySelector('.palindrome-message');

    palindromeForm.querySelector('.palindrome-submit-btn').addEventListener('click', (e) => {

        e.preventDefault();
        error = {}
        success = {};
        let palindromeInput = e.target.closest('form').querySelector('#palindrome-text-input');

        checkFormRulesPalindrome(palindromeInput);
        if (Object.entries(error).length > 0) {
            displayMessage('palindrome-error-display', 'palindrome-success-display', error);
            return;
        }
        palindromeResponse(palindromeInput);

        if (success.palindrome) {
            displayMessage('palindrome-success-display', 'palindrome-error-display', success);
        }
        if (error.palindrome) {
            displayMessage('palindrome-error-display', 'palindrome-success-display', error);
        }

    });

    function checkFormRulesPalindrome(entry) {
        let value = entry.value.replace(/\s+/g, '');

        if (value === '') {
            error.palindrome = 'Attention, le champ ne peut pas être vide';
        }

        if (typeof (value) !== 'string') {
            error.palindrome = 'Attention, ce champ doit être une chaine de caractères';
        }

        if (value.length > 20) {
            error.palindrome = 'Attention, le champ ne peut contenir que 20 caractères maximum';
        }
        if (/^[A-Za-z\s]*$/.test(value) === false) {
            error.palindrome = 'Attention, le champ ne peut contenir des lettres';
        }
    }

    function displayMessage(inputClassToAdd, inputClass2, valueType) {
        if (palindromeMessage.classList.contains(inputClassToAdd)) {
            palindromeMessage.classList.remove(inputClassToAdd);
        }
        if (palindromeMessage.classList.contains(inputClass2)) {
            palindromeMessage.classList.remove(inputClass2);
        }

        palindromeMessage.innerHTML = valueType.palindrome;
        palindromeMessage.classList.add(inputClassToAdd);
    }

    function palindromeResponse(entry) {
        let splitValueArray = entry.value.split("");
        let reverseArrayValue = splitValueArray.reverse();
        let palindromeJoin = reverseArrayValue.join("");
        if (palindromeJoin === entry.value) {
            success.palindrome = 'Bravo, il s\'agit bien d\'un palindrome !';
        } else {
            error.palindrome = 'Dommage, il ne s\'agit pas d\'un palindrome !';
        }
    }
});

