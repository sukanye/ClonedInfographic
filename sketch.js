//Kanye: Me vs We
var meWords = ["I","me","Kanye","West"]
var weWords = ["you","we","youre","they", "he","she","them"]

var albumNames= function(aDiscography) {
  //lists album names
  for (var i = 0; i < aDiscography.length; i++){
    for (var j = 0; j < aDiscography[i].songs.length; j++) {
      text(aDiscography[i].name, aDiscography[i].albumLoc[0],aDiscography[i].albumLoc[1],600,600);
    
    }
  }
}


// Splits a string into an array of words
var splitWords = function(aStringOfLyrics) {
  return aStringOfLyrics.toLowerCase().split(" ");
}

// Takes in an array of words and gives frequency
var tallyWordsUp = function(anArrayOfWords) {
  var wordObject = {};

  // Initalize values in object
  for (word in anArrayOfWords) {
    wordObject[anArrayOfWords[word]] = 0
  }

  // Tally up occurences
  for (word in anArrayOfWords) {
    wordObject[anArrayOfWords[word]] += 1
  }
  return wordObject;
}

var tallyWordInSong = function(aStringOfLyrics) {
  return tallyWordsUp(splitWords(aStringOfLyrics))
}

// sample loop to see how many times Kanye says a word in an "album"
var albumWordCount = function(anAlbum, aWord) {
  var wordCount = 0;

  for (var i = 0; i < anAlbum.length; i++) {
    wordCount += tallyWordInSong(anAlbum[i].lyrics)[aWord] || 0;
  }
  return wordCount;
}

// Example accessing songs in first album:
// console.log(discography[0].name);
// console.log('  mentions of "you": ', albumWordCount(discography[0].songs, "we"));
// console.log('  mentions of "me": ', albumWordCount(discography[0].songs, "me"));

// Another sample to see this in every album
var countsInAllAlbums = function(aDiscography) {
  for (var i = 0; i < aDiscography.length; i++) {
    console.log(aDiscography[i].name)
    console.log('  mentions of "we": ', albumWordCount(aDiscography[i].songs, "we"));
    console.log('  mentions of "me": ', albumWordCount(aDiscography[i].songs, "me"));
  }
}

countsInAllAlbums(discography);

var hoverOnAlbums = function(aDiscography) {
    for (var i = 0; i < aDiscography.length; i++){
        if((mouseX <= (aDiscography[i].albumLoc[0] + 100) 
        && (mouseX >= (aDiscography[i].albumLoc[0] - 15))) 
        && ((mouseY <= (aDiscography[i].albumLoc[1] +15)) 
        && (mouseY >= (aDiscography[i].albumLoc[1]-15)))) {
          fill(51)
          noStroke();
          rect(100, 100, 900, 400, 20)
          fill('hotpink')
          textSize(200);
          text(albumWordCount(aDiscography[i].songs, "me"), 240, 350);
          text(albumWordCount(aDiscography[i].songs, "we"), 690, 350);
        }
    }
}


function setup() {
  createCanvas(1120,600);
  background(51);
  fill('hotpink');
  textSize(25);
  textFont("Oswald");
  text("Kanye: Me vs We", 40, 50);
  textSize(12);
  albumNames(discography);
  
}

function draw() {
  hoverOnAlbums(discography);
}