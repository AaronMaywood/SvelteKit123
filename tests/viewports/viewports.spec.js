import { test, expect } from '@playwright/test';

test('viewports', async ({ page, browserName }) => {
	await page.goto('http://localhost:3000/shop', { waitUntil: 'networkidle' });
	await page.waitForTimeout(1000);
	expect(await page.screenshot({fullPage:true})).toMatchSnapshot(`shop-index.png`);
	await page.goto('http://localhost:3000/welcome');
	expect(await page.screenshot({fullPage:true})).toMatchSnapshot(`welcome.png`);
});
