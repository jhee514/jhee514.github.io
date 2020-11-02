<template>
	<div>
		<Nav />
		<full-page>
			<div class="section">
				<div>
					Pinot
				</div>
				<div>
				<button @click="$refs.fullpage.api.moveSectionDown()">
					Next
					</button>	
				</div>
				</div>
			<div class="section">
				<div>
					Noir
				</div>
				<div>
				<button @click="$refs.fullpage.api.moveSectionUp()">
					Prev
					</button>
				</div>	
			</div>
			</full-page>
	</div>

</template>
<script>
	import Nav from '@/components/nav/Nav';
	

	export default {
		name: 'Home',
		data() {
			return {
				options: {
					licenseKey: 'YOUR_KEY_HEERE',
					menu: '#menu',
					anchors: ['page1', 'page2', 'page3'],
					sectionsColor: ['#41b883', '#ff5f45', '#0798ec']
				},
			}
		},
		components: {
				Nav,
		},
	};
	

</script>

<style></style>