
const cache = {}
const memo = (key,value) => {
  cache[key] = value;

  console.log(cache);
}

memo('name', 'tiger');




