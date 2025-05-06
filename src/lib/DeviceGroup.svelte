<script lang="ts">
    import type {Device, DeviceType} from "./index";
    import DeviceDisplay from "./DeviceDisplay.svelte";

    interface Props {
        type: string;
        devices: Device[];
        deviceTypes: readonly DeviceType[];
    }

    let {type, devices = $bindable(), deviceTypes}: Props = $props();

    function addDevice() {
        const port = devices.length === 0 ? 0 : Math.max(...devices.map(d => d.port)) + 1;
        devices.push({name: "New Device", type: deviceTypes[0], port});
        open = true;
    }

    function removeDevice(index: number) {
        devices.splice(index, 1);
    }

    let open = $state(false);
</script>

<details bind:open class="bg-base-200 pb-2 mb-4 rounded-box">
    <summary class="p-4 pb-2 flex justify-between items-center cursor-pointer">
        <span class="text-xs opacity-60 tracking-wide flex items-center">
            {@html type}
            {#if !open && devices.length > 0}
                <span class="badge badge-xs badge-secondary ml-2">{devices.length}</span>
            {/if}
        </span>
        <button onclick={addDevice} class="btn btn-sm btn-primary btn-soft btn-square" aria-label="New">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
            </svg>
        </button>
    </summary>
    <ul class="list">
        {#if devices.length === 0}
            <li class="text-sm opacity-80 tracking-wide p-4 pt-0">No devices of this type.</li>
        {:else}
            {#each devices as _, index}
                <DeviceDisplay bind:device={devices[index]} onDelete={() => removeDevice(index)} {deviceTypes}/>
            {/each}
        {/if}
    </ul>
</details>
