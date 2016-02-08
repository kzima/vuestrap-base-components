/**
 * Other utilities for demo pages
 *
 */

// pulled from http://stackoverflow.com/questions/1349404/generate-a-string-of-5-random-characters-in-javascript
export function makeid() {
  let text = ''
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}

// check if browser support css3 transitions
export function csstransitions() {
  const style = document.documentElement.style
  return (
      style.webkitTransition !== undefined ||
      style.MozTransition !== undefined ||
      style.OTransition !== undefined ||
      style.MsTransition !== undefined ||
      style.transition !== undefined
  )
}

/**
 * change location utility supports v-link like paths or hrefs
 *
 * @param {Element} el
 * @param {String} event
 * @param {Object} [args]
 */
export const changeLocation = (router, link) => {
  if (!link) return
  if (router) {
    router.go(link)
  } else {
    window.location.href = link
  }
}
