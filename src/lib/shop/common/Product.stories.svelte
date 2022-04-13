<script>
import { Meta, Story } from '@storybook/addon-svelte-csf';
import Product from './Product.svelte';
const product = {
	src: "https://www.ikea.com/us/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-palm__0797076_PE766755_S5.JPG?f=xs",
	heading: "Palm Plant",
	price: "$24.99",
	description: "This plant is a very good one. There is a product description that talks about plant care and other details here.",
};

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

<svelte:head>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
	<!--
	.storybook/test.css
	<link rel="stylesheet" href="./test.css">
	-->
	<script src="https://unpkg.com/container-query-polyfill/cqfill.iife.min.js"></script>
    <style>
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

<Meta title="The Brooklyn Garden/Product" component={Product} />

<div class="guide">
	<h1>このコンポーネントは、リセットCSS としてmayer-reset を、また container-query-polyfill を使用します。</h1>
	<pre>
		&lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"&gt;
		&lt;script src="https://unpkg.com/container-query-polyfill/cqfill.iife.min.js"&gt;&lt;/script&gt;
	</pre>
	<hr>
</div>

<Story name="標準">
	<Product
		src="https://www.ikea.com/us/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-palm__0797076_PE766755_S5.JPG?f=xs"
		heading="Palm Plant"
		price="$24.99"
		description="This plant is a very good one. There is a product description that talks about plant care and other details here."
	/>
</Story>

<Story name="エッジ: データなし - ダミー用途"> <!-- (ダミー用途) のように、() が使えませんでした。 -->
	<div class="guide"><p>ダミー用途を考えると、ダミー画像を表示するようにしたほうが良いと思うが、YAGNI。</p></div>
	<Product />
</Story>

<Story name="@container 大 幅350px以上">
	<div class="guide"><p>350px の場合</p></div>
	<div class="big">
		<Product {...product} />
	</div>
	<div class="guide"><p>1200px の場合</p></div>
	<div class="x-big">
		<Product {...product} />
	</div>
</Story>

<Story name="@container 中(上限) 幅349px">
	<div class="middle">
		<Product {...product} />
	</div>
</Story>

<Story name="@container 中(下限) 幅201px">
	<div class="middle">
		<Product {...product} />
	</div>
</Story>

<Story name="@container 小 幅200px">
	<div class="small">
		<Product {...product} />
	</div>
</Story>

<Story name="@container 幅200px 未満">
	<div class="guide">
		<p>200px 未満での使用は考慮していません。</p>
		<p>参考までに、120px での見え方です。商品画像が視覚的に確認できません。</p>
	</div>
	<div class="x-small">
		<Product {...product} />
	</div>
	<div class="guide"><p>参考までに、100px での見え方です。</p></div>
	<div class="xx-small">
		<Product {...product} />
	</div>
</Story>

<Story name="小サイズのアイテムを複数個並べる場合">
	<div class="guide"><p>小サイズの商品を縦に並べるときには、それぞれの隙間に<code>margin-top: 0.5rem;</code>を与えて下さい。</p></div>
	{#each products as p}
		<div class="small list">
			<Product {...p} />
		</div>
	{/each}
</Story>

<style>
.guide {
	margin: 16px 0;
	line-height: 2rem;
	background: #ffe;
}
.guide h1 {
	font-size: 24px;
	margin: 16px 0;
}
.guide pre {
	background: palegoldenrod;
}
.guide code {
	margin: 0.5rem;
	padding: 0.5rem 0.5rem;
	border-radius: 3px;
	font-weight: bold;
	background: lightgray;
}

.x-big {
	width: 1200px;
}

.big {
	width: 350px;
}

.middle {
	width: 300px;
}

.small {
	width: 200px;
}

.x-small {
	width: 120px;
}

.xx-small {
	width: 100px;
}

.list + .list {
	margin-top: 0.5rem;
}
</style>
