const tl = gsap.timeline({
  defaults: { duration: 0.35, ease: 'Power2.easeOut' }
});

const home = document.querySelector('.home');

gsap.set('.feather', { scale: 0, transformOrigin: 'center' })
home.addEventListener('click', () => {
  gsap.fromTo('.birdhouse-svg', { scale: 1 }, { scale: 0.9, yoyo: true, repeat: 1 })
  gsap.fromTo('#Feather_1', { x: 0, opacity: 1, rotation: 0 }, { x: -20, scale: 1.5, rotation: '-90deg', duration: 1, opacity: 0, ease: "slow(0.1, 0.7, true)" })
})
