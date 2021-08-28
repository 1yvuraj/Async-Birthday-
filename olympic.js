let  Cheerio  = require("cheerio");
let request= require("request");
let fs=require("fs");
let url="https://olympics.com/tokyo-2020/olympic-games/en/results/all-sports/medal-standings.htm";
request(url,olympic);

function olympic(error,response,html){
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
    let ranks = searchtool("#medal-standing.table-responsive tbody tr");
   
  
    for(let i=0;i<ranks.length;i++)
    {
        let cols=searchtool(ranks[i]).find("td").text();
       
       

       console.log(".....................");
       console.log(cols);


    }
    
}