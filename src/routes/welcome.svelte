<script>
    import Header from '$lib/welcome/page/Header.svelte';
    import Configure from '$lib/welcome/page/Configure.svelte';
    import Learn from '$lib/welcome/page/Learn.svelte';
    import Tip from '$lib/welcome/page/Tip.svelte';
</script>

<svelte:head>
	<title>Welcome to Storybook</title>
	<link rel='stylesheet' href='/welcome-global.css'>
</svelte:head>

<div class="sbdocs-wrapper">
	<Header />
	<Configure />
	<Learn />
	<Tip />
</div>

<style>
.sbdocs-wrapper{
	max-width: 1000px;
	width: 100%;
	margin: 0 auto;
	padding: 4rem 20px;
	box-sizing: border-box;
}
</style>
