const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const btn = document.getElementById("btn");
const tweet = document.getElementById("tweet");
let realData = "";
let quotesData = "";

const getNewQuotes = () => {
  let random = Math.floor(Math.random() * 1000);
  quotesData = realData[random].text;
  quotes.innerHTML = realData[random].text;
  author.innerHTML =
    realData[random].author !== null ? realData[random].author : "unknown";
};
const getQuotes = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    let data = await fetch(api);
    realData = await data.json();
    getNewQuotes();
  } catch (error) {
    console.log(error);
  }
};

tweet.addEventListener("click", () => {
  let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData}`;
  window.open(tweetPost);
});
btn.addEventListener("click", () => {
  //getQuotes();
  getNewQuotes();
});

getQuotes();
