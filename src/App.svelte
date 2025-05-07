<script lang="ts">
    import Hub from "./lib/Hub.svelte";
    import CodeDisplay from "./lib/CodeDisplay.svelte";
    import xmlBuilder from "./lib/xmlBuilder.js";
    import {createEmptyLynxModule, type LynxModule} from "./lib";

    let controlHub: LynxModule = $state(createEmptyLynxModule());
    let expansionHub: LynxModule = $state(createEmptyLynxModule());

    let configuring = $state(true);
</script>

<div class="min-h-dvh grid lg:grid-cols-2 lg:p-6 gap-6 bg-base-100">
    <div class:hidden={configuring}
         class="max-w-screen mb-16 lg:mb-0 lg:block bg-base-200 p-4 lg:p-6 lg:rounded-md lg:shadow-sm lg:border-2 lg:border-base-content/20">
        <CodeDisplay codeBuilder={xmlBuilder} {controlHub} {expansionHub}/>
    </div>
    <div class:hidden={!configuring}
         class="lg:block bg-base-200 mb-16 lg:mb-0 lg:rounded-md lg:shadow-sm lg:border-2 lg:border-base-content/20 p-4 lg:p-6">
        <div class="tabs tabs-lift h-[calc(100%---spacing(10))]">
            <Hub name="Control Hub" bind:module={controlHub} checked={true}/>
            <Hub name="Expansion Hub" bind:module={expansionHub}/>
        </div>
    </div>
</div>

<div class="dock lg:hidden">
    <button class:dock-active={configuring} onclick={() => configuring = true}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="size-[1.2em]">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
        </svg>

        <span class="dock-label">Configure</span>
    </button>

    <button class:dock-active={!configuring} onclick={() => configuring = false}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="size-[1.2em]">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"/>
        </svg>
        <span class="dock-label">Code</span>
    </button>
</div>