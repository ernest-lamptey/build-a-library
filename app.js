class Media {
    constructor(title){
      this._title = title
      this._isCheckedOut = false
      this._ratings = []
    }
    get title() {
      return this._title
    }
    get isCheckedOut() {
      return this._isCheckedOut
    }
    get ratings() {
      return this._ratings
    }
    set isCheckOut(state){
      this._isCheckedOut = state;
    }
    toggleCheckOutStatus(){
      if (this._isCheckedOut === true){
        this._isCheckedOut = false;
      } else {
        this._isCheckedOut = true;
      }
    }
    getAverageRating(){
      let sum = this._ratings.reduce((a, b) => a + b)
      let avg = sum / this._ratings.length
      return avg
    }
    addRating(rating){
      if(rating >= 1 && rating < 6){
        this._ratings.push(rating);
      } else {
        console.log('Error! Enter a rating in the range of 1 - 5')
      }  
    }
  }
  
  class Book extends Media {
    constructor(title, author, pages){
      super(title)
      this._author = author
      this._pages = pages
    }
    get author(){
      return this._author
    }
    get pages(){
      return this._pages
    }
  }
  
  class Movie extends Media {
    constructor(title, director, runTime){
      super(title)
      this._director = director
      this._runTime = runTime
      this._movieCast = []
    }
    get director(){
      return this._director
    }
    get runTime(){
      return this._runTime
    }
    get movieCast(){
      return this._movieCast
    }
    set movieCast(cast){
      this._movieCast.push(cast)
    }
  }
  
  class CD extends Media {
    constructor(title, artist, songs){
      super(title)
      this._artist = artist
      this._songs = songs
      this._songTitles = []
    }
    get artist(){
      return this._artist
    }
    get songs(){
      return this._songs
    }
    get songTitle(){
      return this._songTitle
    }
    set songTitle(song){
      this._songTitle.push(song)
    }
    
    shuffle () {
      let shuffledSongs = [];
      let n = this._songs.length;
      console.log(n)
      let i;
      while (n > 0) {
        // I don't really understand why I can use "n" in the code below and I have to use "this._songs.length"
        // The program hangs up when I use "Math.random * n" but "Math.random() * this._songs.length" works fine
        
        // so I figured "n" would cause problems and we need to use the original length of the array to open us up
        // to the possibly of finding all the elements in the array
        i = Math.floor(Math.random() * this._songs.length)
        console.log(this._songs.length, n)
        if (i in this._songs) {
          shuffledSongs.push(this._songs[i]);
          delete this._songs[i];
          n--;
        }
      }
      return shuffledSongs;
    } 
  }
  
  
  const historyOfEverything = new Book('A short History of Nearly Everything', 'Bill Bryson', 544);
  
  historyOfEverything.toggleCheckOutStatus();
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  
  const speed = new Movie('Speed', 'Jan de Bont', 116);
  speed.toggleCheckOutStatus();
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  
  const noTribe = new CD('Amen', 'No Tribe', ['Onyame ye', 'Praise Jam', 'Daniel', 'Mo ne me', 'Fa ma Awurade'])
  //console.log(historyOfEverything.isCheckedOut);
  //console.log(historyOfEverything.getAverageRating());
  //console.log(speed.isCheckedOut);
  //console.log(speed.getAverageRating())
  //console.log(noTribe.songs)
  //console.log(noTribe.shuffle());
  
  
  