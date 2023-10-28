<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Card from '../components/coffee/CoffeeCard.svelte'
	import AddButton from '../components/AddButton.svelte'
	import { addCard, coffeeList, loadingCard, loadingImage } from '../stories/coffee.store';
	import { INTERVAL } from "../constants";
	import { Interval } from "../utils";
	import { loading } from "../stories/loading.store";

	const interval = new Interval(addCard, INTERVAL);

	let isLoadingCard = true;
	let isLoadingImage = true;

	onMount(async () => {
		await addCard();
		loading.set(false);
		interval.createInterval();

		loadingCard.subscribe((value) => {
			isLoadingCard = value;
		});
		loadingImage.subscribe((value) => {
			isLoadingImage = value;
		});
	});

	onDestroy(() => {
		interval.clearInterval();
	});

	async function onAddCard() {
		if (!isLoadingImage && !isLoadingCard) {
			setTimeout(() => document.getElementById("add-button").scrollIntoView({behavior: 'smooth'}), 0)
			await addCard();
			interval.recreateInterval();
		}
	}
</script>

<svelte:head>
	<title>Coffee beans</title>
	<meta name="description" content="Some information about beans" />
</svelte:head>

<section>
	<div class="wrapper">
		{#each $coffeeList as item}
			<Card coffeeInfo={item} />
		{/each}
		<div class="button">
			<AddButton on:addCard={onAddCard} disabled={isLoadingCard || isLoadingImage} />
		</div>
	</div>
</section>

<style lang="less" itemscope>
	.wrapper {
		gap: 10px;
		max-width: 520px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.button {
		margin-top: 20px;
	}
</style>
