// self-executing function
(function(){

    /*******************************************

     STUDENTS ASSIGNMENT

     1.  create a function named 'avgNumbers'
         - accept 1 parameter into the function that will be an array of unlimited numbers
         - find the average of all the numbers
         - return the average from the function
         - console.log the answer outside of the function

     2.  create a function named 'fullName'
         - accept 2 parameters into the function that are strings (firstname and lastname)
         - return the name after it has been concatenated
         - console.log the answer outside of the function

     3.  create a function named 'wordCount'
         - accept 1 parameter into the function that is a long string of text words
         - create a function that counts all the words and return the answer
         - console.log the answer outside of the function

     4.  create a function named 'charCount'
         - accept 1 parameter into the function that is a long string of text
         - return length of the array of string characters
         - console.log the answer outside of the function

     5.  create a function named 'vowelsInWord'
         - accept 1 parameter into the function that is a a one word string
         - return the number of vowels in the word
         - console.log the answer outside of the function

     6.  create a function named 'findNum'
         - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
         - if the second parameter being passed is "false" or null then
             - create an array with all of the odd numbers from
                the array
         - else - create an array with all of the even numbers
            from the array
         - return the array
         - console.log the answer outside of the function
     ********************************************/

    console.log('------ Goal2: Assignment: JavaScript Practice ----------');

    console.log("1. avg of an array of numbers");

    var avgNumbers = function(arr) {

        var denominator = arr.length;
        var numerator = 0;
        var average = 0;

        for (var i = 0; i < arr.length; i++) {
            numerator += arr[i];
        }

        average = numerator / denominator;
        return average;
    };

    console.log('avg number = ', avgNumbers([1,2,3,4,5]));
    console.log('avg number = ', avgNumbers([.2,5,15,25.5,100]));

    //--------------------------------------------------------
    console.log("2. concat first and last name");

    var fullName = function(first, last) {

        var name = "";
        var letters = new String(first + " " + last);

        for (var i = 0; i < letters.length; i++) {
            name += letters[i];
        }

        return name;
    }

    console.log(fullName('James', 'Bond'));
    console.log(fullName('Kevin', 'Yang'));

    //--------------------------------------------------------
    console.log("3. word count");
    var ipsum = "this is test text that is being used as input to a function"

    var wordCount = function(phrase) {

        var count = 0;
        var newPhrase = new String(phrase + " ");

        for (var i = 0; i < newPhrase.length; i++) {
            if (newPhrase[i] === " ") {
                if (newPhrase[i+1] === " ") {
                    continue;
                } else {
                    count++;
                }
            }
        }

        return count;
    }

    console.log(wordCount(ipsum));

    //--------------------------------------------------------
    console.log("4. sentence char count");

    var charCount = function(sentence) {

        var count = 0;
        var newSentence = new String(sentence);

        for (var i = 0; i < newSentence.length; i++) {
            if (newSentence[i] === " ") {
                continue;
            } else {
                count++;
            }
        }

        return count;
    }

    console.log(charCount(ipsum));

    //--------------------------------------------------------
    console.log("5. how many vowels in a word");

    var vowelsInWord = function(word) {

        var count = 0;
        var newWord = new String(word.toUpperCase());

        for (var i = 0; i < newWord.length; i++) {
            if (newWord[i] === "A" || newWord[i] === "E" || newWord[i] === "I" || newWord[i] === "O" || newWord[i] === "U") {
                count++;
            } else {
                continue;
            }
        }

        return count;
    }

    console.log(vowelsInWord('JavaScript'));
    console.log(vowelsInWord('YEEEeeAaH'));

    //--------------------------------------------------------
    console.log("6. find number and create an array of even or odd numbers");

    var findNum = function(arr, bool) {
        var evenArray = [];
        var oddArray = [];

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                evenArray.push(arr[i]);
            } else {
                oddArray.push(arr[i]);
            }
        }

        if (bool === false || bool === null) {
            return oddArray;
        }

        return evenArray;
    }

    console.log(findNum([31,22,4,67,83,6,5,4]));
    console.log(findNum([31,22,4,67,83,6,5,4], false));

})();