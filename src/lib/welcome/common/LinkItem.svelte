<script>
export let href = "";
export let src = "https://raw.githubusercontent.com/storybookjs/storybook/next/examples/vue-3-cli/src/stories/assets/plugin.svg";
export let alt = "";
export let title;
export let desc;
</script>
<a {href} target="_blank" >
	<img {src} {alt} />
	<span>
	  <strong>{title}</strong>
      {desc}
	</span>
</a>

<style>
a {
	display: block;
	padding: 20px 30px 20px 15px;
	border: 1px solid #00000010;
	border-radius: 5px;
	transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
	color: #333333;
	display: flex;
	align-items: flex-start;
}

a:hover {
	border-color: #1EA7FD50;
	transform: translate3d(0, -3px, 0);
	box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
}

a:active {
	border-color: #1EA7FD;
	transform: translate3d(0, 0, 0);
}

a strong {
	font-weight: 700;
	display: block;
	margin-bottom: 2px;
}

a img {
	height: 40px;
	width: 40px;
	margin-right: 15px;
	flex: none;
}

a span {
	font-size: 14px;
	line-height: 20px;
}
</style>
