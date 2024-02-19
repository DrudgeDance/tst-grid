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
    
    const outRow = toRow >> BigInt(bitshift);

    console.log('row',outRow.toString(2).padStart(bitshift,'0'))

    if( outRow <= BigInt(2)**BigInt(bitshift)-BigInt(1) ){   // double checking if column is 1/2 of length of number, using the binary length

        if( debug == true ){
            console.log(`==================================`);
            console.log(`reRow DEBUG: row WITHIN bounds`);
            console.log(`==================================`);
        }
        return outRow;

    }else {

        console.log(`==================================`);
        console.log(`reRow DEBUG: row OUTSIDE bounds`);
        console.log(`==================================`);
        console.log(`reRow DEBUG: Original: ${toRow.toString(2)}`);
        console.log(`reRow DEBUG: theShift: ${bitShift}`);
        console.log(`reRow DEBUG: appShift: ${outRow.toString(2).padStart(bitshift,'0')} `);
        console.log(`reRow DEBUG: ${typeof toRow}, ${toRow}`);   

    };

}


//  Method to [re]turn column from BigInt
//  Right 1/2 bits are column
function reCol(BigIn=0, debug = true){

    const rightHalf=0;                           // connect to Parameters later
    const toCol = BigInt(0b110101101011); 
    const binNo = toCol.toString(2);             // connect to Parameters later

    const bitlength = toCol.toString(2).length;  // dynamic bitmask generation for 1/2 of length of parameter (future)
    const bithalf = Math.floor(bitlength/2);
    const bitmask = (1 << bithalf) - 1;

    const outCol = toCol & BigInt(bitmask);
    console.log('column', column.toString(2).padStart(bithalf,'0'))

    if( outCol <= BigInt(2)**BigInt(bithalf)-BigInt(1) ){   // double checking if column is 1/2 of length of number, using the binary length

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
        console.log(`reCol DEBUG: appMask: ${outCol.toString(2).padStart(bithalf,'0')} `);
        console.log(`reCol DEBUG: ${typeof bin}, ${bin}`);   

    };
};


// function reTileID(row=0, col=0){    // Takes in rowId x colId to return a BigInt key ofr [rowIdcolId]



//     return BigInt(0b0111)     // Should return a BigInt that ix RxC where the length of R and C in string are equivalent
// }



// N should be the parameter - for size of grid
    // For 2D, N bits should be (XbyY):
    //  Square:  NxN
    //  Rectangular: (N-a)x(N-b)
// For 2D w/ a heightmap (3D): 
    //  Rectangular: (N-a)x(N-b)x(N-c) where a is X, b is Y, and C is heightmap
function genMap(N, ... args){
    
    const inSum = args.recuce((accum, currVal)=>(accum+currVal))
    if ( !(N === inSum)){
        return 'Error: genMap did not proceed with tile generation (N != sum of args).'
    } else if ( !(N%args.length === 0) ){
        return 'Error: genMap not divisible by number of args.  Space usage not maximized.'
    }

    // When args === 2, then create an X by Y tilemap



    // When args > 2, then create an X by Y by Z (height) tilemap




    return 'Returns a Map'    // Should return a Map using genId's for keys
}



function genIds(){



    return BigInt(0b0111)     // Should return a BigInt that is a number
}


function genObj(){           // should take BigInt as a parameter

    return 'Returns an object with an id'    // Should return a Map using genId's for keys
}



export { reRow, reCol };