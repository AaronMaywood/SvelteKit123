<script>
import Product from './Product.svelte';
const products = [
	{
		src: "https://www.ikea.com/us/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-palm__0797076_PE766755_S5.JPG?f=xs",
		heading: "Palm Plant",
		price: "$24.99",
		description: "This plant is a very good one. There is a product description that talks about plant care and other details here.",
	},
	{
		src: "https://www.ikea.com/us/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-monstera__0614197_PE686822_S5.JPG?f=xs",
		heading: "Monstera",
		price: "$32.99",
		description: "This plant is a very good one. There is a product description that talks about plant care and other details here.",
	},
];
</script>

<div class="sidebar">
	<h1>Recently Viewed:</h1>
	{#each products as p}
		<div class="sidebar-product">
			<Product {...p} />
		</div>
	{/each}
</div>

<style>
.sidebar {
	border-left: 1px solid #c2ceb0;
	padding: 1rem;
	position: sticky;
	top: 0;
	height: 100vh;
}

h1 {
	text-transform: uppercase;
	letter-spacing: 0.25px;
	margin-bottom: 0.75rem;
	text-align: center;
}

.sidebar-product + .sidebar-product {
	margin-top: 0.5rem;
}
</style>
