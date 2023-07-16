import { palindromeResponse, displayMessage } from './modules/palindrome.js';
import { displayAllStepToCalcFactoriel, insertFactorielsValuesInModal, calcFactorielEntry } from './modules/factoriel.js';
import { checkFormRulesPalindrome, checkRulesFactoriel } from './modules/checkingForm.js';

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
        checkRulesFactoriel(factorielNumber, error);

        if (Object.entries(error).length > 0) {
            displayMessage(factorielMessage, 'factoriel-error-display', 'factoriel-success-display', error.factoriel);
            e.preventDefault();
            return;
        }
        let numberFactoriel = calcFactorielEntry(parseInt(factorielNumber.value), factAllNumbers);
        let listNumber = displayAllStepToCalcFactoriel(factorielNumber.value, factAllNumbers);
        insertFactorielsValuesInModal(numberFactoriel, listNumber);
    });

    palindromeForm.querySelector('.palindrome-submit-btn').addEventListener('click', (e) => {

        e.preventDefault();
        error = {};
        success = {};
        let palindromeInput = e.target.closest('form').querySelector('#palindrome-text-input');

        checkFormRulesPalindrome(palindromeInput, error);
        if (Object.entries(error).length > 0) {
            displayMessage(palindromeMessage, 'palindrome-error-display', 'palindrome-success-display', error.palindrome);
            return;
        }
        palindromeResponse(palindromeInput, error, success);

        if (success.palindrome) {
            displayMessage(palindromeMessage, 'palindrome-success-display', 'palindrome-error-display', success.palindrome);
        }
        if (error.palindrome) {
            displayMessage(palindromeMessage, 'palindrome-error-display', 'palindrome-success-display', error.palindrome);
        }

    });
})