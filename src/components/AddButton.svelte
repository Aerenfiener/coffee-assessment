<script lang="ts">
    export let disabled: boolean;
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
</script>

<div class="wrapper">
    <button class="add-button { disabled ? 'add-button-disabled': '' }" id="add-button" on:click={() => { dispatch('addCard'); }} aria-label="Show the new card">
       New card
    </button>
</div>

<style lang="less" itemscope>
  .wrapper {
    height: 100%;
    width: 100%;
    max-width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .add-button {
    width: 100%;
    min-height: 40px;
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1.3px;
    font-weight: var(--font-weight1);
    color: var(--primary-color0);
    background: var(--primary-color1);
    border: none;
    border-radius: var(--border-radius1);
    transition: all 0.3s ease-in-out 0s;
    cursor: pointer;
    outline: none;
    position: relative;
    padding: 10px 30px;

    &-disabled {
      cursor: default;
      background: var(--gray0);
      color: var(--font-gray0) !important;
    }

    &:hover {
      color: var(--secondary-color0);
    }
  }
</style>