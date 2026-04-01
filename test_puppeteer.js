const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  const rects = await page.evaluate(() => {
    return {
      hero: document.querySelector('.hero').getBoundingClientRect(),
      title: document.querySelector('.hero-title').getBoundingClientRect(),
      img: document.querySelector('.hero-img-wrapper').getBoundingClientRect(),
      mountain: document.querySelector('.mountain-divider').getBoundingClientRect(),
      textBlock: document.querySelector('.hero-text-block').getBoundingClientRect()
    };
  });
  console.log(JSON.stringify(rects, null, 2));
  await browser.close();
})();
