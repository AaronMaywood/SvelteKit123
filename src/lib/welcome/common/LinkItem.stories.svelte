<script>
import { Meta, Story } from '@storybook/addon-svelte-csf';
import LinkItem from './LinkItem.svelte';
</script>

<Meta title="Welcome/LinkItem" component={LinkItem} />

<Story name="標準">
	<LinkItem 
		href="https://storybook.js.org/docs/react/configure/webpack"
		src="https://raw.githubusercontent.com/storybookjs/storybook/next/examples/vue-3-cli/src/stories/assets/stackalt.svg"
		alt="Build"
		title="Build configuration"
		desc="How to customize webpack and Babel"
	/>
</Story>

<Story name="エッジ:データが与えられていない時">
	<LinkItem />
</Story>

<Story name="エッジ:タイトルや説明(desc)が長すぎる場合">
	<LinkItem 
		href="https://storybook.js.org/docs/react/configure/webpack"
		src="https://raw.githubusercontent.com/storybookjs/storybook/next/examples/vue-3-cli/src/stories/assets/stackalt.svg"
		alt="Build"
		title="More more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more more Build configuration"
		desc="Very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long How to customize webpack and Babel"
	/>
</Story>
