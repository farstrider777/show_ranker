// is there a tmdb database API we can access

//make a tv show object
//  1..name of show
//     popularity
//     runtime
//     genre
//     actors
//     director
//     writers

//    how do we rank pop vs how much randomness
//    can have it be sliding scale depending on number of rankings done

//    address plan for saving user data / profiles

//import { token } from "./token"

//url: `https://api.themoviedb.org/3/movie/551?api_key=c1590ac6ed33444a3c6284a9319516fe`,


 var info = [];
 var i = 1

function fluff(data){
  //console.log(data)
//  console.log(fun)
//  console.log(won)
//  console.log(data.results)


   for(var count = 0; count < data.results.length; count++){
     info.push(data.results[count])
     //console.log("indatapush")
  }
  //  for(var count = 0; count < info.length; count++){
  //   console.log(info[count].name);
  //  }
//
// // console.log(info[1])
   i++;
  if(i < 35){
 //  // console.log(i);
 //
   getData(i).then(fluff)
 }else{




var choice = 0;
if (Math.random() < .75){
  choice = Math.floor(Math.random()/4*680)
  //console.log(choice)
  console.log(choice)
  console.log(info[choice].original_name)
}else{

  choice = Math.floor(Math.random()/2*680)
  console.log(choice)
  console.log(info[choice].original_name)
}

var choice2;
if (Math.random() < .25){
  choice2 = Math.floor(Math.random()/4*680)
  console.log(choice2)
  console.log(info[choice2].original_name)
}else if(Math.random() > .33){
  choice2 = Math.floor(((Math.random()/2*680)+340))
  //console.log("ruhere")
  console.log(choice2)
  console.log(info[choice2].original_name)
}else{

  choice2 = Math.floor(Math.random()/2*680)
  console.log(choice2)
  console.log(info[choice2].original_name)
}

}

  //  if(Math.random() < .75){
  //    console.log(Math.floor(680 / (Math.random / 4)));
  //  }
}

//var search = "fight"

//&language=en-US
//vote_average.gte

function getData (pageNum) {
  //console.log(pageNum);
  return $.ajax({
    //  url: `https://api.themoviedb.org/3/search/keyword?api_key=c1590ac6ed33444a3c6284a9319516fe&page=1`,
    //  url: `https://api.themoviedb.org/3/tv/1?api_key=c1590ac6ed33444a3c6284a9319516fe`,
    //  url: `https://api.themoviedb.org/3/search/tv?api_key=c1590ac6ed33444a3c6284a9319516fe&query=its+always+sunny`,
       url: `https://api.themoviedb.org/3/discover/tv?api_key=${token}&vote_count.gte=10&page=${pageNum}`,
       language: "en-US",                                //     c1590ac6ed33444a3c6284a9319516fe
       //page: "5",            //`${page}`     `${pageNum}`
       sort_by: "vote_average.asc",
       timezone: "America/New_York",
       include_null_first_air_dates: "false",
    //  url: `https://api.themoviedb.org/3/movie/550?api_key={api_key}&callback=test`,
      dataType: 'json',
  //   data: {
  //      q: search
  //    },
    //  success: test
  });
  console.log(pageNum);
}

//GET// https://api.themoviedb.org/3/search/company?api_key=c1590ac6ed33444a3c6284a9319516fe&page=1     ${token}
//https://api.themoviedb.org/3/search/company?api_key=<<api_key>>&page=1            sort_by=vote_average.asc&
//https://api.themoviedb.org/3/search/keyword?api_key=<<api_key>>&page=1            &timezone=America/New_York
//&include_null_first_air_dates=false

getData(1).then(fluff);

//console.log(token)
