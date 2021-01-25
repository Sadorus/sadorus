const PercyScript = require('@percy/script');

  PercyScript.run(async (page, percySnapshot) => {
    await page.goto('https://sadorus.github.io/');
    await percySnapshot('Homepage',  { widths: [375, 768, 1440]});
  });