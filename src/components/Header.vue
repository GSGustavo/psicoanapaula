<script>
import { RouterLink } from 'vue-router';
import Logo from '../components/icons/Logo.vue'

export default {
	components: { Logo, RouterLink }
}
</script>

<template>
	<header class="flex py-5 px-10 justify-between items-center bg-rose text-white">
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
				<ul>
					<RouterLink to="/about">
						<li
							class="border-2 rounded-full border-primary p-4 hover:bg-primary hover:text-rose transition-all duration-100">
							Sobre Mim
						</li>
					</RouterLink>


				</ul>
			</div>

		</div>
	</header>
</template>