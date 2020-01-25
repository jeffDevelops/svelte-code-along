<script>
	import { onMount } from 'svelte'
	import Widget from './_components/Widget.svelte'
	import GridArea from './_components/utility/GridArea.svelte'
	import CreateSvelteFactModal from './_components/CreateSvelteFactModal.svelte'
	import { sveltePros } from './_stores/sveltePros.js'
	import { svelteCons } from './_stores/svelteCons.js'
	import { PlusIcon, RefreshCwIcon } from 'svelte-feather-icons'
	import fetchSvelteFacts from './net/fetchSvelteFacts'

	onMount(async () => {
		const facts = await fetchSvelteFacts()
		sveltePros.set(facts.filter(fact => fact.type === 'PRO'))
		svelteCons.set(facts.filter(fact => fact.type === 'CON'))
	});

	const fetchPros = async () => sveltePros.set(await fetchSvelteFacts({ type: 'PRO' }))
	const fetchCons = async () => svelteCons.set(await fetchSvelteFacts({ type: 'CON' }))

	let shouldDisplayCreateSvelteFactModal = false

</script>

<style>
	main {
		height: 100vh;
		width: 100vw;
		padding: var(--uniform-padding);
		display: grid;
		grid-gap: 25px;
		grid-template-areas: 'pros cons';
		grid-template-rows: minmax(0, auto);
		grid-template-columns: 1fr 1fr;
	}
</style>

<main>

	{#if shouldDisplayCreateSvelteFactModal}
		<CreateSvelteFactModal
			emitCloseAction={() => shouldDisplayCreateSvelteFactModal = false}
		/>
  {/if}

	<GridArea gridArea="pros">
		<Widget
			title="Svelte Pros"
			actionIcons={[
				{
					icon: PlusIcon,
					action: e => shouldDisplayCreateSvelteFactModal = true,
					color: 'var(--primary-color)',
				},
				{
					icon: RefreshCwIcon,
					action: e => {
						sveltePros.set(null)
						fetchPros()
					},
					color: 'var(--secondary-color)',
				},
			]}
			listViewItems={$sveltePros}
		/>
	</GridArea>

	<GridArea gridArea="cons">
		<Widget
			title="Svelte Cons"
			actionIcons={[
				{
					icon: PlusIcon,
					action: e => shouldDisplayCreateSvelteFactModal = true,
					color: 'var(--primary-color)',
				},
				{
					icon: RefreshCwIcon,
					action: e => {
						svelteCons.set(null)
						fetchCons()
					},
					color: 'var(--secondary-color)',
				},
			]}
			listViewItems={$svelteCons}
		/>
	</GridArea>

</main>