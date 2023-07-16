function checkRulesFactoriel(entry, error) {
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

function checkFormRulesPalindrome(entry, error) {
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

export { checkFormRulesPalindrome, checkRulesFactoriel };