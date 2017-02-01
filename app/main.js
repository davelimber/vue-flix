(function () {

  var fs = new FlixService()


  new Vue({
    el: '#vue-flix',
    data: function () {
      return {
        category: 'actor',
        query: '',
        movies: [],
        details: {},
        myMovies: [],
        showDetails: false,
      }
    },
    methods: {
      search: function () {
        if (this.category == 'title') {
          fs.getFlix(this.category, this.query, this.setDetails)
          return
        }
        fs.getFlix(this.category, this.query, this.setMovies)
      },
      setMovies: function (movies) {
        this.movies = movies
      },
      reset: function () {
        this.query = ''
        this.category = '',
          this.movies = [],
          this.myMovies = []
      },
      setDetails: function (movie) {
        this.details = movie
      },
      addMyMovie(movie) {
        debugger
        this.myMovies.push(movie)
        console.log(this.myMovies)
        // this.clearDetails()
      },
      removeMyMovie(movie) {
        for (var index = 0; index < this.myMovies.length; index++) {
          if (this.myMovies[index] == movie) {
            this.myMovies.splice(index, 1)
          }
        }
      },
      clearDetails: function () {
        // debugger
        this.details = {}
      }
    }
  })




} ())