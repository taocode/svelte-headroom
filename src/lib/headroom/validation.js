const warn = (msg, val) => console.warn(`[svelte-headroom]:`, msg, val)

const timingFunctions = [
  'linear',
  'ease',
  'ease-in',
  'ease-out',
  'ease-in-out',
  'cubic-bezier()'
]

export default function validate({ duration, easing, tolerance, toleranceDown, toleranceUp, offset, offsetTop, offsetBottom }) {
  if (typeof tolerance !== "number" )
    warn("The `tolerance` prop is not a number: ", tolerance)
  if (typeof toleranceDown !== "number")
    warn("The `toleranceDown` prop is not a number: ", toleranceDown)
  if (typeof toleranceUp !== "number")
    warn("The `toleranceUp` prop is not a number: ", toleranceUp)
  if (typeof offset !== "number")
    warn("The `offset` prop is not a number: ", offset)
  if (typeof offsetTop !== "number")
    warn("The `offsetTop` prop is not a number: ", offsetTop)
  if (typeof offsetBottom !== "number")
    warn("The `offsetBottom` prop is not a number: ", offsetBottom)
  if (typeof duration !== "string")
    warn("The `duration` prop is not a string such as '200ms': ", duration)
  if (typeof easing !== "string" || ! timingFunctions.includes(easing) && ! easing.startsWith('cubic-bezier('))
    warn("The `easing` prop is not a valid timing function: ["
      + timingFunctions.reduce((p,c) => `${p}, ${c}`)
      + "], your value: ", easing)
}
