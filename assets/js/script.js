document.addEventListener('DOMContentLoaded', (e) => {

    let error = {};
    let success = {};
    let palindromeForm = document.querySelector('.palindrome-form');
    let palindromeMessage = palindromeForm.querySelector('.palindrome-message');
    let factorielForm = document.querySelector('.factoriel-form');
    let factorielMessage = factorielForm.querySelector('.factoriel-message');
    let factAllNumbers = [];

    factorielForm.querySelector('.factoriel-submit-btn').addEventListener('click', (e) => {
        error = {}
        success = {};
        factAllNumbers = [];
        let factorielNumber = e.target.closest('form').querySelector('.factoriel-text-input');
        checkRulesFactoriel(factorielNumber);

        if (Object.entries(error).length > 0) {
            displayMessage(factorielMessage, 'factoriel-error-display', 'factoriel-success-display', error.factoriel);
            e.preventDefault();
            return;
        }
        let numberFactoriel = calcFactorielEntry(parseInt(factorielNumber.value));
        let listNumber = displayAllStepToCalcFactoriel(factorielNumber.value, factAllNumbers);
        insertFactorielsValuesInModal(numberFactoriel, listNumber);
    });

    palindromeForm.querySelector('.palindrome-submit-btn').addEventListener('click', (e) => {

        e.preventDefault();
        error = {};
        success = {};
        let palindromeInput = e.target.closest('form').querySelector('#palindrome-text-input');

        checkFormRulesPalindrome(palindromeInput);
        if (Object.entries(error).length > 0) {
            displayMessage(palindromeMessage, 'palindrome-error-display', 'palindrome-success-display', error.palindrome);
            return;
        }
        palindromeResponse(palindromeInput);

        if (success.palindrome) {
            displayMessage(palindromeMessage, 'palindrome-success-display', 'palindrome-error-display', success.palindrome);
        }
        if (error.palindrome) {
            displayMessage(palindromeMessage, 'palindrome-error-display', 'palindrome-success-display', error.palindrome);
        }

    });

    function checkRulesFactoriel(entry) {
        let value = entry.value.replace(/\s+/g, '');
        if (value === '') {
            error.factoriel = 'Attention, vous devez renseigner une valeure';
        }

        if (/^[0-9\s]*$/.test(value) === false) {
            error.factoriel = 'Attention, le champ ne peut contenir des nombres';
        } else {
            let numberTested = parseInt(value);
            if (numberTested === 0)
                error.factoriel = 'Attention, un zéro sera toujours un zéro';
            if (numberTested >= 50)
                error.factoriel = 'Attention, on ne va pas dépasser le nombre 50';
        }
    }

    function calcFactorielEntry(entry) {
        if (entry === 0) {
            return 1;
        }
        factAllNumbers.push(entry);
        return entry * calcFactorielEntry(entry - 1);
    }

    function displayAllStepToCalcFactoriel(entry, numberArray) {
        let factorielResultCalc = `${entry}! = `;
        for (let i = 0; i < numberArray.length; i++) {
            factorielResultCalc += `${numberArray[i]} * `;
        }
        return factorielResultCalc.substring(0, factorielResultCalc.length - 2);
    }

    function insertFactorielsValuesInModal(factorielResult, factorielOperation)
    {
        let modalResult = document.querySelector('.factResult');
        let modalOperation = document.querySelector('.factOperation');
        
        modalResult.innerHTML = '';
        modalOperation.innerHTML = '';

        modalResult.innerHTML = factorielResult;
        modalOperation.innerHTML = factorielOperation;

    }

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

