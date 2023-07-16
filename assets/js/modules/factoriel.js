function displayAllStepToCalcFactoriel(entry, numberArray) {
    let factorielResultCalc = `${entry}! = `;
    for (let i = 0; i < numberArray.length; i++) {
        factorielResultCalc += `${numberArray[i]} * `;
    }
    return factorielResultCalc.substring(0, factorielResultCalc.length - 2);
}

function insertFactorielsValuesInModal(factorielResult, factorielOperation) {
    let modalResult = document.querySelector('.factResult');
    let modalOperation = document.querySelector('.factOperation');

    modalResult.innerHTML = '';
    modalOperation.innerHTML = '';

    modalResult.innerHTML = factorielResult;
    modalOperation.innerHTML = factorielOperation;

}

function calcFactorielEntry(entry, factAllNumbers) {
    if (entry === 0) {
        return 1;
    }
    factAllNumbers.push(entry);
    return entry * calcFactorielEntry(entry - 1, factAllNumbers);
}

export { displayAllStepToCalcFactoriel, insertFactorielsValuesInModal, calcFactorielEntry };