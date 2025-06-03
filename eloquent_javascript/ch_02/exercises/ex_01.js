// Eloquent JavaScript, p. 55; Ch. 2 Ex. 1

/*
    Write a loop that makes seven calls to console.log to output the following triangle:

        #
        ##
        ###
        ####
        #####
        ######
        #######
*/

const hashSymbol = "#";
let displayString = "";

for (i = 0; i < 7; i++) {
    displayString += hashSymbol;
    console.log(displayString);
}
