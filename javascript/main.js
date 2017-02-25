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

var tvShow = {name: "friends"};

var info = []

function fluff(data, fun, won){
  console.log(data)
  console.log(fun)
  console.log(won)
}

var search = "fight"

//&language=en-US
//vote_average.gte

function getData (test) {
   info = $.ajax({
    //  url: `https://api.themoviedb.org/3/search/keyword?api_key=c1590ac6ed33444a3c6284a9319516fe&page=1`,
    //  url: `https://api.themoviedb.org/3/tv/1?api_key=c1590ac6ed33444a3c6284a9319516fe`,
    //  url: `https://api.themoviedb.org/3/search/tv?api_key=c1590ac6ed33444a3c6284a9319516fe&query=better+things`,
       url: `https://api.themoviedb.org/3/discover/tv?api_key=c1590ac6ed33444a3c6284a9319516fe&sort_by=vote_average.asc&page=1&timezone=America/New_York&include_null_first_air_dates=false&vote_average.gte=6&vote_count.gte=10`,
       language: "en-US",

    //  url: `https://api.themoviedb.org/3/movie/550?api_key={api_key}&callback=test`,
      dataType: 'json',
  //   data: {
  //      q: search
  //    },
      success: test
  });
}

//GET// https://api.themoviedb.org/3/search/company?api_key=c1590ac6ed33444a3c6284a9319516fe&page=1
//https://api.themoviedb.org/3/search/company?api_key=<<api_key>>&page=1
//https://api.themoviedb.org/3/search/keyword?api_key=<<api_key>>&page=1


getData(fluff);

console.log(token)
