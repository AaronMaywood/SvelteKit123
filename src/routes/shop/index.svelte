<script>
import PageHeader from '$lib/shop/common/PageHeader.svelte';
import Hero from '$lib/shop/page/Hero.svelte';
import Main from '$lib/shop/page/Main.svelte';
import Sidebar from '$lib/shop/common/Sidebar.svelte';
import PageFooter from '$lib/shop/common/PageFooter.svelte';
</script>

<svelte:head>
	<title>The Brooklyn Garden</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
	<script src="https://unpkg.com/container-query-polyfill/cqfill.iife.min.js"></script>
    <link rel="stylesheet" href='/shop-product.css'>
    <style>
    body {
      font-family: system-ui;
    }
    </style>
</svelte:head>

<div class="grid">
	<div class="header">
		<PageHeader />
	</div>
	<div class="hero">
		<Hero />
	</div>
	<div class="main">
		<Main />
	</div>
	<div class="sidebar">
		<Sidebar />
	</div>
	<div class="footer">
		<PageFooter />
	</div>
</div>

<style>
.grid {
	display: grid;
	grid-template:
		"😄 😄 😄 😄" auto
		"🚀 🚀 🚀  ↕️" 500px
		" 🖼 🖼 🖼 ↕️" auto
		"👟 👟 👟 👟" auto /
		1fr 1fr 1fr 200px;
}
.header {
	grid-area: 😄;
}
.hero {
	grid-area: 🚀;
}
.sidebar {
	grid-area: ↕️;
}
.main {
	grid-area: 🖼;
}
.footer {
	grid-area: 👟;
}
</style>
