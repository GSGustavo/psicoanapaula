<script>
	import Logo from '../components/icons/Logo.vue'
    export default {
        components: {Logo}
    }
</script>

<template>
    <header class="flex p-5 justify-between items-center bg-rose text-white">
		<div >
			<a href="www.google.com">
				<Logo fill="white" class="w-[150px]"/>
			</a>
		</div>
		<div>
			<i class="cursor-pointer ri-menu-line text-5xl"/>
		</div>
	</header>
</template>