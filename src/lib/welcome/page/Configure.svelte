<script>
import LinkListWithHeading from '../common/LinkListWithHeading.svelte';
const items = [
	{
		href:"https://storybook.js.org/docs/react/addons/addon-types",
		src:"https://raw.githubusercontent.com/storybookjs/storybook/next/examples/vue-3-cli/src/stories/assets/plugin.svg",
		alt:"plugin",
		title:"Presets for popular tools",
		desc:"Easy setup for TypeScript, SCSS and more.",
	},
	{
		href:"https://storybook.js.org/docs/react/configure/webpack",
		src:"https://raw.githubusercontent.com/storybookjs/storybook/next/examples/vue-3-cli/src/stories/assets/stackalt.svg",
		alt:"Build",
		title:"Build configuration",
		desc:"How to customize webpack and Babel",
	},
	{
		href:"https://storybook.js.org/docs/react/configure/styling-and-css",
		src:"https://raw.githubusercontent.com/storybookjs/storybook/next/examples/vue-3-cli/src/stories/assets/colors.svg",
		alt:"colors",
		title:"Styling",
		desc:"How to load and configure CSS libraries",
	},
	{
		href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",
		src:"https://raw.githubusercontent.com/storybookjs/storybook/next/examples/vue-3-cli/src/stories/assets/flow.svg",
		alt:"flow",
		title:"Data",
		desc:"Providers and mocking for data libraries",
	}
];
</script>

<LinkListWithHeading heading="Configure" items={items} />

