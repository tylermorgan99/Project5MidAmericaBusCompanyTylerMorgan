
/**
 * @author Morgan, Tyler (morgant@student.ncmich.edu)
 * @version 1
 * @summary Tyler Morgan's Project 5 || created: 11.20.2017
 */

/** This is the pragma and library call section of the program*/
"use strict";
const PROMPT = require('readline-sync');

/** This is the global factor section of the program*/
let continueResponse;
let placementValue, passengerNumber, zoneNumber;
let fareCost = [ //creates a multidimensional array representing the number of passengers in a group and number of zones crossed while travelling
    [7.5, 10, 12, 12.75],
    [14, 18.5, 22, 23],
    [20, 21, 32, 33],
    [25, 27.5, 36, 37]
];

function main() {
    process.stdout.write('\x1Bc'); //Clears the screen
    if (continueResponse == null) {
        setContinueResponse();
    }
    if (continueResponse === 1) {
        setPassengerNumber();
        setZoneNumber();
        printOutput();
        setContinueResponse();
        return main(); //Tail Recursion
    }
    printGoodbye();
}

function setContinueResponse() { //The setContinueResponse function prompts users if they want to continue requesting fare prices
    if (continueResponse) {
        continueResponse = -1;
        while (continueResponse !== 0 && continueResponse !== 1) {
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponse = 1;
    }
}

main();

function setPassengerNumber() { //The setPassengerNumber function prompts the user to put in the amount of passengers they are travelling with in a party
    passengerNumber = Number(PROMPT.question(`\nPlease enter the number of passengers in your group (1-4) : `)) - 1; //The -1 was used to make the value act as an array number
    if (passengerNumber >= 0 && passengerNumber <= 3) {
        placementValue = 1
    } else {
        console.log(`\nThat is an incorrect value. Please try again.`);
        return setPassengerNumber();
    }
}

function setZoneNumber() { //The setZoneNumber function prompts the user to put in the amount of zones they are will be crossing on their trip with an upper limit of three
    zoneNumber = Number(PROMPT.question(`\nPlease enter the number of zones that will be crossed (0-3) : `));
    if (zoneNumber >= 0 && zoneNumber <= 3) {
        placementValue = 1
    } else {
        console.log(`\nThat is an incorrect value. Please try again.`);
        return setZoneNumber();
    }
}

function printOutput() { //The printOutput function prints the output of the fareCost array based off of the passengerNumber and zoneNumber variables
    console.log(`\n\t The cost of the fare is ${fareCost[passengerNumber][zoneNumber]}.`)
}

function printGoodbye() { //The printGoodbye function prints a goodbye message if the user does not wish to continue entering values
    process.stdout.write('\x1Bc'); //Clears the screen
    console.log(`\n\tGoodbye.`);
}

/*
This program is designed to prompt the user for the number of passengers
travelling in a group and the amount of travel zones they will cross, then
output the total bill.
 */