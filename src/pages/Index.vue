<script lang="ts">

import App from '../App.vue';
import Badge from '../components/Badge.vue'
import IconAceitacao from '../components/icons/IconAceitacao.vue';
import IconProposito from '../components/icons/IconProposito.vue';
import IconResiliencia from '../components/icons/IconResiliencia.vue'
export default {
	components: { Badge, IconResiliencia, IconProposito, IconAceitacao, App },
	data() {

	},
	setup() {



	},

}


</script>


<template>
	<!-- <App> -->
	<!-- hero -->
	<div class="flex flex-col gap-8 p-10 mt-40">
		<!-- badges -->
		<!-- <div class="grid grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
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

		</div> -->
		<!-- badges -->

		<!-- introduction -->
		<div class="flex flex-col md:flex-row lg:flex-row gap-8 justify-evenly items-center">
			<div class="flex flex-col gap-8 text-rose max-w-[400px]">
				<h1 class="text-2xl font-black">
					Atendimento presencial e online.
				</h1>
				<p class="  text-md lg:w-[400px]">
					Atendimento clínico remoto em todo o Brasil, com acompanhamento personalizado, registro detalhado
					das consultas e sigilo garantido. Ensino de técnicas de controle emocional, como relaxamento,
					controle da raiva e habilidades sociais.
				</p>
				<a target="_blank"
					href="https://api.whatsapp.com/send?phone=5565996629088&text=Ola,%20gostaria%20de%20entender%20mais%20sobre%20seu%20servi%C3%A7o,%20me%20chamo"
					class="bg-rose text-white py-2 px-8 max-w-80 rounded-full hover:bg-transparent hover:text-rose border-2 border-rose transition-all duration-150 items-center">
					<div class="flex items-center w-full justify-center">
						<i class="ri-whatsapp-line"></i>
						<p class="font-black inline-block ms-2">Contato</p>
					</div>
				</a>
			</div>
			<!-- photo and socials -->
			<div class="flex flex-col items-center gap-8">
				<!-- photo -->
				<img class="rounded-xl w-80" src="../assets/img/hero-photo.webp" alt="">
				<!-- photo -->
				<!-- socials -->
				<!-- <div class="flex  text-rose">
					<a target="_blank" class="flex gap-2 items-center justify-center"
						href="https://www.instagram.com/psi.anapaulasilva/">
						<i class="ri-instagram-line text-2xl "></i>
						Me acompanhe no Instagram
					</a>
				</div> -->
				<!-- socials -->
			</div>
			<!-- photo and socials -->
		</div>
		<!-- introduction -->


	</div>
	<!-- hero -->

	<!-- onde eu atendo -->

	<div class="my-20" id="atendimento">
		<div class="container flex flex-col justify-center mx-auto gap-20">
			<div class="mx-auto">
				<p class="text-rose text-xl font-black text-center">
					Onde eu Atendo Presencialmente?
				</p>
			</div>
			<div class="flex sm:flex-col lg:flex-row justify-between items-center mx-auto gap-40">
				<div class="flex flex-col gap-5 max-w-[400px]">
					<img class="" width="100%" src="../assets/img/revitaliza-unimed.png" alt="">
					<div class="flex  text-rose">
						<a target="_blank" class="flex gap-2 items-center justify-center bg-rose text-white py-2 px-8 rounded-full"
							href="https://www.instagram.com/revitaliza_psicologia/">
							<i class="ri-instagram-line text-2xl "></i>
							Instagram - Revitaliza
						</a>
					</div>
					<div class="flex  text-rose">
						<a target="_blank" class="flex gap-2 items-center justify-center bg-rose text-white py-2 px-8 rounded-full"
							href="https://api.whatsapp.com/send?phone=5565999800108&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o%20com%20a%20Psic%C3%B3loga%20Ana%20Paula%2C%20me%20chamo">
							<i class="ri-whatsapp-line text-2xl "></i>
							Whatsapp - Revitaliza
						</a>
					</div>
				</div>

				<iframe class="rounded-xl lg:w-[600px] sm:w-full h-[300px]"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1139.5735800613068!2d-56.05954733037993!3d-15.6035478073834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db18e8f84bc0d%3A0xbc47338dae7f2c2!2sRevitaliza%20Cl%C3%ADnica%20de%20Psicologia%20Integrada!5e1!3m2!1sen!2sbr!4v1739061275204!5m2!1sen!2sbr"
					style="border:0;" allowfullscreen="" loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"></iframe>

			</div>
		</div>
	</div>

	<!-- onde eu atendo -->

	<!-- about -->

	<div class="my-20" id="about">
		<div class="container flex flex-col justify-center mx-auto gap-20">
			<div class="mx-auto">
				<p class="text-rose text-xl font-black text-center">
					Sobre Mim
				</p>
			</div>
			<div class="flex flex-col gap-4 text-justify text-rose">
				<p>
					Olá, sou Ana Paula da Silva, psicóloga, CRP 18/7345, com sólida experiência em psicologia escolar e
					clínica, comprometida
					em promover a saúde mental e o bem-estar de crianças, adolescentes e adultos. Minha trajetória é
					guiada pela
					prática da Terapia Cognitivo-Comportamental (TCC), uma abordagem focada na resolução de conflitos e
					no
					desenvolvimento de habilidades emocionais e comportamentais.
				</p>



				<p>
					Atualmente, atuo na Secretaria de Educação do Estado de Mato Grosso, onde colaboro diretamente com a
					equipe
					pedagógica, oferecendo suporte a professores e famílias para lidar com desafios emocionais e
					comportamentais
					no ambiente escolar. Também atuo em clínica particular, fornecendo atendimento personalizado e
					acolhedor
					para cada paciente.
				</p>



				<p>
					Acredito no poder de uma comunicação respeitosa e na escuta ativa para criar um espaço seguro e
					transformador. Minha formação inclui cursos especializados em áreas como Atendimento Educacional
					Especializado, Comunicação Não-Violenta e práticas inclusivas, refletindo meu compromisso contínuo
					com a
					capacitação e o aprimoramento das minhas habilidades profissionais.
					Estou aqui para ajudar e apoiar aqueles que buscam uma vida mais equilibrada e saudável, sempre com
					ética e
					profissionalismo.
				</p>
			</div>
		</div>
	</div>

	<!-- about -->

	<!-- qa -->
	<div class="bg-rose-secondary">
		<div class="container flex flex-col gap-8 p-10 mx-auto">
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
						<p>Atendo remotamente e presencialmente.</p>
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
	</div>
	<!-- qa -->
	<!-- </App> -->


</template>