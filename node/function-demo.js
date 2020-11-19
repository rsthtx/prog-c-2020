let a = 3

let f = function (x) {
  return x * x;
}

let g = function (fn, x) {
  return fn(x)
};

let h = function (x) {
  return g(f, x)
}

let b = f(a)
let c = h(a)

console.log(b)
console.log(c)
