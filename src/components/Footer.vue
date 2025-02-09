<script>
import Logo from '../components/icons/Logo.vue'
    export default {
        components: {Logo}
    }
</script>

<template>
    <footer class="flex py-5 px-10 justify-center items-center bg-rose">
		<div >
			<a href="/">
				<Logo class="w-[150px] fill-primary"/>
			</a>
		</div>
	
	</footer>
	<div class="w-full items-center justify-center flex p-2">
		<p class=" text-gray-900  flex">
			Feito com
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='24' height='24' class="inline mx-2"
				fill="red">
				<path
					d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z">
				</path>
			</svg>
			<a target="_blank" href="https://gavproducoes.com.br/">por Gav Produções.</a>
		</p>
	</div>
</template>