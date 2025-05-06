<script lang="ts">
    import Hub from "./lib/Hub.svelte";
    import CodeDisplay from "./lib/CodeDisplay.svelte";
    import xmlBuilder from "./lib/xmlBuilder.js";
    import {createEmptyLynxModule, type LynxModule} from "./lib";

    let controlHub: LynxModule = $state(createEmptyLynxModule());
    let expansionHub: LynxModule = $state(createEmptyLynxModule());
</script>

<div class="min-h-dvh grid lg:grid-cols-2 p-6 gap-6 bg-base-100">
    <div class="hidden lg:block bg-base-200 p-6 rounded-md shadow-sm border-2 border-base-content/20">
        <CodeDisplay codeBuilder={xmlBuilder} {controlHub} {expansionHub}/>
    </div>
    <div class="bg-base-200 rounded-md shadow-sm border-2 border-base-content/20 p-6">
        <div class="tabs tabs-lift h-[calc(100%---spacing(10))]">
            <Hub name="Control Hub" bind:module={controlHub} checked={true}/>
            <Hub name="Expansion Hub" bind:module={expansionHub}/>
        </div>
    </div>
</div>