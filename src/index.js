

module.exports = function getZerosCount(number, base) {
    let result = {};
    let maxPowers={};
    let min=0;
    OpenNum(base);

    function OpenNum(base) {
        let i = 2;
        let arr = [];
        while (i <= base) {
            if (base % i === 0) {
                arr.push(i);
                base = base / i;
            }
            else i++;
        }

        for (let k = 0; k < arr.length; k++) {
            result[arr[k]] = 0;
            maxPowers[arr[k]]=0;
        }

        for (let k = 0; k < arr.length; k++) {
            result[arr[k]] += 1;
        }
        let arrayOfPowers=[];
        for (let key in maxPowers) {
            maxPowers[key]=Math.floor(maxPowerOf(key,number)/result[key]);
            arrayOfPowers.push(maxPowers[key]);
        };
        min=Math.min.apply(null, arrayOfPowers);
    };
    function maxPowerOf(p, number) {
        let k = 0;
        let powerOfP = 1;
        while (true) {
            powerOfP =  powerOfP*p;
            let addend = Math.floor(number / powerOfP);
            if (addend === 0)
                return Math.floor(k);
            k += addend;
        }
    };
    return min;
}