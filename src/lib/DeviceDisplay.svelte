<script lang="ts">
    import type {Device, DeviceType} from "./index";

    interface Props {
        device: Device;
        onDelete: () => void;
        deviceTypes: readonly DeviceType[];
    }

    let editing = $state(false);

    let {device = $bindable(), onDelete, deviceTypes}: Props = $props();

    function finishEdits() {
        editing = false;
        if (device.port === null) device.port = 0;
        console.log($state.snapshot(device.type));
    }
</script>

<li class="list-row">
    <div class="size-10 font-semibold flex justify-center items-center text-2xl">
        {#if editing}
            <input type="number" min="0" step="1" placeholder="Port" bind:value={device.port} class="input text-center">
        {:else}
            {device.port}
        {/if}
    </div>
    <div>
        {#if editing}
            <input type="text" placeholder="Device Name" bind:value={device.name} class="input input-xs">
            <select class="select select-xs" bind:value={device.type}>
                {#each deviceTypes as type}
                    <option value={type}>{type.displayName}</option>
                {/each}
            </select>
        {:else}
            <div>{device.name}</div>
            <div class="text-xs uppercase font-semibold opacity-60">{device.type.displayName}</div>
        {/if}
    </div>
    {#if editing}
        <button onclick={finishEdits} class="btn btn-square btn-success btn-dash" aria-label="Finish edits">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="size-[1.2em]">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
            </svg>
        </button>
    {:else}
        <button onclick={() => editing = true} class="btn btn-square btn-dash" aria-label="Edit">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="size-[1.2em]">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"/>
            </svg>
        </button>
    {/if}
    <button onclick={onDelete} class="btn btn-square btn-error btn-outline" aria-label="Delete">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
             stroke="currentColor" class="size-[1.2em]">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
        </svg>
    </button>
</li>