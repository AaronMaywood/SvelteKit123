<script>
export let src;
export let heading;
export let price;
export let description;
</script>
<div class="product">
	<div class="product-container">
		<figure><img {src} alt="" /></figure>
		<div>
			<h3>{heading}</h3>
			<span class="price">{price}</span>
			<p>{description}</p>
			<button>Add to Cart</button>
		</div>
	</div>
</div>

<style>
img {
	width: 100%;
}

h1 {
	font-size: 14px;
	font-weight: 800;
	text-transform: uppercase;
	letter-spacing: 0.25px;
	margin: 0.5rem 1rem 0;
}

.price {
	display: block;
	font-size: 14px;
	margin: 0 1rem;
}

p {
	margin-top: 1rem;
	font-size: 13px;
	color: #555;
	margin: 0.5rem 1rem 0;

}

button {
	border: none;
	display: block;
	background: white;
	font-size: 14px;
	font-weight: 800;
	text-transform: uppercase;
	letter-spacing: 0.25px;
	padding: 0.25rem 0.5rem;
	margin: 1rem auto;
	cursor: pointer;
	background: #c2ceb0;
}

/* ここにあったコンテナークエリーに関連するスタイルは、全て public/product.css に移行しました */
</style>
