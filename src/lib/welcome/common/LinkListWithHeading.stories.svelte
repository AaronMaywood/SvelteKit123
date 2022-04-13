<script>
import { Meta, Story } from '@storybook/addon-svelte-csf';
import LinkListWithHeading from './LinkListWithHeading.svelte';
const noitems = [];
const item = [
	{
		href:"https://storybook.js.org/docs/react/addons/addon-types",
		src:"https://raw.githubusercontent.com/storybookjs/storybook/next/examples/vue-3-cli/src/stories/assets/plugin.svg",
		alt:"plugin",
		title:"Presets for popular tools",
		desc:"Easy setup for TypeScript, SCSS and more.",
	},
]
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
];
</script>

<Meta title="Welcome/LinkListWithHeading" component={LinkListWithHeading} />

<Story name="標準">
	<LinkListWithHeading heading="見出し" items={items} />
</Story>

<Story name="エッジ: アイテムが０個、見出しなし※何も情報が無い時にはエラーになります"> <!-- 0個と半角数字を含めたらStorybook の画面が固まってしまった。しかたなく全角０にした。 -->
	<LinkListWithHeading items={noitems} />
</Story>

<Story name="エッジ: アイテムがひとつだけの場合">
	<LinkListWithHeading heading="アイテムひとつだけ" items={item} />
</Story>
