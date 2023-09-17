const generateRandomLyric = function() {
    const quotes = [ {
        quote: "There's a million things I haven't done, but just you wait" ,
        author: "Hamilton"
    } ,
    {
        quote: "We're all damaged, we're all frightened, we're all freaks- and that's alright" , 
        author: "Heathers"
    } ,
{
    quote: "I've got to be where my spirit can run free, got to find my corner of the sky" ,
    author: "Pippin"
} , 
{
    quote: "Takes a little patience, takes a little time, a little perseverance, and a little uphill climb" ,
    author: "Dear Evan Hansen"
}, 
{
    quote: "Unlimited, my future is unlimited" , 
    author: "Wicke"
}, 
{
    quote:  "Courage cannot erase our fear, courage is when we face our fear" , 
    author: "Newsies" 
}, 
{
    quote: "Anything you do, let it come from you. Then it will be new. Give us more to see" ,
    author: "Sunday in the Park with George"
}, 
{
    quote: "See how the world could be, in spite of the way that it is" ,
    author: "Hadestown"
}, 
{
    quote: "Don't stress. Relax. Let life roll off your back. Except for death and maybe taxes, everything in life is only for now" , 
    author: "Avenu Q"
}];
console.log("Hi");
};

let arrayIndex = Math.floor(Math.random() * lyrics.length);
    document.getElementById("quotes").innerHTML = lyrics[arrayIndex].quote;
    document.getElementById("author").innerHTML = lyrics[arrayIndex].author;


window.onload = function() {
    generateRandomLyric(); 
    document.getElementById("generate").addEventListener('click', generateRandomLyric);
}


