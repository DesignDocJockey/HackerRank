"use strict";

const _ROWS = 6;
const _COLUMNS = 6;

var twoDimensionalArray = new Array();

for(let rowIndex = 0; rowIndex < _ROWS; rowIndex++) {
    twoDimensionalArray[rowIndex] = new Array(_COLUMNS);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function PopulateArray(param_array) 
{
    for(let rowIndex = 0; rowIndex < _ROWS; rowIndex++)
    {
        for(let columnIndex = 0; columnIndex < _COLUMNS; columnIndex++) {
            param_array[rowIndex][columnIndex] = getRandomInt(1, 10);
        }
    }
}

function CreateHourGlass(array, rowIndex, columnStartIndex, columnEndIndex, middleRowOffSet, bottomRowStartIndex) 
{    
    var hourGlassArray = new Array();

    //calculate the middle number
    let middleRowOffSetIndex = (rowIndex +1) + middleRowOffSet;
    console.log(`middleRowOffSetIndex: ${middleRowOffSetIndex}`);   

    //get the middle value
    if(array[(rowIndex + 1)] !== null || array[(rowIndex + 1)] !== 'undefined')
    {       
        if(array[(rowIndex + 1)][middleRowOffSetIndex] !== null || array[(rowIndex + 1)][middleRowOffSetIndex] !== 'undefined')   {
            hourGlassArray.push(array[(rowIndex + 1)][middleRowOffSetIndex]); 
            console.log(`Middle Row Value ${array[(rowIndex + 1)][middleRowOffSetIndex] }`);
        }
    }

    //get the upper row values
    console.log(`Top Row Values:`);
    for(let i = columnStartIndex; i <= columnEndIndex; i++) {
        console.log(array[rowIndex][i]); 
        hourGlassArray.push(array[rowIndex][i]);     
    }
    
    //get the lower row values
    console.log(`Bottom Row Values:`);
    for(let j = columnStartIndex; j <= columnEndIndex; j++) {
        console.log(array[bottomRowStartIndex][j]); 
        hourGlassArray.push(array[bottomRowStartIndex][j]);     
    }

    console.log(hourGlassArray);
    return hourGlassArray;
}

console.log(`Populating Array...`);
PopulateArray(twoDimensionalArray);
console.log(twoDimensionalArray);

CreateHourGlass(twoDimensionalArray, 0, 0, 2, 0, 2);
CreateHourGlass(twoDimensionalArray, 0, 1, 3, 1, 2);
CreateHourGlass(twoDimensionalArray, 0, 2, 4, 2, 2);
CreateHourGlass(twoDimensionalArray, 0, 3, 5, 3, 2);

