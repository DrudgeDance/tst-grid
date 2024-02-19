//  Grid Format:   [N x N]  [row x column]


//  Method to [re]turn row from BigInt
//  left 1/2 bits are row
function reRow(BigInt=0){


}


//  Method to [re]turn column from BigInt
//  Right 1/2 bits are column
function reCol(BigIn=0){

    let bin = 0b1111
    const bitlength = bin.toString(2).length
    const rightHalf=0;
    const leftHalf=0;
    bin+=2
    let half = Math.floor(bitlength/2);
    let mask = (1 << half) - 1
    console.log(`Mask: ${mask.toString(2)}`)
    console.log( (bin & mask) )

    console.log(typeof bin, bin)
    
}



export { reRow, reCol };