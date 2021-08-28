let  Cheerio  = require("cheerio");
let request= require("request");

request('https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/ball-by-ball-commentary',cb);
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
    let searchTool= Cheerio.load(html);
    let elemrepArr = searchTool(".match-comment-wrapper .match-comment-long-text");
    let modulename =searchTool (elemrepArr[0]).text();
    console.log("modulenae",modulename);
}