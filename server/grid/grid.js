/*  

   Grid Format:  [N x N]  [row x column]
          Note:  N current can only be even (E x E)

*/


//  Method to [re]turn row from BigInt
//  left 1/2 bits are row
function reRow(BigInt=0){

    const leftHalf=0;
}


//  Method to [re]turn column from BigInt
//  Right 1/2 bits are column
function reCol(BigIn=0, debug = true){

    const rightHalf=0;                        // connect to Parameters later
    
    const bin = 0b1111;                        // connect to Parameters later

    const bitlength = bin.toString(2).length;
    const bithalf = Math.floor(bitlength/2);
    const bitmask = (1 << bithalf) - 1;

    const column = BigInt(bin & bitmask); 

    if( column <= BigInt(2)**BigInt(bithalf)-BigInt(1) ){   // double checking if column is 1/2 of length of number, using the binary length

        if( debug == true ){
            console.log(`==================================`)
            console.log(`reCol DEBUG: column WITHIN bounds`)
            console.log(`==================================`)
        }
        return column;

    }else {

        console.log(`==================================`)
        console.log(`reCol DEBUG: column OUTSIDE bounds`)
        console.log(`==================================`)
        console.log(`reCol DEBUG: Original: ${bin.toString(2)}`);
        console.log(`reCol DEBUG: theMask: ${mask.toString(2)}`);
        console.log(`reCol DEBUG: appMask: ${column.toString(2)} `);
        console.log(`reCol DEBUG: ${typeof bin}, ${bin}`);   

    };
};



export { reRow, reCol };