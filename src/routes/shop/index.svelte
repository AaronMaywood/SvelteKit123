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
    <style>
    body {
      font-family: system-ui;
    }

	.product {
		container: inline-size;
	}

	/* Smaller version (ie. sidebar in this demo) */
	@container (max-width: 200px) {
		.product-container {
			border: 1px solid #c2ceb0;
			padding: 0.5rem;
			border-radius: 10px;
			display: flex;
			align-items: center;
		}

		.product-container h1 {
			letter-spacing: 0;
			width: 90px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: pre;
			margin: 0;
		}

		.product-container span {
			margin: 0;
		}

		.product-container p,
		.product-container button {
			display: none;
		}
	}

	/* wider sizes (i.e in hero) */
	@container (min-width: 350px) {
		.product-container {
			padding: 0.5rem 0 0;
			display: flex;
		}
		.product button {
			margin-left: 1rem;
		}
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
