const Page = require('puppeteer/lib/Page');

Page.prototype.login() = async () => {
  await page.setCookie({name: 'session', value: session});
  await page.setCookie({name: 'session.sig', value: sig});
  await page.goto('localhost:3000');
  await page.waitFor('a[href="/auth/logout"]');

  const text = await page.$eval('a[href="/auth/logout"]', el => el.innerHTML);
  console.log(text);
  expect(text).toEqual('Logout');

  await page.click('a[href="/auth/logout"]');


  
};