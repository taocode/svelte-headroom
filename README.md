# Svelte-Headroom

**Hide your header and footer until you need it!**

Svelte Headroom is a [Svelte](https://svelte.dev) component to hide or show your header on scroll, adapted from [collardeau/svelte-headroom](https://github.com/collardeau/svelte-headroom), inspired by [headroom.js](https://wicky.nillia.ms/headroom.js/)

`@taocode/svelte-headroom` has **no dependencies**.

## Demo

[Svelte REPL](https://svelte.dev/repl/44cafd471bcf497080e12ed3bee80986?version=3.53.1) or check the source: `src/routes/+page.svelte`

## Install

`npm install @taocode/svelte-headroom`

## Usage

```html
<script>
  import Headroom from '@taocode/svelte-headroom';
</script>

<Headroom>
  <!-- Header will be fixed and auto show/hide based on scroll -->
</Headroom>

```

## Props

### `tolerance` number

The number of pixels that need to be scrolled in either direction for the effect to occur. This is useful if you want the user to be able to scroll slowly and not change the header position. Default: `0`.

```html

<Headroom tolerance={10}>
  <!-- will ignore any scroll less than 10px -->
</Headroom>

```
### `offsetTop` number

The number of pixels from the top of the page before the effect is allowed to occur; *controls:* `class:atTop` (useful with hideAtTop, showAtTop). Default: `2`.

```html

<Headroom offsetTop={50}>
  <!-- will show until after 50px from top -->
</Headroom>

```

### `offsetBottom` number

The number of pixels from bottom to be considered at the bottom; *controls* `class:atBottom` (useful with hideAtBottom, showAtBottom). Default: `2`.

```html

<Headroom showAtBottom offsetBottom={150}>
  <!-- will show when within 150px of bottom -->
</Headroom>

```

### `duration` string

The duration of the sliding effect. The value is passed on as a [CSS Transition Duration](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration). Default: `"300ms"`.

```html

<Headroom duration='500ms'>
  <!-- will take 500ms to transition -->
</Headroom>

```

### `easing` string

The timing function (easing) of the sliding effect. The value is passed on as a [CSS Transition Timing Function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function). Default: `"linear"`.

```html

<Headroom easing='ease-out'>
  <!-- will ease-out -->
</Headroom>

```

### `bottom` boolean

If this is to be pinned to the bottom, like a return to top button. Default: `false`.

```html

<Headroom bottom>
  <!-- pinned to the bottom -->
</Headroom>

```

### `(show|hide)At(Top|Bottom)` boolean

If this is to be pinned to the bottom, like a return to top button. Default: `false`.

```html

<Headroom showAtBottom>
  <!-- my header that will always show when at bottom -->
</Headroom>

<Headroom bottom hideAtTop showAtBottom tolerance={20} shim={50}>
  <!-- footer for 'to top' button -->
</Headroom>

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

Happy Coding!
