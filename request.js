let  Cheerio  = require("cheerio");
let request= require("request");
console.log("before");
request('https://www.google.com',cb);
function cb(error,response,html){
    if(error)
    {
        console.log(error);
    }
    else if (response.statuscode==404)
    {
        console.log("page not found");
    }
    else
    {
        //console.log(html);
        dataExtracter(html);
      
    }
}
function dataExtracter(html)
{
    let searchtool= Cheerio.load(html);
    let elemrep =searchtool("script");
    let modulename =elemrep.length;
    console.log("modulenae",modulename);
}