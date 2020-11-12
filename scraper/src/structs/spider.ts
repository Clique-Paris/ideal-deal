import puppeteer from 'puppeteer';

export class Spider {

    private url: string; 
    
    constructor(url: string) {
        this.url = url;
    }

    async start(options: puppeteer.LaunchOptions) {
        const browser: puppeteer.Browser = await puppeteer.launch(options);
        const page = await browser.newPage();
        await page.goto(this.url);
        // TODO: Complete with scraping functions and necessary parameters
        // TODO: Uncomment this before official release
        // await browser.close();
    }
}