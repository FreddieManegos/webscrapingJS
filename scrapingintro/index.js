const request = require("request-promise");
const fs = require("fs");
const cheerio = require("cheerio");

// const url = "https://edelgardescans.com/home";
const url = "https://reactnativetutorial.net/css-selectors/";

async function main() {
  const html = await request.get(
   url
  );
  fs.writeFileSync("./test.html", html);

  const $ = await cheerio.load(html);
  const theText = $("h1").text()
  console.log(theText);
}

main();
