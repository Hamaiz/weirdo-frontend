import React, { useEffect } from 'react'
import Head from 'next/head'

// Imports
import Layout from '../components/Layout'

// Styles
import style from '../styles/about.module.scss'

const about = () => {
  return (
    <Layout>
      <Head>
        <title>Weirdo | About</title>
      </Head>
      <div className='container'>
        <div className={style.about}>
          <div className={style.about_main} id='about'>
            <div className={style.about_heading}>About Us</div>
            <div className={style.about_description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              omnis veritatis maxime sapiente? Incidunt commodi, quidem id
              cumque dolorum quis ipsa, corrupti repellendus accusantium
              obcaecati dignissimos optio sapiente nam rem inventore molestiae
              adipisci natus aspernatur laborum libero fugit harum facere
              quisquam qui. Aperiam eos consequuntur quidem culpa libero eius,
              rerum dicta a esse commodi! Nemo, laboriosam sequi quae maxime
              modi illum at assumenda aliquid eligendi voluptatum voluptates
              soluta ex suscipit beatae, officia quidem eveniet magni culpa,
              inventore ipsum in dolores porro similique? Rerum quis debitis
              alias doloribus quos. Sint nisi, aliquam suscipit sunt asperiores
              deleniti, unde eius ratione hic totam rerum! Blanditiis labore
              voluptas vero accusantium ut similique voluptates, eaque beatae
              quibusdam quasi nam nemo, iure amet libero corrupti accusamus,
              dolore omnis doloremque quidem quisquam. Odit est laudantium velit
              similique impedit!
            </div>
          </div>

          <div className={style.about_main} id='privacy'>
            <div className={style.about_heading}>Privacy Policy</div>
            <div className={style.about_sideheading}>Lorem ipsum</div>
            <div className={style.about_description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              omnis veritatis maxime sapiente? Incidunt commodi, quidem id
              cumque dolorum quis ipsa, corrupti repellendus accusantium
              obcaecati dignissimos optio sapiente nam rem inventore molestiae
              adipisci natus aspernatur laborum libero fugit harum facere
              quisquam qui. Aperiam eos consequuntur quidem culpa libero eius,
              rerum dicta a esse commodi! Nemo, laboriosam sequi quae maxime
              modi illum at assumenda aliquid eligendi voluptatum voluptates
              soluta ex suscipit beatae, officia quidem eveniet magni culpa,
              inventore ipsum in dolores porro similique? Rerum quis debitis
              alias doloribus quos. Sint nisi, aliquam suscipit sunt asperiores
              deleniti, unde eius ratione hic totam rerum! Blanditiis labore
              voluptas vero accusantium ut similique voluptates, eaque beatae
              quibusdam quasi nam nemo, iure amet libero corrupti accusamus,
              dolore omnis doloremque quidem quisquam. Odit est laudantium velit
              similique impedit!
            </div>
            <div className={style.about_sideheading}>Lorem ipsum</div>
            <div className={style.about_description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              omnis veritatis maxime sapiente? Incidunt commodi, quidem id
              cumque dolorum quis ipsa, corrupti repellendus accusantium
              obcaecati dignissimos optio sapiente nam rem inventore molestiae
              adipisci natus aspernatur laborum libero fugit harum facere
              quisquam qui. Aperiam eos consequuntur quidem culpa libero eius,
              rerum dicta a esse commodi! Nemo, laboriosam sequi quae maxime
              modi illum at assumenda aliquid eligendi voluptatum voluptates
              soluta ex suscipit beatae, officia quidem eveniet magni culpa,
              inventore ipsum in dolores porro similique? Rerum quis debitis
              alias doloribus quos. Sint nisi, aliquam suscipit sunt asperiores
              deleniti, unde eius ratione hic totam rerum! Blanditiis labore
              voluptas vero accusantium ut similique voluptates, eaque beatae
              quibusdam quasi nam nemo, iure amet libero corrupti accusamus,
              dolore omnis doloremque quidem quisquam. Odit est laudantium velit
              similique impedit!
            </div>
            <div className={style.about_sideheading}>Lorem ipsum</div>
            <div className={style.about_description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              omnis veritatis maxime sapiente? Incidunt commodi, quidem id
              cumque dolorum quis ipsa, corrupti repellendus accusantium
              obcaecati dignissimos optio sapiente nam rem inventore molestiae
              adipisci natus aspernatur laborum libero fugit harum facere
              quisquam qui. Aperiam eos consequuntur quidem culpa libero eius,
              rerum dicta a esse commodi! Nemo, laboriosam sequi quae maxime
              modi illum at assumenda aliquid eligendi voluptatum voluptates
              soluta ex suscipit beatae, officia quidem eveniet magni culpa,
              inventore ipsum in dolores porro similique? Rerum quis debitis
              alias doloribus quos. Sint nisi, aliquam suscipit sunt asperiores
              deleniti, unde eius ratione hic totam rerum! Blanditiis labore
              voluptas vero accusantium ut similique voluptates, eaque beatae
              quibusdam quasi nam nemo, iure amet libero corrupti accusamus,
              dolore omnis doloremque quidem quisquam. Odit est laudantium velit
              similique impedit!
            </div>
            <div className={style.about_sideheading}>Lorem ipsum</div>
            <div className={style.about_description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              omnis veritatis maxime sapiente? Incidunt commodi, quidem id
              cumque dolorum quis ipsa, corrupti repellendus accusantium
              obcaecati dignissimos optio sapiente nam rem inventore molestiae
              adipisci natus aspernatur laborum libero fugit harum facere
              quisquam qui. Aperiam eos consequuntur quidem culpa libero eius,
              rerum dicta a esse commodi! Nemo, laboriosam sequi quae maxime
              modi illum at assumenda aliquid eligendi voluptatum voluptates
              soluta ex suscipit beatae, officia quidem eveniet magni culpa,
              inventore ipsum in dolores porro similique? Rerum quis debitis
              alias doloribus quos. Sint nisi, aliquam suscipit sunt asperiores
              deleniti, unde eius ratione hic totam rerum! Blanditiis labore
              voluptas vero accusantium ut similique voluptates, eaque beatae
              quibusdam quasi nam nemo, iure amet libero corrupti accusamus,
              dolore omnis doloremque quidem quisquam. Odit est laudantium velit
              similique impedit!
            </div>
          </div>

          <div className={style.about_main} id='terms'>
            <div className={style.about_heading}>Terms & Conditions</div>
            <div className={style.about_sideheading}>Lorem ipsum</div>
            <div className={style.about_description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              omnis veritatis maxime sapiente? Incidunt commodi, quidem id
              cumque dolorum quis ipsa, corrupti repellendus accusantium
              obcaecati dignissimos optio sapiente nam rem inventore molestiae
              adipisci natus aspernatur laborum libero fugit harum facere
              quisquam qui. Aperiam eos consequuntur quidem culpa libero eius,
              rerum dicta a esse commodi! Nemo, laboriosam sequi quae maxime
              modi illum at assumenda aliquid eligendi voluptatum voluptates
              soluta ex suscipit beatae, officia quidem eveniet magni culpa,
              inventore ipsum in dolores porro similique? Rerum quis debitis
              alias doloribus quos. Sint nisi, aliquam suscipit sunt asperiores
              deleniti, unde eius ratione hic totam rerum! Blanditiis labore
              voluptas vero accusantium ut similique voluptates, eaque beatae
              quibusdam quasi nam nemo, iure amet libero corrupti accusamus,
              dolore omnis doloremque quidem quisquam. Odit est laudantium velit
              similique impedit!
            </div>
            <div className={style.about_sideheading}>Lorem ipsum</div>
            <div className={style.about_description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              omnis veritatis maxime sapiente? Incidunt commodi, quidem id
              cumque dolorum quis ipsa, corrupti repellendus accusantium
              obcaecati dignissimos optio sapiente nam rem inventore molestiae
              adipisci natus aspernatur laborum libero fugit harum facere
              quisquam qui. Aperiam eos consequuntur quidem culpa libero eius,
              rerum dicta a esse commodi! Nemo, laboriosam sequi quae maxime
              modi illum at assumenda aliquid eligendi voluptatum voluptates
              soluta ex suscipit beatae, officia quidem eveniet magni culpa,
              inventore ipsum in dolores porro similique? Rerum quis debitis
              alias doloribus quos. Sint nisi, aliquam suscipit sunt asperiores
              deleniti, unde eius ratione hic totam rerum! Blanditiis labore
              voluptas vero accusantium ut similique voluptates, eaque beatae
              quibusdam quasi nam nemo, iure amet libero corrupti accusamus,
              dolore omnis doloremque quidem quisquam. Odit est laudantium velit
              similique impedit!
            </div>
            <div className={style.about_sideheading}>Lorem ipsum</div>
            <div className={style.about_description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              omnis veritatis maxime sapiente? Incidunt commodi, quidem id
              cumque dolorum quis ipsa, corrupti repellendus accusantium
              obcaecati dignissimos optio sapiente nam rem inventore molestiae
              adipisci natus aspernatur laborum libero fugit harum facere
              quisquam qui. Aperiam eos consequuntur quidem culpa libero eius,
              rerum dicta a esse commodi! Nemo, laboriosam sequi quae maxime
              modi illum at assumenda aliquid eligendi voluptatum voluptates
              soluta ex suscipit beatae, officia quidem eveniet magni culpa,
              inventore ipsum in dolores porro similique? Rerum quis debitis
              alias doloribus quos. Sint nisi, aliquam suscipit sunt asperiores
              deleniti, unde eius ratione hic totam rerum! Blanditiis labore
              voluptas vero accusantium ut similique voluptates, eaque beatae
              quibusdam quasi nam nemo, iure amet libero corrupti accusamus,
              dolore omnis doloremque quidem quisquam. Odit est laudantium velit
              similique impedit!
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default about
