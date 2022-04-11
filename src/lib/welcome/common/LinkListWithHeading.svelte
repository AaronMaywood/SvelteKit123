<script>
import LinkItem from './LinkItem.svelte';
export let heading;
export let items;
</script>

<section>
	<h1>{heading}</h1>
	<div class="list">
		{#each items as i}
			<LinkItem {...i} />
		{/each}
	</div>
</section>

<style>
h1 {
	--mediumdark: '#999999';
	font-weight: 900;
	font-size: 13px;
	color: #999;
	letter-spacing: 6px;
	line-height: 24px;
	text-transform: uppercase;
	margin-bottom: 12px;
	margin-top: 40px;
}

.list {
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr 1fr;
	row-gap: 10px;
}

@media (min-width: 620px) {
	.list {
		row-gap: 20px;
		column-gap: 20px;
		grid-template-columns: 1fr 1fr;
	}
}

@media all and (-ms-high-contrast:none) {
	.list {
		display: -ms-grid;
		-ms-grid-columns: 1fr 1fr;
		-ms-grid-rows: 1fr 1fr;
	}
}
</style>
