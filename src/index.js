module.exports = function getZerosCount(number, base) {
    console.log(number);

    let countZero = 0;
    let j = 1;
    let i = 2;
    let powers = [];
    let results = [];

    let a = new Array();
    do {
        if (base % i == 0) {
            if (typeof powers[i] === 'undefined' && (i != base)) powers[i] = 1
            else if (i != base) powers[i] += 1;
            a[j] = i;
            if (i != base) j++;
            base = base / i;
        }
        else {
            i++;
        }
    }
    while (i < base);
    a[j] = i;
    if (typeof powers[i] === 'undefined') powers[i] = 1
    else powers[i] += 1;


    bbase = 0;
    for (let i = 1; i < a.length; i++) {
        if (a[i] === a[j]) {
            bbase++
        };

    }

    for (dapower in powers) {
        dapower = Number(dapower)
        let a = Math.floor(getPower(dapower, number, 1) / powers[dapower])
        results.push(a)
    }

    countZero = Math.min.apply(null, results);
    return (countZero);


    function getPower(pk, pnumber, debug=0) {
        let cz = 0;
        let i = 0;

        for (i = pk; i <= pnumber; i = i + pk) {
            let ii = i;
            let j = 0;

            do {

                if (ii % pk == 0) {

                    ii = ii / pk;
                    j++;
                }
            }
            while (ii % pk == 0);
            cz = cz + j;
             }

        return cz;
    }

}

