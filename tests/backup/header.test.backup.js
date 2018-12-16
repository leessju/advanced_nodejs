// const puppeteer = require('puppeteer');
// const sessionFactory = require('./factories/sessionFactory');
// const userFactory = require('./factories/userFactory');

// // test('Adds two numbers', () => {
// //   const sum = 1 + 2;
// //   expect(sum).toEqual(3);
// // });

// let browser, page;

// beforeEach(async () => {
//   browser = await puppeteer.launch({
//     headless: false
//   });
//   page = await browser.newPage();
//   await page.goto('localhost:3000');
// });

// afterEach(async () => {
//   await browser.close();
// });

// test('the header has the correct text', async () => {
//   const text = await page.$eval('a.left.brand-logo', el => el.innerHTML);
//   expect(text).toEqual('Blogster');
//   await page.screenshot({path: 'example.png'});
// });

// test('clicking login starts oauth button', async () => {
//   await page.click('.right a');

//   const url = await page.url();
//   console.log(url);
//   expect(url).toMatch(/accounts\.google\.com/)
// });

// test('When signed in, shows logout button', async () => {
//   //const id = '5c1204f5c06cd960b9524543';
//   const user = await userFactory();
//   const { session, sig } = sessionFactory(user);

//   // const Buffer = require('safe-buffer').Buffer;
//   // const sessionObject = {
//   //   passport: {
//   //     user: id
//   //   }
//   // };

//   // const sessionString = Buffer.from(JSON.stringify(sessionObject)).toString('base64');

//   // const Keygrip = require('keygrip');
//   // const keys = require('../config/keys');
//   // const keygrip = new Keygrip([keys.cookieKey]);
//   // const sig = keygrip.sign('session=' + sessionString);

//   //console.log(sessionString, sig);

//   await page.setCookie({name: 'session', value: session});
//   await page.setCookie({name: 'session.sig', value: sig});
//   await page.goto('localhost:3000');
//   await page.waitFor('a[href="/auth/logout"]');

//   const text = await page.$eval('a[href="/auth/logout"]', el => el.innerHTML);
//   console.log(text);
//   expect(text).toEqual('Logout');

//   //await page.click('a[href="/auth/logout"]');

// });


//const text = await page.$eval('a.left.brand-logo', el => el.innerHTML);
//await page.screenshot({path: 'example.png'});
//await page.goto('localhost:3000/blogs');