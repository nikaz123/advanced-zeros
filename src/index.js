module.exports = function getZerosCount(number, base) {

    console.log(number);


    let countZero = 0;

    let j = 1;
    let i = 2;
    let a = new Array();
    do
    {
        if (base % i === 0)
        {
            a[j] = i;
            j++;
            base = base / i;
        }
        else
        {i++;  }
    }
    while (i < base);
    a[j] = i;

    console.log(a[j]);

    let step=0;

    for (let i=1; i<a.length; i++) {
        if (a[i]===a[j] ) step = step + a[j];

    }
    console.log(step);

    let k=a[j];
let track=0;
     for (let i = step; i <= number; i = i + step) {

        let j = 0;

       let ii = i;

        do {
     if (ii % k === 0)
          {

              j++;
                ii = ii / k;
            }
       //     console.log("wow" + ii);
       }

         while (ii % k === 0);
       countZero = countZero + j;
       //  console.log(countZero);
track=i;
   }

    console.log(track);
    return (countZero);






    // your implementation
}