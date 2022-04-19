import { test, expect } from '@playwright/test';

test('firstview', async ({ page, browserName }) => {
	await page.goto('http://localhost:3000/shop', { waitUntil: 'networkidle' });
	expect(await page.screenshot()).toMatchSnapshot(`shop-index.png`);
	await page.goto('http://localhost:3000/welcome');
	expect(await page.screenshot()).toMatchSnapshot(`welcome.png`);
});
