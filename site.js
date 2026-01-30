/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    video (String): A video for the movie
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/


const vue_app = Vue.createApp({
      // This automatically imports your movies.json file and puts it into
      //   the variable: movies
      created () {
            fetch('movies.json')
                  .then(response => {
                        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                        return response.json();
                  })
                  .then(json => {
                        this.movies = json;
                  })
                  .catch(error => {
                        console.error('Error loading movies:', error);
                  });
      },
      data() {
        return {
            // This holds your movies.json data.
            /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
            title: "Layla's Top Movies",
            owner: "Layla Green",
            github: "http://www.github.com/mjslee/is219lee-p3",
            movies: [
                {
    "title": "The Pirate",
    "iscore": 6.8,
    "rating": "Not Rated",
    "runtime": "1 Hour 42 Min",
    "released": [1948, 5, 20],
    "video": { "url": "https://www.youtube.com/watch?v=c18WhJb80h4" },
    "posters": [
      "img/Poster 1 for the Pirate.jpg",
      "img/Poster 2 for the Pirate.jpg",
      "img/Poster 3 for the Pirate.jpg"
    ],
    "imdb": "https://www.imdb.com/title/tt0040694/",
    "likes": 1021,
    "dislikes": 122,
    "posterindex": 0
  },
  {
    "title": "Walt Before Mickey",
    "iscore": 5.9,
    "rating": "PG",
    "runtime": "2 Hours 0 Min",
    "released": [2015, 8, 14],
    "video": { "url": "https://www.youtube.com/watch?v=MaOZiu-hnTM" },
    "posters": ["img/Mickey1.jpg", "img/Mickey2.jpg", "img/Mickey3.jpg"],
    "imdb": "https://www.imdb.com/title/tt3154310/",
    "likes": 928,
    "dislikes": 109,
    "posterindex": 0
  },
  {
    "title": "Jersey Boys",
    "iscore": 6.8,
    "rating": "R",
    "runtime": "2 Hour 14 Min",
    "released": [2014, 6, 20],
    "video": { "url": "https://www.youtube.com/watch?v=drpTj5jJXYk&t=6s" },
    "posters": ["img/Jersey1.jpg", "img/Jersey2.jpg", "img/Jersey3.jpg"],
    "imdb": "https://www.imdb.com/title/tt1742044/",
    "likes": 855,
    "dislikes": 99,
    "posterindex": 0
  },
  {
    "title": "Saturday Night",
    "iscore": 6.9,
    "rating": "R",
    "runtime": "1 Hour 49 Min",
    "released": [2024, 8, 31],
    "video": { "url": "https://www.youtube.com/watch?v=iZ9O_tl5Npk" },
    "posters": ["img/Saturday1.jpg", "img/Saturday2.jpg", "img/Saturday3.webp"],
    "imdb": "https://www.imdb.com/title/tt27657135/",
    "likes": 812,
    "dislikes": 101,
    "posterindex": 0
  },
  {
    "title": "Some Like It Hot",
    "iscore": 8.9,
    "rating": "PG-13",
    "runtime": "2 Hour 0 Min",
    "released": [1959, 3, 19],
    "video": { "url": "https://www.youtube.com/watch?v=97TYs2YXbJw" },
    "posters": ["img/Hot1.png", "img/Hot2.jpg", "img/Hot3.jpg"],
    "imdb": "https://www.imdb.com/title/tt0053291/",
    "likes": 812,
    "dislikes": 101,
    "posterindex": 0
  },
  {
    "title": "Wayne's World",
    "iscore": 7.0,
    "rating": "PG-13",
    "runtime": "1 Hour 34 Min",
    "released": [1992, 2, 14],
    "video": { "url": "https://www.youtube.com/watch?v=thyJOnasHVE&list=RDthyJOnasHVE&start_radio=1" },
    "posters": ["img/Wayne1.jpg", "img/Wayne2.jpg", "img/Wayne3.jpg"],
    "imdb": "https://www.imdb.com/title/tt0105793/",
    "likes": 812,
    "dislikes": 101,
    "posterindex": 0
  },
  {
    "title": "Rocketman",
    "iscore": 7.3,
    "rating": "R",
    "runtime": "2 Hour 1 Min",
    "released": [2019, 5, 31],
    "video": { "url": "https://www.youtube.com/watch?v=oUNeIgFVd5g&list=RDoUNeIgFVd5g&start_radio=1" },
    "posters": ["img/Rocket1.jpg", "img/Rocket2.jpg", "img/Rocket3.jpg"],
    "imdb": "https://www.imdb.com/title/tt2066051/",
    "likes": 812,
    "dislikes": 101,
    "posterindex": 0
  },
  {
    "title": "The Man Who Shot Liberty Valance",
    "iscore": 8.1,
    "rating": "PG-13",
    "runtime": "2 Hour 3 Min",
    "released": [1962, 4, 22],
    "video": { "url": "https://www.youtube.com/watch?v=hP77V2X1Biw" },
    "posters": ["img/Ford1.jpg","img/Ford3.jpg", "img/John.jpg"],
    "imdb": "https://www.imdb.com/title/tt0056217/",
    "likes": 812,
    "dislikes": 101,
    "posterindex": 0
  },
  {
    "title": "Dr. Dolittle",
    "iscore": 5.4,
    "rating": "PG-13",
    "runtime": "1 Hour 30 Min",
    "released": [1998, 6, 26],
    "video": { "url": "https://www.youtube.com/watch?v=LWbtxG-jXMY" },
    "posters": ["img/Doolittle1.jpg", "img/Doolittle2.jpg", "img/Doolittle3.jpg"],
    "imdb": "https://www.imdb.com/title/tt0118998/",
    "likes": 812,
    "dislikes": 101,
    "posterindex": 0
  },
  {
    "title": "Pitch Perfect",
    "iscore": 7.1,
    "rating": "PG-13",
    "runtime": "1 Hour 52 Min",
    "released": [2012, 9, 28],
    "video": { "url": "https://www.youtube.com/watch?v=8dItOM6eYXY" },
    "posters": ["img/Pitch1.jpg", "img/Pitch2.avif", "img/Pitch3.jpg"],
    "imdb": "https://www.imdb.com/title/tt1981677/",
    "likes": 812,
    "dislikes": 101,
    "posterindex": 0
  }   
            ]
        }
      },
      methods: {
            /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */

            /*My Website broke and it was not loading. So I asked agent to help me, and it came up with this below*/
            getBgClass(movie) {
                  switch (movie.title) {
                        case "The Pirate": return 'pirate-bg';
                        case "Walt Before Mickey": return 'walt-bg';
                        case "Pitch Perfect": return 'pitch-bg';
                        case "The Man Who Shot Liberty Valance": return 'valance-bg';
                        case "Jersey Boys": return 'jersey-bg';
                        case "Some Like It Hot": return 'hot-bg';
                        case "Saturday Night": return 'saturday-bg';
                        case "Rocketman": return 'rocket-bg';
                        case "Wayne's World": return 'wayne-bg';
                        default: return '';
                  }
            },
            changePoster(movieIndex) {
                  if (this.movies[movieIndex].posterindex < this.movies[movieIndex].posters.length - 1) {
                        this.movies[movieIndex].posterindex++
                  } else {
                        this.movies[movieIndex].posterindex = 0
                  }     
            },

            likeMovie(index) {
              this.movies[index].likes++;
            },

            dislikeMovie(index) {
              this.movies[index].dislikes++;
            }
      }
})

vue_app.mount('#vue_app')
