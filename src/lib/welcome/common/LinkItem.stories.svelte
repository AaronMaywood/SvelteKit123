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
