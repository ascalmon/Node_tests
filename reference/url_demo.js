const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serialized url

console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);
console.log(myUrl.hostname);

// Path name
console.log(myUrl.pathname);

// Serialized Query
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

//Loop searchParams
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
