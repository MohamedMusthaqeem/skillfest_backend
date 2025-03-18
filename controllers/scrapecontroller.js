const axios = require("axios");
const puppeteer = require("puppeteer");
var date = new Date();
date.setDate(date.getDate() + 15);
// const scrapeWebsite1 = async () => {
//   try {
//     const browser = await puppeteer.launch({ headless: true });
//     const page = await browser.newPage();
//     await page.goto("https://unstop.com", { waitUntil: "networkidle2" });

//     const events = await page.evaluate(() => {
//       return Array.from(document.querySelectorAll("android chrome")).map(
//         (event) => ({
//           title: event.querySelector("events")?.innerText,
//           date: event.querySelector(date.toISOString().slice(0, 10))?.innerText,
//           location: event.querySelector("Chennai")?.innerText,
//           link: event.querySelector("a")?.href,
//           source: "Unstop",
//         })
//       );
//     });

//     await browser.close();
//     return events;
//   } catch (error) {
//     console.error("Error scraping Unstop:", error);
//     return [];
//   }
// };
// const scrapeWebsite1 = async () => {
//   try {
//     const browser = await puppeteer.launch({ headless: true });
//     const page = await browser.newPage();
//     await page.goto(
//       "https://unstop.com/hackathons?oppstatus=open&domain=2&course=6&specialization=Computer%20Science%20and%20Engineering&usertype=students&passingOutYear=2025&quickApply=true",
//       { waitUntil: "networkidle2" }
//     );

//     // Get the Page Title
//     const title = await page.title();

//     // Get the Full Page HTML (optional)
//     const html = await page.content();

//     await browser.close();

//     return { title, html };
//   } catch (error) {
//     console.error("❌ Error scraping:", error);
//     return {};
//   }
// };
// // 📌 Function to Scrape Website 2 (Dynamic JavaScript-based Site - Puppeteer)
// const scrapeWebsite2 = async () => {
//     try {
//         const browser = await puppeteer.launch({ headless: true });
//         const page = await browser.newPage();
//         await page.goto("https://example-event-site2.com", { waitUntil: "networkidle2" });

//         const events = await page.evaluate(() => {
//             return Array.from(document.querySelectorAll(".event-card")).map(event => ({
//                 title: event.querySelector(".event-title")?.innerText,
//                 location: event.querySelector(".event-location")?.innerText,
//                 date: event.querySelector(".event-date")?.innerText,
//                 link: event.querySelector("a")?.href,
//                 source: "Website 2"
//             }));
//         });

//         await browser.close();
//         return events;
//     } catch (error) {
//         console.error("Error scraping Website 2:", error);
//         return [];
//     }
// };
// const scrapeall = async (req, res) => {
//   try {
//     const [events1] = await Promise.all([scrapeWebsite1()]);
//     res.json([...events1]); // Merge results
//   } catch (error) {
//     res.status(500).json({ error: "Error scraping data" });
//   }
// };
const scrapeall = async (req, res) => {
  try {
    const repsonse = await axios.get(
      "https://unstop.com/api/public/opportunity/search-result?opportunity=hackathons&per_page=100&oppstatus=open&domain=2&course=6&specialization=Computer%20Science%20and%20Engineering&usertype=students&passingOutYear=2025&quickApply=true&page=1"
    );
    res.status(200).json(repsonse.data);
  } catch (error) {
    res.status(500).json({ error: "Error scraping data" });
  }
};

module.exports = {
  scrapeall,
};
