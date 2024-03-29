import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import {
  AiOutlineWhatsApp,
  AiFillLinkedin,
  AiOutlineMail,
} from 'react-icons/ai'

import Image from 'next/image'
import Foto from '../../public/Foto.png'
import Error from '../../public/error.png'
import code from '../../public/code.png'
import design from '../../public/design.png'
import consulting from '../../public/consulting.png'
import web1 from '../../public/web1.png'
import web2 from '../../public/web2.png'
import web3 from '../../public/web3.png'
import web4 from '../../public/web4.png'
import web5 from '../../public/web5.png'
import web6 from '../../public/web6.png'
import { useState } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Portfolio - Mario Arita</title>
        <meta name="description" content="My first portfolio in react" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-100 px-10 dark:bg-neutral-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-fira">Developed by:</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="font-fira text-center p-10">
            <h2 className="text-4xl text-cyan-600 font-semibold py-1">
              Mario Arita
            </h2>
            <h3 className="text-2xl text-pink-700 font-medium py-1">
              Developer and Desingner.
            </h3>
            <p className="text-lg text-gray-900 dark:text-amber-300 font-medium	py-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              similique debitis nam quisquam, quibusdam voluptatem consequuntur?
              Dolore enim aliquam a officiis officia ullam nulla ex error
              dolorum incidunt, quam commodi.
            </p>
          </div>

          <div className="flex justify-center gap-16 text-indigo-900 dark:text-lime-500 text-4xl cursor-pointer	">
            <AiOutlineWhatsApp />
            <a href="https://www.linkedin.com/in/mario-arita-139527226/">
              <AiFillLinkedin />
            </a>
            <a href="mailto:marioarita502@gmail.com?Subject=Aquí%20el%20asunto%20del%20mail">
              <AiOutlineMail />
            </a>
          </div>

          <div className="mx-auto bg-gradient-to-b from-sky-300 to-sky-100 rounded-full w-72 h-72 relative overflow-hidden mt-10 md:h-80 md:w-80">
            <Image src={Foto} layout="fill" objectFit="cover" />
          </div>
        </section>

        <section>
          <div className="font-fira text-center p-10">
            <h3 className="text-2xl text-pink-700 font-medium py-1">
              Services i offer
            </h3>
            <p className="text-lg text-gray-900 dark:text-amber-300 font-medium	py-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              quam itaque quae eligendi aliquid laboriosam sequi unde animi est
              hic, harum velit eos eveniet! Ex officiis quam accusantium
              consequuntur autem.
            </p>
            <p className="text-lg font-medium py-2 leading-8 text-gray-900 dark:text-amber-300">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
              maxime suscipit cumque sunt nobis beatae?
              <span className="text-cyan-600"> agencies </span>
              consulted for <span className="text-cyan-600">Lorem. </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              labore ad, porro aliquid inventore ex nulla voluptatem tenetur
              ullam nemo.
            </p>
            <p className="text-lg font-medium py-2 leading-8 text-gray-900 dark:text-amber-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae quisquam ullam tempora illo saepe sequi, fugit
              exercitationem rem voluptatem. Voluptas eum nobis ipsa rem
              deleniti ratione placeat omnis voluptatem voluptates!
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              {/* <Image src={design} width={100} height={100} /> */}
              <h3 className="text-lg font-medium pt-8 pb-2  ">Designer</h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                veritatis.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              {/* <Image src={code} width={100} height={100} /> */}
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                programming languages
              </h3>
              <h4 className="py-4 text-teal-600">programming languages i used</h4>
              <p className="text-gray-800 py-1">Kotlin</p>
              <p className="text-gray-800 py-1">CSS</p>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">SQL & NoSQL (JSON)</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              {/* <Image src={consulting} width={100} height={100} /> */}
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Lorem, ipsum dolor.
              </h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo quos perspiciatis error. Eaque, maiores nisi.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>
        <section >
        <Image src={Error}/>
        </section>
      </main>
    </div>
  )
}
