gsap.config({trialWarn: false});
let select = s => document.querySelector(s),
		q = gsap.utils.selector(document),
		toArray = s => gsap.utils.toArray(s),
		mainSVG = select('#mainSVG')

gsap.set('svg', {
	visibility: 'visible'
})
CustomBounce.create("myBounce", {strength: 0.26,});
let tl = gsap.timeline({
	repeat: -1,
	defaults: {
		ease: 'myBounce'
	}
}).timeScale(1)
tl.to('#small', {
	rotation: '+=90',
	transformOrigin: 'bottom left'
})
.to('#small', {
	rotation: '+=180',
	transformOrigin: 'bottom right'
})
.to('#small', {
	rotation: '+=90',
	transformOrigin: 'top right'
})
.to('#small', {
	rotation: '+=180',
	transformOrigin: 'top left'
})
.to('#small', {
	rotation: '+=90',
	transformOrigin: 'bottom left'
})
.add('scale')
.to('#small', {
	scale: 2,
	transformOrigin: 'bottom right',
	//ease: 'power3.inOut',
}, 'scale')
.to('#big', {
	scale: 0.5,
	transformOrigin: 'top left',
	//ease: 'power3.inOut'
}, 'scale')
.to('#small', {
	fill: '#EF2D56',
	ease: 'power3',
}, 'scale')
.to('#big', {
	fill: '#363537',
	ease: 'power3'
}, 'scale')
.to('g', {
	x: '+=100',
	ease: 'power3.inOut'
}, 'scale')
.to('g', {
	duration: tl.duration(),
	svgOrigin: '400 300',
	rotation: -360,
	ease: 'none'
}, 0)


//ScrubGSAPTimeline(tl)