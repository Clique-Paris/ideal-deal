import puppeteer from 'puppeteer';
import { Spider } from './structs/spider';

const spider: Spider = new Spider('https://google.com');

spider.start({headless: false}).then(() => {
  console.log('Spider created');
});