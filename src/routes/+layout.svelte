<script>
    import { onMount } from "svelte";
    import { loading } from '../stories/loading.store'
    import './styles.css';

    let loadingPage = true;

    onMount(() => {
        loading.subscribe((value) => {
            loadingPage = value
        });
    })

</script>

<div class="app">
    <main>
        {#if loadingPage}
            <div class="loader__wrapper">
                <div class="loader"></div>
            </div>
        {:else}
            <slot/>
        {/if}
    </main>
</div>

<style lang="less">
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        width: 100%;
        max-width: 64rem;
        margin: 0 auto;
        box-sizing: border-box;
    }

    .loader {
        width: 8vmax;
        height: 8vmax;
        border-right: 4px solid var(--primary-color1);
        border-radius: 100%;
        animation: spinRight 800ms linear infinite;

        &__wrapper {
          width: 100vw;
          height: 100vh;
          margin: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          align-content: center;
        }

        &:before, &:after {
            content: '';
            width: 6vmax;
            height: 6vmax;
            display: block;
            position: absolute;
            top: calc(50% - 3vmax);
            left: calc(50% - 3vmax);
            border-left: 3px solid var(--primary-color1);
            border-radius: 100%;
            animation: spinLeft 800ms linear infinite;
        }

        &:after {
            width: 4vmax;
            height: 4vmax;
            top: calc(50% - 2vmax);
            left: calc(50% - 2vmax);
            border: 0;
            border-right: 2px solid var(--primary-color1);
            animation: none;
        }
    }

    @keyframes spinLeft {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(720deg);
        }
    }

    @keyframes spinRight {
        from {
            transform: rotate(360deg);
        }
        to {
            transform: rotate(0deg);
        }
    }

</style>
