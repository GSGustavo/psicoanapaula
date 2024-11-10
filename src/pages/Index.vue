<script lang="ts">

import App from '../App.vue';
import Badge from '../components/Badge.vue'
import IconAceitacao from '../components/icons/IconAceitacao.vue';
import IconProposito from '../components/icons/IconProposito.vue';
import IconResiliencia from '../components/icons/IconResiliencia.vue'
export default {
	components: { Badge, IconResiliencia, IconProposito, IconAceitacao, App }
}


</script>


<template>
	<!-- <App> -->
		<!-- hero -->
		<div class="flex flex-col gap-8 p-10 bg-primary">
			<!-- badges -->
			<div class="grid grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
				<Badge>
					<IconResiliencia class=" w-7 fill-rose" />
					<p class="text-rose font-black">Resiliência</p>
				</Badge>
				<Badge>
					<IconProposito class="text-primary w-7 fill-rose" />
					<p class="text-rose font-black">Propósito</p>
				</Badge>
				<Badge>
					<IconAceitacao class="text-primary w-7 fill-rose" />
					<p class="text-rose font-black">Aceitação</p>
				</Badge>

			</div>
			<!-- badges -->

			<!-- introduction -->
			<div class="flex flex-col md:flex-row lg:flex-row gap-8 justify-evenly items-center">
				<div class="flex flex-col items-center gap-8">
					<p class="font-black text-rose text-center leading-7 text-xl lg:w-[400px]">
						Atendimento clínico e acompanhamento de pacientes com base em avaliações individualizadas.
						Registro
						e acompanhamento detalhado das consultas, respeitando o sigilo e garantindo o atendimento
						humanizado. Ensino de técnicas de controle emocional, como relaxamento, controle da raiva e
						habilidades sociais.
					</p>
					<a target="_blank"
						href="https://api.whatsapp.com/send?phone=5565996629088&text=Ola,%20gostaria%20de%20entender%20mais%20sobre%20seu%20servi%C3%A7o,%20me%20chamo"
						class="bg-rose text-white py-2 px-8 rounded-full hover:bg-transparent hover:text-rose border-2 border-rose transition-all duration-150  mx-auto">
						<i class="ri-whatsapp-line"></i>
						<p class="font-black inline-block ms-2">Contato</p>
					</a>
				</div>
				<!-- photo and socials -->
				<div class="flex flex-col items-center gap-8">
					<!-- photo -->
					<img class="rounded-xl w-80" src="../assets/img/hero-photo.webp" alt="">
					<!-- photo -->
					<!-- socials -->
					<div class="flex  text-rose">
						<a target="_blank" class="flex gap-2 items-center justify-center"
							href="https://www.instagram.com/psi.anapaulasilva/">
							<i class="ri-instagram-line text-2xl "></i>
							Me acompanhe no Instagram
						</a>
					</div>
					<!-- socials -->
				</div>
				<!-- photo and socials -->
			</div>
			<!-- introduction -->


		</div>
		<!-- hero -->

		<!-- qa -->
		<div class="flex flex-col gap-8 p-10 bg-rose-secondary">
			<div>
				<p class="text-white text-xl font-black text-center">
					Perguntas Frequentes
				</p>
			</div>
			<div class="flex flex-col gap-4">

				<div class="collapse collapse-arrow bg-primary text-rose-secondary">
					<input type="radio" name="my-accordion-2" checked="checked" />
					<div class="collapse-title text-xl font-medium">
						Quais as modalidades de atendimento?
					</div>
					<div class="collapse-content">
						<p>Atendo remotamente, à domicílio e em clínica em Mirassol D'Oeste-MT</p>
					</div>
				</div>
				<div class="collapse collapse-arrow bg-primary text-rose-secondary">
					<input type="radio" name="my-accordion-2" />
					<div class="collapse-title text-xl font-medium">
						Desde quando você atua?
					</div>
					<div class="collapse-content">
						<p>Desde 2022.</p>
					</div>
				</div>



			</div>
		</div>
		<!-- qa -->
	<!-- </App> -->


</template>