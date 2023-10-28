<script lang="ts">
    import type { CoffeeBeans } from "../../types/coffee";
    import { beautify } from "../../utils";

    export let coffeeInfo: CoffeeBeans;

    function skeletonText(item) {
        if (!item) {
            return 'skeleton skeleton-text'
        }
    }
    function skeletonImage(item) {
        if (!item) {
            return 'skeleton skeleton-image'
        }
    }
</script>

<div class="card__wrapper">
    <div class="card__image_wrapper {skeletonImage(coffeeInfo?.image)}">
        {#if coffeeInfo?.image}
            <img class="card__image" src="{coffeeInfo?.image}" />
        {/if}
    </div>
    <div class="card__content">
        <div class="card__title">
            <div class="card__origin row {skeletonText(coffeeInfo?.origin)}">
                {coffeeInfo?.origin}
            </div>
            <div class="card__intensifier row {skeletonText(coffeeInfo?.intensifier)}">
                {beautify(coffeeInfo?.intensifier)}
            </div>
        </div>

        <div class="card__blend-name row {skeletonText(coffeeInfo?.blend_name)}">
            {coffeeInfo?.blend_name}
        </div>
        <div class="card__variety row {skeletonText(coffeeInfo?.variety)}">
            {coffeeInfo?.variety}
        </div>
        <div class="card__notes row {skeletonText(coffeeInfo?.notes)}">
            {#if coffeeInfo?.notes}
                {#each coffeeInfo?.notes.split(',') as item}
                    <div class="card__note">
                        {item}
                    </div>
                {/each}
            {/if}
        </div>
    </div>
</div>

<style lang="less">
    .row {
        margin-top: 5px;
    }

    .card {
      &__wrapper {
        display: flex;
        flex-direction: column;
        max-width: 500px;
        width: 100%;
        border: 1px solid var(--font-white);
        padding: 20px;
        background-color: var(--font-white);
        border-radius: var(--border-radius1);
      }

      &__content {
        max-width: 500px;
        margin-top: 10px;
      }

      &__image {
        width: 100%;
        height: 100%;

        &_wrapper {
          max-width: 500px;
          max-height: 500px;
        }
      }

      &__origin {
        color: var(--font-gray0);
        font-size: var(--font-size0);
      }

      &__blend-name {
        color: var(--secondary-color0);
        font-size: var(--font-size2);
        font-weight: var(--font-weight2);

      }

      &__title {
        display: flex;
        justify-content: space-between;
        gap: 5px;
        flex-direction: row;

        @media (max-width: 480px) {
          flex-direction: column;
        }
      }

      &__intensifier {
        font-size: var(--font-size0);
        color: var(--secondary-color1)
      }

      &__notes {
        display: flex;
        flex-wrap: wrap;
      }

      &__note {
        min-width: fit-content;
        padding: 5px 10px;
        font-size: var(--font-size0);
        background-color: var(--primary-color1);
        border-radius: var(--border-radius1);
        color: var(--font-gray0);
        margin-right: 3px;
        margin-top: 3px;
      }
    }
</style>
