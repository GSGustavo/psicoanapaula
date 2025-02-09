<script>
import { RouterLink } from 'vue-router';
import Logo from '../components/icons/Logo.vue'

export default {
	components: { Logo, RouterLink },
	methods: {
		prevent(e) {
			e.preventDefault();

			document.getElementById("atendimento").scrollIntoView({
				behavior: "smooth", // Faz a rolagem ser suave
				block: "start" // Alinha o elemento ao topo da tela
			});
		},
		preventabout(e) {
			e.preventDefault();

			document.getElementById("about").scrollIntoView({
				behavior: "smooth", // Faz a rolagem ser suave
				block: "start" // Alinha o elemento ao topo da tela
			});
		}
	}
}
</script>

<template>
	<header class="flex items-center justify-center  py-5 px-10   text-white top-0 fixed w-full">
		<div class="container flex justify-between items-center w-full bg-rose px-20 py-5 rounded-xl "
			style="backdrop-filter: blur(8px); background-color: hsla(341, 61%, 38%, .8);">
			<div>
				<a href="/">
					<Logo fill="white" class="w-[150px]" />
				</a>
			</div>
			<div>
				<div class="drawer lg:hidden">
					<input id="my-drawer" type="checkbox" class="drawer-toggle" />
					<div class="drawer-content">
						<!-- Page content here -->
						<label for="my-drawer" class="drawer-button"><i
								class="cursor-pointer ri-menu-line text-5xl" /></label>
					</div>
					<div class="drawer-side">
						<label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
						<ul class="menu min-h-full w-80 p-4 gap-2 bg-rose text-primary">
							<!-- Sidebar content here -->
							<li>
								<a href="/">
									<Logo fill="white" class="w-[150px]" />
								</a>
							</li>
							<li>
								<RouterLink to="/about">Sobre Mim</RouterLink>
							</li>
							<li>
								<a target="_blank"
									href="https://api.whatsapp.com/send?phone=5565996629088&text=Ola,%20gostaria%20de%20entender%20mais%20sobre%20seu%20servi%C3%A7o,%20me%20chamo">
									<i class="ri-whatsapp-line"></i>
									Me chame no Whatsapp
								</a>
							</li>
							<li>
								<a target="_blank" href="https://www.instagram.com/psi.anapaulasilva/">
									<i class="ri-instagram-line "></i>
									Me acompanhe no Instagram
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="sm:hidden lg:flex">
					<ul class="flex items-center gap-8">
						<!-- <RouterLink to="/about">
							<li
								class="border-b-2 border-b-primary p-4 hover:bg-primary hover:text-rose transition-all duration-100">
								Sobre Mim
							</li>
						</RouterLink> -->

						<li
							class="border-b-2 border-b-primary p-4 hover:bg-primary hover:text-rose transition-all duration-100">
							<a v-on:click="preventabout" href="#about">Sobre Mim</a>
						</li>
						<li
							class="border-b-2 border-b-primary p-4 hover:bg-primary hover:text-rose transition-all duration-100">
							<a v-on:click="prevent" href="#atendimento">Atendimento</a>
						</li>

						<li>
							<a target="_blank" href="https://www.instagram.com/psi.anapaulasilva/">
								<i class="ri-instagram-line text-3xl"></i>
							</a>
						</li>

					</ul>
				</div>

			</div>
		</div>

	</header>
</template>