<script>
import LinkListWithHeading from '../common/LinkListWithHeading.svelte';
const items = [
	{
		href:"https://storybook.js.org/docs",
		src:"https://raw.githubusercontent.com/storybookjs/storybook/next/examples/vue-3-cli/src/stories/assets/repo.svg",
		alt:"repo",
		title:"Storybook documentation",
		desc:"Configure, customize, and extend",
	},
	{
		href:"https://storybook.js.org/tutorials/",
		src:"https://raw.githubusercontent.com/storybookjs/storybook/next/examples/vue-3-cli/src/stories/assets/direction.svg",
		alt:"direction",
		title:"In-depth guides",
		desc:"Best practices from leading teams",
	},
	{
		href:"https://github.com/storybookjs/storybook",
		src:"https://raw.githubusercontent.com/storybookjs/storybook/next/examples/vue-3-cli/src/stories/assets/code-brackets.svg",
		title:"GitHub project",
		desc:"View the source and add issues",
	},
	{
		href:"https://discord.gg/storybook",
		src:"https://raw.githubusercontent.com/storybookjs/storybook/next/examples/vue-3-cli/src/stories/assets/comments.svg",
		alt:"comments",
		title:"Discord chat",
		desc:"Chat with maintainers and the community",
	}
];
</script>

<LinkListWithHeading heading="Learn" items={items} />
