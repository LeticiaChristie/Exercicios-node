const url = require('url')
const address = ("http://www.newtest.com.br/catalogo?produtos=bed")
const parsedUrl = new url.URL(address)

console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.search);
console.log(parsedUrl.searchParams);
console.log(parsedUrl.searchParams.get('produtos'));