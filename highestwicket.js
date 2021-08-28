let  Cheerio  = require("cheerio");
let request= require("request");

request('https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard',cb);
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
    let bowlers = searchtool(".table.bowler tbody tr");
    let max=-1;
    let playername=-1;
    for(let i=0;i<bowlers.length;i++)
    {
        let cols=searchtool (bowlers[i]).find("td").text();
        console.log(cols);
        let name=searchtool(cols[0]).text();
        let wicket=searchtool(cols[4]).text();
        let highest=wicket;
        if(max<highest)
        {
        
            max=highest;
            playername=name;


        }
       


    }//console.log( playername+ "   " +max);
    
}