<script>
import Product from '../common/Product.svelte';
</script>

<div class="hero">
	<figure class="hero-image">
		<img src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=709&q=80" alt="small cactus on a pink background">
		<h1>Work from home with a new plant friend.</h1>
	</figure>
	<div class="hero-product">
		<Product
			src="https://www.ikea.com/us/en/images/products/fejka-artificial-potted-plant-with-pot-indoor-outdoor-succulent__0614211_PE686835_S5.JPG?f=xs"
			heading="Succulent"
			description="This plant is a very good one. There is a product description that talks about plant care and other details here."
			price="$8.99"
		/>
	</div>
</div>

<style>
img {
	width: 100%;
}
.hero {
	position: relative;
	height: 100%;	/* 親grid の高さを引き継ぐための苦肉の策. */
}
.hero-image {
	position: relative;
	overflow: hidden;
	height: 100%;
}
.hero-image h1 {
	position: absolute;
	top: 4rem;
	right: 0;
	left: 0;
	width: 100%;
	font-size: 4rem;
	max-width: 80%;
	margin: 0 auto;
	padding: 0.5rem;
}
.hero-image img {
	object-fit: cover;
	height: 100%;
}
.hero-product {
	position: absolute;
	bottom: 1rem;
	right: 1rem;
	/* Slot the product card into a size for @container */
	width: 350px;
	background: white;
}
</style>
