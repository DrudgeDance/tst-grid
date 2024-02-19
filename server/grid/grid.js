//  Grid Format:   [N x N]  [row x column]


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
    const half = Math.floor(bitlength/2);
    const mask = (1 << half) - 1;
    const column = BigInt(bin & mask);



    if(debug === true){  
        console.log(`DEBUG reCol: Original: ${bin.toString(2)}`)
        console.log(`DEBUG reCol: theMask: ${mask.toString(2)}`)
        console.log(`DEBUG reCol: appMask: ${column.toString(2)} `)
        console.log(`DEBUG reCol: ${typeof bin}, ${bin}`)
    }
}



export { reRow, reCol };