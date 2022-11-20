//This is a random Quote generator from the movie Idiocracy.

var quotes = [
    "If you have one bucket that contains 2 gallons and another bucket that contains 7 gallons, how many buckets do you have?",
    "Go away, Im BAITIN! - Frito",
    "A pimps love is very different from that of a square. - Collins",
    "You are an unfit mother. Your children will be placed in the custody of Carls Jr. -Carls Jr. Machine",
    "You mean like in the toilet? -Various",
    "If you have one bucket that contains 2 gallons and another bucket that contains 7 gallons, how many buckets do you have? - IPAA Machine",
    "Welcome to Costco. I love you. - Costco Employee",
    "Because I like money. - Frito",
    "You think Einstein walked around thinkin everyone was a bunch of dumb shits? - Rita",
    "Yeah… hadnt thought of that. - Joe",
    "For the smartest guy in the world youre really dumb sometimes. - Frito",

]


function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
}
