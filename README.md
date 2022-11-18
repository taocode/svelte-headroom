# @taocode/Svelte-Headroom

**Hide your header and footer until you need it!**

Svelte Headroom is a [Svelte](https://svelte.dev) component to hide or show your header and footer on scroll, adapted from [collardeau/svelte-headroom](https://github.com/collardeau/svelte-headroom), inspired by [headroom.js](https://wicky.nillia.ms/headroom.js/).

`@taocode/svelte-headroom` has **no dependencies**.

## Demo

[Svelte REPL](https://svelte.dev/repl/44cafd471bcf497080e12ed3bee80986?version=3.53.1)

[Grab a copy](https://github.com/taocode/svelte-headroom) and play with it directly. Run `pnpm dev` (or yarn, npm equivalents) and edit the demo test page: `src/routes/+page.svelte`

## Install

`pnpm install -D @taocode/svelte-headroom`

## Usage

```html
<script>
  import Headroom from '@taocode/svelte-headroom';
</script>

<Headroom>
  <!-- Header will be fixed at top and auto show/hide based on scroll -->
</Headroom>

```

## Props

### `tolerance` number {#tolerance}

The number of pixels that need to be scrolled in either direction for the effect to occur. This is useful if you want the user to be able to scroll slowly and not change the header position. Default: `0`.

```html

<Headroom tolerance={10}>
  <!-- will ignore any scroll less than 10px -->
</Headroom>

```
### `offsetTop` number {#offsetTop}

The number of pixels from the top of the page before the effect is allowed to occur; *controls:* `class:atTop` (useful with hideAtTop, showAtTop). Default: `2`.

```html

<Headroom offsetTop={50}>
  <!-- will show until after 50px from top -->
</Headroom>

```

### `offsetBottom` number {#offsetBottom}

The number of pixels from bottom to be considered at the bottom; *controls* `class:atBottom` (useful with hideAtBottom, showAtBottom). Default: `2`.

```html

<Headroom showAtBottom offsetBottom={150}>
  <!-- will show when within 150px of bottom -->
</Headroom>

```

### `duration` string {#duration}

The duration of the sliding effect. The value is passed on as a [CSS Transition Duration](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration). Default: `"300ms"`.

```html

<Headroom duration='500ms'>
  <!-- will take 500ms to transition -->
</Headroom>

```

### `easing` string {#easing}

The timing function (easing) of the sliding effect. The value is passed on as a [CSS Transition Timing Function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function). Default: `"linear"`.

```html

<Headroom easing='ease-out'>
  <!-- will ease-out -->
</Headroom>

```

### `bottom` boolean {#bottom}

If this is to be pinned to the bottom, like a return to top button. Default: `false`.

*Note:* you'll need to wrap a bottom pinned Headroom to use it because
it isn't 100% wide to avoid covering links and breaking the UI a bit.
You can play with heights and widths and different positioning; *see below for my favorite .totop-wrap*

```html

<div class="totop-wrap">
  <Headroom bottom>
    <!-- pinned to the bottom -->
  </Headroom>
</div>

```

### `(show|hide)At(Top|Bottom)` boolean {#ats}

If this is to be pinned to the bottom, like a return to top button. Default: `false`.

*Note:* bottom detection fails on [SVELTE REPL]().

```html

<Headroom showAtBottom>
  <!-- my header that will always show when at bottom -->
</Headroom>

<div class="totop-wrap">
  <Headroom bottom hideAtTop showAtBottom tolerance={20} shim={50}>
    <!-- footer for 'to top' button -->
    <button 
      class="totop" 
      on:click={()=> window.scroll(0,0)}
      > 
      <span class="caret">^</span> <span>To Top</span>
    </button>
  </Headroom>
</div>

<style>
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
    padding-top: 0.5rem;
  }
</style>

```

## Events

A `svelte-headroom` component emits two events: `pin` and `unpin`.

```jsx
<Headroom
  on:pin={ () => {} }
  on:unpin={ () => {} }
>
  <header>My Header</header>
</Headroom>
```

## Happy Coding! {#happy}
