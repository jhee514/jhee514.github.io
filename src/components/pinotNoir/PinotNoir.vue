<template>
	<div>
		<Nav />
		<div id="fullpage">
			<div class="section " id="section0">
				<div class="slide" id="slide1">
					<div class="content">
						<h1>
							Page
						</h1>
					</div>
				</div>
				<div class="slide" id="slide2">
					<div class="content">
						<h2>
							Slide 2
						</h2>
					</div>
				</div>
				<div class="slide" id="slide2">
					<div class="content">
						<h2>
							Slide 3
						</h2>
					</div>
				</div>
				<div class="slide" id="slide2">
					<div class="content">
						<h2>
							Slide 4
						</h2>
					</div>
				</div>
			</div>
			<div class="section" id="section2">
				<div class="content">
					<button id="myButton">hello</button>
					<button>bye</button>	
				</div>
			</div>
			<div class="section" id="section1">
				<div class="content">
					<h2>
						3
					</h2>
				</div>
			</div>
			<div class="section" id="section2">
				<div class="content">
					<h2>
						4
					</h2>
				</div>
			</div>
			<div class="section" id="section1">
				<div class="content">
					<h2>
						Last
					</h2>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  import Nav from '@/components/nav/Nav';
	import fullpage from './javascript.fullPage.js'
	fullpage('#fullpage', {
		//Navigation
		menu: '#menu',
		lockAnchors: false,
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
		navigation: false,
		navigationPosition: 'right',
		navigationTooltips: ['firstSlide', 'secondSlide'],
		showActiveTooltip: false,
		slidesNavigation: false,
		slidesNavPosition: 'bottom',

		//Scrolling
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: false,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		controlArrows: true,
		verticalCentered: true,
		sectionsColor : ['#ccc', '#fff'],
		paddingTop: '3em',
		paddingBottom: '10px',
		fixedElements: '#header, .footer',
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveSlides: false,
		parallax: false,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',

		lazyLoading: true,

		//events
		onLeave: function(index, nextIndex, direction){
			index, nextIndex, direction
			},
		afterLoad: function(anchorLink, index){
			anchorLink, index
			},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){
			isResponsive
			},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
			anchorLink, index, slideAnchor, slideIndex
			},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
			anchorLink, index, slideIndex, direction, nextSlideIndex
			}
	});


	export default {
		name: 'PinotNoir',
		data() {
			return {
        
			}
		},
		components: {
				Nav,
		},
	};
</script>

<style>
	/* Reset CSS
	* --------------------------------------- */
	body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,
	form,fieldset,input,textarea,p,blockquote,th,td {
		padding: 0;
		margin: 0;
	}
	a{
		text-decoration:none;
	}
	table {
		border-spacing: 0;
	}
	fieldset,img {
		border: 0;
	}
	address,caption,cite,code,dfn,em,strong,th,var {
		font-weight: normal;
		font-style: normal;
	}
	strong{
		font-weight: bold;
	}
	ol,ul {
		list-style: none;
		margin:0;
		padding:0;
	}
	caption,th {
		text-align: left;
	}
	h1,h2,h3,h4,h5,h6 {
		font-weight: normal;
		font-size: 100%;
		margin:0;
		padding:0;
		color:#444;
	}
	q:before,q:after {
		content:'';
	}
	abbr,acronym { border: 0;
	}

	/* Custom CSS
	* --------------------------------------- */
	body{
		font-family: arial,helvetica;
		color: #F2F2F2;
	}
	h1{
		font-size: 6em;
	}
	p{
		font-size: 2em;
	}
	.content{
		position: relative;
		top: 50%;
		transform: translateY(-50%);
		text-align: center;
	}

	/* Section 1
	* --------------------------------------- */
	#section0{
		background-color: #F6D94A;
	}
	#section0 h1{
		color: #444;
	}
	#section0 p{
		color: #333;
		opacity: 0.4;
	}


	/* Section 2
	* --------------------------------------- */
	#section1{
		background-color: #DB9DA7;
	}
	#section1 h1{
		color: #fff;
	}
	#section1 p{
		opacity: 0.8;
	}


	/* Section 3
	* --------------------------------------- */
	#section2{
		background-color: #57BFC9;
	}
	#section2 h1{
		color: #F2F2F2;
	}
	#section2 p{
		opacity: 0.6;
	}
</style>