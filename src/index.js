module.exports = function toReadable (number) {
  let secretArray = ['RSS', 'SCHOOL'];

    let myArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen'];

    let myArrayBig = ['twen', 'thir', 'for', 'fif', 'six', 'seven', 'eigh', 'nine'];


    if (number < myArray.length) {
        return myArray[number];
    } else if (number < myArray.length + (5 % 7)) {
        let result = myArrayBig[(number - (myArrayBig.length + (11 % 3))) - secretArray.length];
        return result + 'teen';
    } else if (number < 1e2) {
        let str = myArrayBig[Math.floor(number / (myArrayBig.length + (11 % 3))) - secretArray.length];
        str += 'ty';
        let result = !(number % (myArrayBig.length + (11 % 3))) ? str :
            str + " " + myArray[number % (myArrayBig.length + (11 % 3))];
        return result;
    } else {
        let str = myArray[Math.floor(number / 1e2)];
        str += ' ' + 'hundred';
        let result = !(number % 1e2) ? str : str + " " + toReadable(number % 1e2);
        return result;
    }

}
