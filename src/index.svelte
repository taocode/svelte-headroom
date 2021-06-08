<script>
  import { createEventDispatcher, onMount } from "svelte";
  import validate from "./validation";

  export let duration = "300ms";
  export let offset = 0;
  export let tolerance = 0;
  export let bottom = false;

  let headerClass = "pin";
  let lastHeaderClass = "pin";
  let y = 0;
  let lastY = 0;
  let prefix = "";
  let attop: boolean = true;
  let atbottom: boolean = false;
  let win: Window;

  const dispatch = createEventDispatcher();

  onMount(() => {
    win = window;
  });

  function deriveClass(y = 0, scrolled = 0) {
    if (y < offset) return `${prefix}pin`;
    if (!scrolled || Math.abs(scrolled) < tolerance) return headerClass;
    const dir = scrolled < 0 ? "down" : "up";
    if (dir === "up") return `${prefix}pin`;
    if (dir === "down") return `${prefix}unpin`;
    return headerClass;
  }

  function updateClass(y = 0) {
    const scrolledPxs = lastY - y;
    const result = deriveClass(y, scrolledPxs);
    lastY = y;
    return result;
  }

  function action(node) {
    node.style.transitionDuration = duration;
  }

  $: {
    validate({ duration, offset, tolerance });
    headerClass = updateClass(y);
    attop = y <= 2;
    atbottom = win && (win.innerHeight + win.pageYOffset) >= document.body.offsetHeight - 2;
    if (headerClass !== lastHeaderClass) {
      dispatch(headerClass ? "unpin" : "pin");
    }
    lastHeaderClass = headerClass;
  }
</script>

<style>
  div {
    position: fixed;
    width: 100%;
    top: 0;
    transition: transform 300ms linear;
  }
  .pin {
    transform: translateY(0%);
  }
  .unpin {
    transform: translateY(-100%);
  }
  .atbottom.svelte-headroom--unpin {
    transform: translateY(0);
  }
  .bottom,
  .bottom.atbottom.svelte-headroom--unpin {
    top: auto;
    bottom: 0;
    width: auto;
    right: 0;
    transform: translateY(0);
  }
  .svelte-headroom--unpin.bottom,
  .bottom.attop {
    transform: translateY(100%);
  }
</style>

<svelte:window bind:scrollY={y} />
<div use:action class={headerClass} class:bottom class:attop class:atbottom>
  <slot />
</div>
