<script lang="ts">
    export let selected = false;
    export let disabled = false;
    export let current = false;
    export let outOfRange = false;
    export let variant: "day" | "monthYear" = "day";
    export let header = "";
    export let blackout = false;
</script>

<button
    on:click
    on:keydown
    type="button"
    class="calendar-view-item variant-{variant === "day" ? "day" : "month-year"}"
    class:selected
    class:current
    class:out-of-range={outOfRange}
    disabled={disabled || blackout}
    aria-selected={selected}
    {...$$restProps}
>
    {#if header}
        <small>{header}</small>
    {/if}
    <slot />
</button>

<style lang="scss">
    .calendar-view-item {
        background-color: transparent;
        border: none;
        padding: 0;
        font-size: 12px;
        text-align: center;
        border-radius: 50px;
        transition: 50ms ease;
        &:hover {
            background-color: rgba(0, 0, 0, 0.05);
        }
        &:active {
            background-color: rgba(0, 0, 0, 0.1);
        }
        &:disabled {
            cursor: not-allowed;
            opacity: 0.25 !important;
            background: rgba(0, 0, 0, 0.25);
        }
        &.variant- {
            &day {
                inline-size: 38px;
                block-size: 38px;
            }
            &month-year {
                inline-size: 56px;
                block-size: 56px;
            }
        }
        &.current {
            color: #2c5fcb;
            background-color: rgba(44, 95, 203, 0.1);
            &:hover {
                background-color: rgba(44, 95, 203, 0.15);
            }
            &:active {
                background-color: rgba(44, 95, 203, 0.2);
            }
        }
        &.selected {
            background-color: #2c5fcb;
            color: #fff;
            &:hover {
                background-color: #426fd0;
            }
            &:active {
                background-color: #567fd5;
            }
        }
        &.out-of-range {
            opacity: 0.5;
        }
    }
</style>