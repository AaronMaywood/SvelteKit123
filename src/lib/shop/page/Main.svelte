<script>
import Product from '../common/Product.svelte';
const products = [
	{
		src: "https://www.ikea.com/us/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-cactus__0935865_PE792997_S5.JPG?f=xs",
		heading: "Cactus",
		price: "$16.99",
		description: "This plant is a very good one. There is a product description that talks about plant care and other details here.",
	},
	{
		src: "https://www.ikea.com/us/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-monstera__0614197_PE686822_S5.JPG?f=xs",
		heading: "Monstera",
		price: "$32.99",
		description: "This plant is a very good one. There is a product description that talks about plant care and other details here.",
	},
	{
		src: "https://www.ikea.com/us/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-palm__0797076_PE766755_S5.JPG?f=xs",
		heading: "Succulent",
		price: "$24.99",
		description: "This plant is a very good one. There is a product description that talks about plant care and other details here.",
	},
	{
		src: "https://www.ikea.com/us/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-hanging-ivy__0898086_PE782558_S5.JPG?f=xs",
		heading: "Potted Ivy",
		price: "$19.99",
		description: "This plant is a very good one. There is a product description that talks about plant care and other details here.",
	},
	{
		src: "https://www.ikea.com/us/en/images/products/kapkrusbaer-hanging-planter-gray-green__0919747_PE789482_S5.JPG?f=xs",
		heading: "Hanging Pot",
		price: "$14.99",
		description: "This plant is a very good one. There is a product description that talks about plant care and other details here.",
	},
	{
		src: "https://www.ikea.com/us/en/images/products/graeddaepple-plant-pot-indoor-outdoor-pink-white__0952322_PE804311_S5.JPG?f=xs",
		heading: "Pink Planter",
		price: "$14.99",
		description: "This plant is a very good one. There is a product description that talks about plant care and other details here.",
	},
	{
		src: "https://www.ikea.com/us/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-cactus__0935865_PE792997_S5.JPG?f=xs",
		heading: "Cactus",
		price: "$16.99",
		description: "This plant is a very good one. There is a product description that talks about plant care and other details here.",
	},
];
</script>

<div class="main">
	{#each products as p}
		<Product {...p} />
	{/each}
</div>

<style>
.main {
	padding: 2rem 3rem;
	display: grid;
	grid-gap: 4rem 2rem;
	grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
}
</style>
