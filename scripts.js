/* global TweenLite */

// `Array.prototype.slice.call` to prevent Safari bugs when using `.map()`
const welcomeSections = Array.prototype.slice.call(document.querySelectorAll('[data-module="welcome"]'))

if (welcomeSections.length) {
  welcomeSections.map((welcomeSection) => {
    const t = welcomeSection
    t.nextSectionEl = t.querySelector('.js-next-section')

    // Always check before proceed
    if (t.nextSectionEl) {
      t.nextSectionEl.addEventListener('click', () => {
        const nextSection = t.nextElementSibling
        const offset = nextSection ? nextSection.offsetTop : 0

        if (nextSection && offset > 0) {
          // TweenLite document: https://greensock.com/tweenlite/
          TweenLite.to(window, 1, { scrollTo: offset })
        }
      })
    }
  })
}
