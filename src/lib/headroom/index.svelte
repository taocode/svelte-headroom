<script>
	import { createEventDispatcher, onMount } from 'svelte'
	import validate from './validation'

	export let duration = '300ms'
	export let offset = 0
	export let tolerance = 0
	export let bottom = false
	export let hideAtBottom = false
	export let hideAtTop = false
	export let showAtBottom = false
	export let showAtTop = false

	let headerClass = 'pin'
	let lastHeaderClass = 'pin'
	let y = 0
	let lastY = 0
	let atTop = true
	let atBottom = false
	let win

	const dispatch = createEventDispatcher()

	onMount(() => {
		win = window
	})

	function deriveClass(y = 0, scrolled = 0) {
		if (y < offset) return 'pin'
		if (!scrolled || Math.abs(scrolled) < tolerance) return headerClass
		const dir = scrolled < 0 ? 'down' : 'up'
		if (dir === 'up') return 'pin'
		if (dir === 'down') return 'unpin'
		return headerClass
	}

	function updateClass(y = 0) {
		const scrolledPxs = lastY - y
		const result = deriveClass(y, scrolledPxs)
		lastY = y
		return result
	}

	function action(node) {
		node.style.transitionDuration = duration
	}

	$: {
		validate({ duration, offset, tolerance })
		headerClass = updateClass(y)
		atTop = y <= 2
		atBottom = win && win.innerHeight + win.pageYOffset >= document.body.offsetHeight - 2
		if (headerClass !== lastHeaderClass) {
			dispatch(headerClass ? 'unpin' : 'pin')
		}
		lastHeaderClass = headerClass
	}
</script>
<svelte:window bind:scrollY={y} />
<div
	use:action
	class={headerClass}
	class:bottom
	class:atTop
	class:atBottom
	class:showAtTop
	class:hideAtTop
	class:showAtBottom
	class:hideAtBottom
>
	<slot />
</div>

<style>
	div {
		position: fixed;
		width: 100%;
		top: 0;
		transition: transform 300ms linear;
	}
	.bottom {
		top: auto;
		bottom: 0;
		width: auto;
		/* so a single back to top button, for example, doesn't cover (and block) page links */
	}
	.pin,
	.atTop.showAtTop.unpin,
	.atBottom.showAtBottom.unpin {
		transform: translateY(0%);
	}
	.unpin,
	.atTop.hideAtTop,
	.atBottom.hideAtBottom {
		transform: translateY(-100%);
	}
	.bottom.unpin,
	.bottom.atTop.hideAtTop,
	.bottom.atBottom.hideAtBottom {
		transform: translateY(100%);
	}
</style>