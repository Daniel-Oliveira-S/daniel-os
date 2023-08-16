'use client'


import Image from 'next/image'
import styles from './page.module.scss'
import profile from './assets/profile..svg'
import dev from './assets/image 1.svg'
import suport from './assets/image 2.svg'
import security from './assets/image 3.svg'
import bio from './assets/Biolinks.svg'
import calc from './assets/Calc.svg'
import cep from './assets/Cep.svg'
import tech from './assets/tech.jpg'
import food from './assets/food.jpg'
import music from './assets/music.jpg'
import entertainment from './assets/cinema.jpg'

import {GithubLogo, LinkedinLogo, InstagramLogo} from '@phosphor-icons/react'


export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <h2 className={styles.title}>Daniel Souza</h2>
        <ul className={styles.ul}>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#services">Atendimento</a></li>
          <li><a href="#social">Redes Sociais</a></li>
          <li><a className={styles.contact} href="#contact">Contato</a></li>
        </ul>
      </header>
      <main className={styles.main}>
        <section className={styles.about} id="about">
          <p>Bem-vindo(a) ao universo tecnológico de um desenvolvedor apaixonado pela programação e pelas infinitas possibilidades que a tecnologia oferece. Aqui, você conhecerá mais sobre mim e minha jornada como um desenvolvedor criativo em busca de soluções inovadoras.
            <br />
            <br />
          Meu nome é Daniel, sou um desenvolvedor dedicado com 2 anos de experiência. Minha paixão por resolver problemas complexos e transformar ideias em código é o motor que impulsiona minha carreira.
          </p>
          <Image src={profile} className={styles.image} alt="Daniel Souza" width={200} height={200} />
        </section>
        <div className={styles.divider}></div>

        <section className={styles.kind}>
          <h2>Carinho especial por segmentos de:</h2>
          <div className={styles.container}>
            <div className={styles.imgs}>
              <Image src={tech} alt='Tecnologia'  />
              <p>Tecnologia</p>
            </div>
            <div className={styles.imgs}>
              <Image src={entertainment} alt={''} />
              <p>Entrenimento e comunicação</p>
              </div>
            <div className={styles.imgs}>
            <Image src={food} alt={''} />
              <p>Comida</p>
            </div>
            <div className={styles.imgs}>
              <Image src={music} alt='' />
              <p>Música</p>
              </div>
          </div>
        </section>


        




        <div className={styles.divider}></div>
        <section className={styles.services} id="services">
          <h2>AQUI NÓS TE OFERECEMOS:</h2>
          <div className={styles.container}>
            <div className={styles.imgs}>
            <Image src={dev} alt='Desenvolvimento' width={120} height={120} />
            <p>Desenvolvimento em código</p>

            </div>
            <div className={styles.imgs}>
            <Image src={suport} alt='Suporte' width={120} height={120} />
            <p>Suporte mensal</p>

            </div>
            <div className={styles.imgs}>
            <Image src={security} alt='Segurança' width={120} height={120} />
            <p>Segurança e Gestão de rede</p>

            </div>
            
          </div>
        <div className={styles.divider}></div>
        </section>

        <section className={styles.works} id='works' > 
            <h2>TRABALHOS REALIZADOS:</h2>
          <div className={styles.img}>
            <a href="https://daniel-oliveira-s.github.io/biolinks/" target='_blank'>
              <Image src={bio} alt='Daniel Souza' className={styles.bio} width={298} height={285} />
            </a>
            <a href="https://buscador-cep-murex.vercel.app" target='_blank'>
              <Image src={cep} alt='Daniel Souza' className={styles.cep} width={298} height={285} />
            </a>
            <a href="https://investir.liv.capital" target='_blank'>
              <Image src={calc} alt='Daniel Souza' className={styles.calc} width={298} height={285} />
              </a>
          </div>
        <div className={styles.divider}></div>
          
        </section>


        <section className={styles.social} id='social'>
          <h2>REDES SOCIAIS:</h2>
          <div className={styles.socials}>
            <a href="https://github.com/Daniel-Oliveira-S" className='Github' target='_blank'>
              <GithubLogo size={40} className={styles.icon} />
            </a>
            <a href="https://www.linkedin.com/in/daniel-os/" className='LinkedIn' target='_blank'>
              <LinkedinLogo size={40} className={styles.icon} />
            </a>
            <a href="https://www.instagram.com/eudannielsz.it/" className='Instagram' target='_blank'>
              <InstagramLogo size={40} className={styles.icon} />
            </a>
          </div>
        </section>
        <div className={styles.divider}></div>

        <section className={styles.contact} id='contact'>
          <h2>CONTATO:</h2>
          <form action="">
            <input type="text" placeholder='Nome' />
            <input type="email" placeholder='Email' />
            <textarea name="" id=""  placeholder='Mensagem'></textarea>
            <button type='submit'>Enviar</button>
          </form>

          <div id="whatsapp" className={styles.whatsapp}>
            <h2>OU</h2>
              


          </div>
        </section>
        

    </main >
    </>
  )
}
