/*  

   Grid Format:  [N x N]  [row x column]
          Note:  N current can only be even (E x E)
          Note:  Grid Class should return a MAP object with:
                    1.  KEY of BigInt
                    2.  Value of Object 
                    3.  Each object has a key-value pair of id: key (KEY of MAP)

*/


//  Method to [re]turn row from BigInt
//  left 1/2 bits are row
function reRow(BigIn=0, debug = true){

    const leftHalf=0;

    const toRow = BigInt(0b11011011);

    const bitlength = toRow.toString(2).length;  
    const bitshift = Math.floor(bitlength/2);        // dynamic bitmask generation for 1/2 of length of parameter (future)
    
    const row = toRow >> BigInt(bitshift);

    console.log('row',row.toString(2).padStart(bitshift,'0'))

    if( row <= BigInt(2)**BigInt(bitshift)-BigInt(1) ){   // double checking if column is 1/2 of length of number, using the binary length

        if( debug == true ){
            console.log(`==================================`);
            console.log(`reRow DEBUG: row WITHIN bounds`);
            console.log(`==================================`);
        }
        return row;

    }else {

        console.log(`==================================`);
        console.log(`reRow DEBUG: row OUTSIDE bounds`);
        console.log(`==================================`);
        console.log(`reRow DEBUG: Original: ${toRow.toString(2)}`);
        console.log(`reRow DEBUG: theShift: ${bitShift}`);
        console.log(`reRow DEBUG: appShift: ${row.toString(2).padStart(bitshift,'0')} `);
        console.log(`reRow DEBUG: ${typeof toRow}, ${toRow}`);   

    };

}


//  Method to [re]turn column from BigInt
//  Right 1/2 bits are column
function reCol(BigIn=0, debug = true){

    const rightHalf=0;                           // connect to Parameters later
    const toCol = BigInt(0b11011011); 
    const binNo = toCol.toString(2);             // connect to Parameters later

    const bitlength = toCol.toString(2).length;  // dynamic bitmask generation for 1/2 of length of parameter (future)
    const bithalf = Math.floor(bitlength/2);
    const bitmask = (1 << bithalf) - 1;

    const column = toCol & BigInt(bitmask);
    console.log('column', column.toString(2).padStart(bithalf,'0'))

    if( column <= BigInt(2)**BigInt(bithalf)-BigInt(1) ){   // double checking if column is 1/2 of length of number, using the binary length

        if( debug == true ){
            console.log(`==================================`);
            console.log(`reCol DEBUG: column WITHIN bounds`);
            console.log(`==================================`);
        }
        return column;

    }else {

        console.log(`==================================`);
        console.log(`reCol DEBUG: column OUTSIDE bounds`);
        console.log(`==================================`);
        console.log(`reCol DEBUG: Original: ${bin.toString(2)}`);
        console.log(`reCol DEBUG: theMask: ${bitmask.toString(2)}`);
        console.log(`reCol DEBUG: appMask: ${column.toString(2).padStart(bithalf,'0')} `);
        console.log(`reCol DEBUG: ${typeof bin}, ${bin}`);   

    };
};


// function reTileID(row=0, col=0){    // Takes in rowId x colId to return a BigInt key ofr [rowIdcolId]



//     return BigInt(0b0111)     // Should return a BigInt that ix RxC where the length of R and C in string are equivalent
// }

function genMap(){           // No Parameter

    return 'Returns a Map'    // Should return a Map using genId's for keys
}

function genIds(){



    return BigInt(0b0111)     // Should return a BigInt that is a number
}


function genObj(){           // shoudl take BigInt as a parameter

    return 'Returns an object with an id'    // Should return a Map using genId's for keys
}



export { reRow, reCol };