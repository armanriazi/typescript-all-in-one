/// Line 10: We start with a reduceRight on our array of functions. First up is coolName, which receives the sam parameter as the preliminary result. The function is called and adds a cool suffix to the name. Next, our reduce starts working on the yelling function. It, too, receives a preliminary result, which is the name with the suffix that was just added. It returns this parameter in uppercase.
const compose = (...fns) => (...args) => {
    return fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];
};

const coolName = (name) => `${name} a.k.a. King`;
const yelling = (name) => name.toUpperCase();

const yellingACoolerName = compose(yelling, coolName);

const result = yellingACoolerName('sam');

console.log(result);

