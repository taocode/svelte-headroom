<script>
  import { Headroom } from '$lib'
  import Readme from '../_README.md'

  export let data
  let headings = data.headings
  $: headings = data.headings

  function onPin() {
    console.log('pin')
    pinned = true
  }

  function onUnPin() {
    console.log('unpin')
    pinned = false
  }

  const propsHeadings = headings
                          .filter((o) => o.depth === 3)
                          .map((c) => [ c.data.id, c.value.split(' ')[0] ] )
  let pinned = true
</script>

<svelte:head>
  <title>Svelte-Headroom Demo page</title>
</svelte:head>

<div class:pinned>
<Headroom showAtBottom duration="500ms" easing="ease-out" on:unpin={onUnPin} on:pin={onPin}>
  <div class="topmenu-wrap">
    <div class="topmenu">
      <div class="label">props:</div>
      <nav class="menu">
        {#each propsHeadings as [id,name]}
          <a href="#{id}">{name}</a>
        {/each}
      </nav>
    </div>
  </div>
</Headroom>

<div class="totop-wrap">
  <Headroom bottom showAtBottom hideAtTop toleranceUp={20} offsetTop={500} offsetBottom={100}>
    <button class="totop" on:click={()=> window.scroll(0,0)}> <span class="caret">^</span> <span>To Top</span> </button>
  </Headroom>
</div>

<article class="markdown-body entry-content container-lg" itemprop="text">

  <Readme />

</article>

</div>

<style>
  :global(html, body) {
    margin: 0;
    font-family: sans-serif;
    font-size: 12pt;
  }
  :global(h3[id]:target) {
    margin-top: -3.5em;
    padding-top: 3.5em;
  }
  :global(#happy) {
    font-size: 3em;
    text-align: center;
    padding: 40vh 0;
    font-family: 'Courier New', Courier, monospace;
  }

  .topmenu-wrap {
    background: hsl(29, 100%, 40%);
    padding: 1em 0;
  }
  .topmenu {
    color: white;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: 65ch;
  }
  .topmenu .label {
    text-transform: uppercase;
    padding: 0 0.5rem;
		transform: rotate(-45deg) scaleX(0.85) skewX(-20deg);
  }
	@media screen and (min-width: 580px) {
		.topmenu .label {
			transform: rotate(0);
		}
	}

  .menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5em;
  }
  .menu a {
    color: white;
    text-decoration: none;
  }
  .menu a:hover {
    text-decoration: underline;
  }
  .totop-wrap {
    max-width: 90ch;
    margin: 0 auto;
    display: flex;
    justify-content: end;
  }

  .totop {
    margin: 2em;
    background: hsl(29, 100%, 40%);
    color: white;
    border: 0;
    padding: 0.5rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: uppercase;
    font-size: 0.667em;
    line-height: 1.5rem;
  }

  .caret {
    font-size: 4em;
    padding-top: 0.6rem;
  }

  article {
    max-width: 70ch;
    padding: 0 1.5ch;
    margin: 5em auto;
    line-height: 1.8;
  }
  :global(pre) {
    line-height: 1.25;
    font-size: 0.9em;
  }
  

</style>