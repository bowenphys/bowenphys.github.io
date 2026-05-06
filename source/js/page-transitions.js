( () => {
  const enter = () => {
    const target = document.querySelector('#content-inner')
    if (!target) return
    target.classList.add('is-entering')
    target.addEventListener('animationend', () => target.classList.remove('is-entering'), { once: true })
  }

  const leave = () => {
    const target = document.querySelector('#content-inner')
    if (!target) return
    target.classList.add('is-leaving')
  }

  document.addEventListener('pjax:complete', enter)
  document.addEventListener('DOMContentLoaded', enter)
  document.addEventListener('pjax:send', leave)
})()
