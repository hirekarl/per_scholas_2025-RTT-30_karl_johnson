// Eloquent JavaScript, p. 56-57; Ch. 2 Ex. 3

/*
    Write a program that creates a string that represents an 8×8 grid, using
    newline characters to separate lines. At each position of the grid there
    is either a space or a "#" character. The characters should form a
    chessboard.

    Passing this string to console.log should show something like this:

         # # # #
        # # # #
         # # # #
        # # # #
         # # # #
        # # # #
         # # # #
        # # # #

    When you have a program that generates this pattern, define a binding size = 8
    and change the program so that it works for any size, outputting a grid of the
    given width and height.
*/

const dimensions = 8;

const space = " ";
const hashSymbol = "#";
const newLine = "\n";

let displayString = "";

for (i = 0; i < dimensions; i++) {
    if (i % 2 == 0) {
        for (j = 0; j < dimensions; j++) {
            if (j % 2 == 0) displayString += space;
            else displayString += hashSymbol;
        }
    }
    else {
        for (j = 0; j < dimensions; j++) {
            if (j % 2 == 0) displayString += hashSymbol;
            else displayString += space;
        }
    }
    displayString += newLine;
}

console.log(displayString);
