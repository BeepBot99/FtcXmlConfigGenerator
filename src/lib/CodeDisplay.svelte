<script lang="ts">
    import {onMount} from "svelte";

    import hljs from "highlight.js";
    import type {Action} from "svelte/action";
    import type {LynxModule} from "./index";
    import type {CodeBuilder} from "./xmlBuilder";

    interface Props {
        controlHub: LynxModule;
        expansionHub: LynxModule;
        codeBuilder: CodeBuilder;
    }

    let {controlHub, expansionHub, codeBuilder}: Props = $props();

    let code = $derived(codeBuilder.build(controlHub, expansionHub))

    onMount(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            import('highlight.js/styles/atom-one-dark.min.css');
        } else {
            import('highlight.js/styles/atom-one-light.min.css');
        }
    });

    const highlight: Action = () => {
        hljs.highlightAll();
    }
</script>

{#key code}
    <pre class="h-full"><code use:highlight class="language-xml rounded-md h-full">{code}</code></pre>
{/key}
