$( document ).ready(function() {
	generate();

  function generate(){
    var quotes = ["What really knocks me out is a book that, when you're all done reading it, you wish the author that wrote it was a terrific friend of yours and you could call him up on the phone whenever you felt like it. That doesn't happen much, though.@J.D. Salinger, The Catcher in the Rye", "Be the change you wanna see in the world.@Mahatma Gandhi", "Because it's there.@George Mallory on climbing mountains","Footsteps always follow us, whenever it is snowing.  They always show us where we've been, but never where we're going.@Winnie the Pooh's A-Z","For I know the plans that I have for you.@The Lord, Jer 29:11","The only way to climb properly is to realize that just getting up a route is nothing, the way it is done is everything.@Royal Robbins","Small minds discuss people.  Average minds discuss events.  Great minds discuss ideas.@Unkown","The significant problems we face cannot be solved at the same level of thinking we were at when we created them.@Albert Einstein","We must not cease from exploration and the end of all our exploring will be to arrive where we began and to know the place for the first time.@T S Eliot","One man asked another on the death of a mutual friend, 'How much did he leave?' His friend responded, 'He left it all.'@Proverb","It is more noble to give yourself completely to one individual than to labor diligently for the salvation of the masses.@Dag Hammarskjold, Sec. Gen. of the UN","Maps are a way of organizing wonder.@Edward Tufte","I have decided to make my life my argument.@Albert Schweitzer","Now it's a sqirt mecca for mystery artist, but back then it was just magic.@Jim Snyder on Kayaking","Knowledge keeps about as well as fish.@Alfred North Whitehead","It all began, I said, when I decided that some experts don't really know enough to make a pronouncement of doom on a human being.  And I said I hoped they would be careful about what they said to others; they might be believed and that coud be the beginning of the end.@Norman Cousins, Anatomy of an Illness","Do not go gentle into that good night.  Rage, rage against the dying of the light.@Dylan Thomas","For you will look smart and feel ignorant and the patient will not know which day it is for you and you will pretend to be smart out of ignorance.@John Stone"] ;
   
	var	randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
   var quoteAuthor=randomQuote.split("@");
		$('.saying').text(quoteAuthor[0]);
    $('.author').text(quoteAuthor[1]);
  }
  
  
$(".button").on( "click", function() {
    generate();
});  
  
});
