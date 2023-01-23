const  url=require('url');
const adr= "http://localhost:8000/default.html?year=2021&month=Maaraskuuta";
const q=url.parse(adr,true); //q returns an object.
console.log(q.host);
console.log(q.pathname)
console.log(q.search)
const qdata=q.query;
console.log(qdata.month)