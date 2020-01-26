<script>
	import { onMount } from 'svelte'
	import Card from './_components/common/Card.svelte'
	import FlexRow from './_components/utility/FlexRow.svelte'
	import Widget from './_components/Widget.svelte'
	import GridArea from './_components/utility/GridArea.svelte'
	import CreateSvelteProModal from './_components/CreateSvelteProModal.svelte'
	import CreateSvelteConModal from './_components/CreateSvelteConModal.svelte'
	import { sveltePros } from './_stores/sveltePros.js'
	import { svelteCons } from './_stores/svelteCons.js'
	import { PlusIcon, RefreshCwIcon } from 'svelte-feather-icons'
	import fetchSvelteFacts from './http/fetchSvelteFacts'

	onMount(async () => {
		const facts = await fetchSvelteFacts()
		sveltePros.set(facts.filter(fact => fact.type === 'PRO'))
		svelteCons.set(facts.filter(fact => fact.type === 'CON'))
	});

	const fetchPros = async () => sveltePros.set(await fetchSvelteFacts({ type: 'PRO' }))
	const fetchCons = async () => svelteCons.set(await fetchSvelteFacts({ type: 'CON' }))

	let shouldDisplayCreateSvelteProModal = false
	let shouldDisplayCreateSvelteConModal = false

</script>

<style>
	main {
		height: 100vh;
		width: 100vw;
		padding: var(--uniform-padding);
		display: grid;
		grid-gap: 25px;
		grid-template-areas: 
			'title title'
			'pros cons';
		grid-template-rows: minmax(0, 70px) minmax(0, calc(100vh - 100px));
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
	}

	@media (max-width: 550px) {
		main {
			grid-template-areas: 
			'title'
			'pros'
			'cons';
			grid-template-rows: minmax(0, 70px)  minmax(0, calc(100vh - 100px)) minmax(0, calc(100vh - 100px));
			grid-template-columns: minmax(0, 1fr);
		}
	}

	img {
		max-width: 125%;
	}
</style>

<main>

	{#if shouldDisplayCreateSvelteProModal}
		<CreateSvelteProModal
			emitCloseAction={() => shouldDisplayCreateSvelteProModal = false}
		/>
  {/if}

	{#if shouldDisplayCreateSvelteConModal}
		<CreateSvelteConModal
			emitCloseAction={() => shouldDisplayCreateSvelteConModal = false}
		/>
  {/if}

	<GridArea gridArea="title">
		<Card>
			<FlexRow margin="-114px 0 0 0" height="300px" classNames="responsive" alignItems="center" justifyContent="center">
				<img
					src={"assets/svelte-logo.png"}
					alt="Svelte Logo"
				/>
			</FlexRow>
		</Card>
	</GridArea>

	<GridArea gridArea="pros">
		<Widget
			title="Pros"
			actionIcons={[
				{
					icon: PlusIcon,
					action: e => shouldDisplayCreateSvelteProModal = true,
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
			title="Cons"
			actionIcons={[
				{
					icon: PlusIcon,
					action: e => shouldDisplayCreateSvelteConModal = true,
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