const tl = gsap.timeline({
  defaults: { duration: .5, ease: 'Power2.easeOut' }
});

const houseTl = gsap.timeline({
  defaults: {
    duration: 1
  }
});

// Home
const home = document.querySelector('.home');

gsap.set('.feather', { scale: 0, transformOrigin: 'center' })
home.addEventListener('click', () => {
  gsap.fromTo('.birdhouse-svg', { scale: 1 }, { scale: 0.9, yoyo: true, repeat: 1 })
  gsap.fromTo('#Roof', { y: 0, x: 0, rotation: 0 }, { y: -3, x: 1, rotation: '4deg', yoyo: true, repeat: 1 })
  houseTl.fromTo('#Feather_1', { x: 0, rotation: 0 }, { x: -20, scale: 1.5, rotation: '-90deg' })
  houseTl.fromTo('#Feather_2', { x: 0, y: 0, rotation: 0 }, { x: 20, y: -10, scale: 1.5, rotation: '90deg' }, '<')
  houseTl.fromTo('#Feather_3', { x: 0, y: 0, rotation: 0 }, { x: 10, y: 10, scale: 1.5, rotation: '90deg' }, '<')
  houseTl.fromTo('#Feather_1', { opacity: 1 }, { opacity: 0 }, '<30%')
  houseTl.fromTo('#Feather_2', { opacity: 1 }, { opacity: 0 }, '<')
  houseTl.fromTo('#Feather_3', { opacity: 1 }, { opacity: 0 }, '<')
})

// Notification
const notification = document.querySelector('.notification');

gsap.set('#Bell', { transformOrigin: 'top center' } )
gsap.set('#Tongue', { transformOrigin: 'top center' } )
gsap.set('#Sound', { opacity: 0, transformOrigin: 'bottom' } )
notification.addEventListener('click', () => {
  gsap.fromTo('#Bell', { rotation: -5 }, { rotation: 0, duration: 2, ease: "elastic.out(5, 0.2)" })
  gsap.fromTo('#Tongue', { rotation: -5, x: 0.5 }, { rotation: 0, x: 0, duration: 2, ease: "elastic.out(5, 0.2)" })
  gsap.fromTo('#Sound', { opacity: 1, scale: 0.6 }, { opacity: 0, scale: 1.3, duration: 1 })
})

// Message
const message = document.querySelector('.message');

gsap.set('#Message_head', { transformOrigin: 'top' })
message.addEventListener('click', () => {
  tl.fromTo('.message-svg', { scale: 1 }, { scale: 0.9 })
  tl.fromTo('#Message_head', { scale: 1 }, { scale: -1 }, '<50%')
  tl.fromTo('.message-svg', { scale: 0.9 }, { scale: 1 }, '<50%')
  tl.fromTo('#Message_message', { y: 0, opacity: 1 }, { y: -40, opacity: 0, duration: 0.75 })
  tl.to('#Message_head', { scale: 1 }, '<75%')
})
