var reverse = function (x) {
    // first lets check the negative value
    // if (x < 0) {
    //     return false;
    // }
    //copy the original value
   // let nCopy = x;
    let reverse = 0;

    // run the loop now
    while (x > 0) {
        let reminder = x % 10;
        reverse = (10 * reverse) + reminder;
        x = Math.floor(x / 10);
    }
    //    if(reverse === nCopy){
    //     return true;
    //    }else{
    //     return false;
    //    }
    return (reverse);
};
console.log(reverse(121));
console.log(reverse(123456789));