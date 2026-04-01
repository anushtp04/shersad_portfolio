const http = require('http');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  const rects = await page.evaluate(() => {
    const getRect = (sel) => {
      const el = document.querySelector(sel);
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { top: r.top, bottom: r.bottom, height: r.height, zIndex: window.getComputedStyle(el).zIndex };
    };
    return {
      hero: getRect('.hero'),
      title: getRect('.hero-title'),
      img: getRect('.hero-img-wrapper'),
      mountain: getRect('.mountain-divider'),
      textBlock: getRect('.hero-text-block')
    };
  });
  console.log(JSON.stringify(rects, null, 2));
  await browser.close();
})();
