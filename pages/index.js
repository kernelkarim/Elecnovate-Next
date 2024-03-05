import React from 'react'
import Head from 'next/head'

import BlogPostCard4 from '../components/blog-post-card4'
import GalleryCard1 from '../components/gallery-card1'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>
            {' '}
            Elevate Your Brand with Stunning Graphic Design | Graphic Design
          </title>
          <meta
            name="description"
            content="Elevate your brand with our comprehensive solutions. From graphic designs and websites to captivating social media visuals we bring your vision to life."
          />
          <meta
            property="og:title"
            content=" Elevate Your Brand with Stunning Graphic Design | Graphic Design"
          />
          <meta
            property="og:description"
            content="Elevate your brand with captivating designs. 🚀 Offering expert Graphic Design, Social Media Creatives, UI/UX Excellence, and Seamless Website Design. Let's bring your ideas to life! 💡🎨"
          />
        </Head>
        <div className="home-sec1">
          <h1 className="home-text">Let&apos;s maintain visual harmony!</h1>
          <span className="home-text01">
            <span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <br></br>
            <span>
              <span>
                Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </span>
          <div className="home-sec1-btn-group">
            <button className="home-button button">Get Started</button>
            <button className="home-button1 button">Contact us</button>
          </div>
        </div>
        <div className="home-our-missio-sec">
          <div className="home-banner">
            <h1 className="home-text08">Our Mission</h1>
            <span className="home-text09">
              <span>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.
                  Integer in dignissim tortor. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed non volutpat turpis. Mauris
                  luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Sed
                  non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.
                  Integer in dignissim ortor.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
            <span className="home-text13">
              Our goal is to seamlessly integrate human-centered design
              principles with the latest digital technologies, creating seamless
              and transformative experiences for users around the world.
            </span>
            <button className="home-button2 button">Contact us</button>
          </div>
          <img
            alt="Elecnovate Mission"
            src="/Home/blue%203d%20modern%20freelancer%20tips%20checklist%20instagram%20post1-1500h.png"
            loading="lazy"
            className="home-image"
          />
        </div>
        <h1 className="home-text14">
          ​Grow Your Business with Full-Service Graphics Designing
        </h1>
        <div className="home-blog">
          <BlogPostCard4
            date="​Flexible work life"
            label="Flexible work life"
            imageSrc="https://previews.dropbox.com/p/thumb/ACMlKSvEtm0iAlL5Xlgb797EpU3ruSrNgMwOJUykAUYKKKgmnn2_hzxA_fLwd7KYiZxHj6URJS4PkzoK9G8GFgO_kP4GfcsJzo641b6st5JI7PmKhSJAdzznx6adjQz0KleS8Utg5-Xc-s4bsUHi726W4ihi58YgSSTf_Mpkd9mr4VELY67gjTpo6NGP7gpbwq5aRoLK4qWhR3K0opFGU-N6D3neK4Vmx6NY-IiOWTUNhYtO77YOQmIFPkQRCfk1HBx84C5XFyQac8f-hvCt_mENu5bUMTWd5vxYDaz_WfL_GzM_jLwxee4YrZBl5qKKp97FjYa69tfPr_1tQnAapPr-/p.png"
            description="​We operate beyond conventional hours; we work longer than normal. We know that the unexpected can happen, and we adapt accordingly."
            rootClassName="rootClassName1"
          ></BlogPostCard4>
          <div className="home-container1">
            <BlogPostCard4
              date="​A culture of belonging"
              label="Nature"
              imageSrc="https://previews.dropbox.com/p/thumb/ACMpZjOOAh7DUUaoatkdWGmqcMGNjC82teSjXnZCGb2xZO_xwKfe6NalYpDsWSV4kyTNdkYZxgY7cg3hnYj77TPdcKFXchK4ezwUlYs9CxPUPZQGNROi9IwY5P6wQmzwX5bUptb_H13oe-vTPREALoG4J7jZRcvi7XRsR89y2Kt4y2isyQr3u6hhtTzhKLkbnCjQ9b9LZS115A0mjbAwpWJJW7_OTJNkMC7BmiEJQfsjTh-NfDvh3Kjy7VWuhH-RsALH43Ux1XdeqIvmvvkwvbHE-IPG1V-H7Z4CwCTSh1VPY4bhpxHI7FqEjPhVSLS6Ltt27FdPEiz8tVgbYZQ6cTEX/p.png"
              description="​At Elecnovate, we value inclusiveness by valuing each team member and creating an environment of respect and collaboration. It boosts engagement, creativity and well-being."
              rootClassName="rootClassName2"
            ></BlogPostCard4>
            <BlogPostCard4
              date="​Self-care &amp; wellness"
              imageSrc="https://previews.dropbox.com/p/thumb/ACM34ERaA68beWbUuMfu1IFZYlTfSX1Kqzv6U0pMAr2GzHdrlnU4dmndbXKJVmKoB0vVdNDpNj2FMzm8NDPowZUjFiAmmIMOlOwOfkf7FkJAVrwsYrMvzUfDLbVsRm571_JMtXtQoTw3C2-GUlnOtVhY9Xz7s91zaAe18XCQs5VZ5a4wab9nw_tNrl6xSZ_iDtBOsDzLhEDL8-CevkmDsRX0bd2ZcouZ4hGzqMi6bNwNy5TFPCbzxe47QrkqoxWD7ngzOTVjcgZ_ip9dSHSViHb6DAcfSwPCwx_Vz7zI0KwVoFtATwNsQcTZIghVCi7xhP4sIQvYqdWf4l47A8g1QEnk/p.gif"
              description="​At Elecnovate, I prioritize self-care and wellness, promoting balance and personal growth."
              rootClassName="rootClassName3"
            ></BlogPostCard4>
          </div>
          <BlogPostCard4
            date="​Your future"
            imageSrc="https://previews.dropbox.com/p/thumb/ACOhd7fcNF0fOr-CKs5U40CzVjd27xxuN4bwqqMc2tnkbTJjGyLXCu-oNj9BJY-kj1vGphEMkr2eJVJ2eAWXl1rNWkfwb94utzTU0JZy_k-GXpr-aHXGHKsmZx2oh9dHGxEVE8OZ3Vl0fOPQtGWz6eg4RDVm4Cuh8hPswk9gsDVRlUNEp56CiT7aVq-BExehtpJ5hpurRyda-c7qNyuhPkAD8dR-tDq0UtTNbgqxPzuYpzVMyi0BHVRXxoIb5mPHpLmWk1T3Gph52JBUAfNb98IpJHV2Dabv9g2vTVqbwby5zH8ZMOm9GQfBDXWEXsusa_9_NJDn9wgKXj3ZT5a88zTt/p.png"
            description="​A world of endless possibilities waiting to be explored and embraced. Let's take this journey together, discover new possibilities."
            rootClassName="rootClassName4"
          ></BlogPostCard4>
        </div>
        <div className="home-banner1">
          <div className="home-container2">
            <h1 className="home-text15">​Our Philosophy</h1>
            <span className="home-text16">
              <span className="home-text17">
                ​At the core of our philosophy lies a deep reverence for
                creativity, innovation, and human connection. We believe in the
                power of design to transcend mere functionality, enriching lives
                and sparking meaningful interactions.
              </span>
              <br className="home-text18"></br>
              <span className="home-text19">
                ​We champion a holistic approach that marries form with
                function, aesthetics with usability, and emotion with
                technology. Every project is a canvas where we blend artistry
                with precision, crafting experiences that resonate with
                authenticity and purpose.
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <div className="home-container3"></div>
          </div>
          <img
            alt="image"
            src="/Home/elecnovate%20philosophy.svg"
            loading="lazy"
            className="home-image1"
          />
        </div>
        <div className="home-portfolio-sect">
          <span className="home-text22">
            <span className="home-text23">Our Services</span>
            <br></br>
          </span>
          <div className="home-gallery">
            <GalleryCard1
              title="Logo Design"
              imageAlt="Logo Design"
              imageSrc="https://previews.dropbox.com/p/thumb/ACO40Zek2IcQXTJSsZS9u2jyGkJix0x2IkiTbhxhniE2UFyTLGauNlne5wj8vtDtjEH5K6Fp-liLCvofRgwEsLuY4IJVtc9DwdEaVrXCQI69pAMsd7ICzf_rjD9JxUGZPcoMBItcjqrzqy8dYccIYIV_miEL4xJti8AM3tH_x6z-bz_zBX5zwNwb19uDyxFYA7YsyXvnvXmikUbyJ9L4yrv6Hyhhml_75orLqTYzrwGDHcON3Gn57IUjhg-4ImczNruhLqRgSWOHk7AFXOxlgcGeSJAWKqkAl-AnmhDopKuu2mUXhFe3O3w0HEC3-dM_8nfDcrC8lPbv-ljlO4qb45ERsmP7GCe_CUY5duuJmTEZjqfze36hF96SfgfVwsjNgtHC2Xbt6h7evNpyC_kvqGE-/p.png"
              rootClassName="rootClassName"
            ></GalleryCard1>
            <GalleryCard1
              title="BRAND DESIGN &amp; STRATREGY"
              imageAlt="BRAND DESIGN &amp; STRATREGY"
              imageSrc="https://previews.dropbox.com/p/thumb/ACNDedF3kePOxOTfosLlU5IClH1hzjJlq9JvNBI12Womz1SqAl2FBUHONgdhKFkrWw22GlYHRlL3J9bZyqBODKNm8V9U6NakcvkU75-8rzf2P6dhhZ1Y52l6ljpV6whCgebvLu20FUOkk32taHeMKi5bgnKhBdpC0T3T0g1SUf9k6payxXNVwOJUQxGDAzTqVJfwZg0-gQTs7k8efrxVRxNcjLVdExAfbSN9sko7VmjZAGfZ6eYJhLwpX6JXrBgETtXFWT3AeqQxqpADB37TU4E7jYdlzw4LyYhtvo3P4GSp-U7iqAMKkEX56Zuas6krBTVOK6-q0vSJQsfZnXW3hdEu/p.gif"
              rootClassName="rootClassName1"
            ></GalleryCard1>
            <GalleryCard1
              title="USER INTERFACE"
              imageAlt="USER INTERFACE"
              imageSrc="https://previews.dropbox.com/p/thumb/ACOoKrk5GHf4VPrIHcqII1A_yGippm0HbofNTLpJafH-0IdgUtqa0l27fVf6RjgWO7AYv4mD36qdAgowcrF4HsiqYHJyCdq9LltSvcoDsuEXxaEwRoSwwKUwtOLgI6nOGO8h5Vg_R8EADuNNZ4anmWF1z3i2jdj1ukdPNGN5RH4LPfcy6lWsu2RWD0xXzZcyGPikB6NH2IC3rmxEE63TGOAw2QryfpZYdEChCTirJASES5Oy7JY0kQHVlUpc9Mw_yP_NyXgXyUgk5ab5NbIwJYCjzW4b4I6uvaD2HgZPFDWXWnb3XPO1qDmsZqX5pjg0mchDHCBV2jBCiqlsrtk7jJEh/p.png"
              rootClassName="rootClassName2"
            ></GalleryCard1>
            <GalleryCard1
              title="USER EXPERIENCE"
              imageAlt="USER EXPERIENCE"
              imageSrc="https://previews.dropbox.com/p/thumb/ACPKdKlqAz4zU3hG8iDH1fZnd2PY_DDOEVkqFNKo2knvD0o5ea7fu5ssqCu4J63ieO1V32ikKEnkLgCv5KzLQNHMbVac9gUIxZAyp8ZHXdXB8ZhyWjC-vtwdsr6TlAYS8X4Zi75ncM1dK2oW1EYkzJvMr6YKFGtm85WUhgdX2lP7Qa1ORyU6950QzEDOCjSf5g7RVLOL8UOxZBTBXQGrPWSdcWIwWeCkrOcCo0AAYpYSdKc8FmR1leJgD2CbSosxNZ5xmfcDADA4uiux1D7f_9YIwk_Bpx1XtGqoDCPaM5-WHXR9Fm9gYXa4u9JXB0sikIy36mx6yd6BLXWIlCZ6zDOn/p.png"
              rootClassName="rootClassName3"
            ></GalleryCard1>
            <GalleryCard1
              title="PHOTO EDITING"
              imageAlt="PHOTO EDITING"
              imageSrc="https://previews.dropbox.com/p/thumb/ACODn9XXOSuXOpwfUTWol8ZlwHn7VfNKo0yhDJgngoeZIPNLB2EupOrQAz-974L4GujJyI-U0_hIdKBjjdS38bude42ptsqNWHNJt3RchSAaKcnZAYcuUCDIpGiBVSn21rXISgPDS4z82yEmCzjzQcNs5VaQqBc3gsM4n9txQD7enn2b-0i0-bclttAVdbZektXpzH4fm916cOcXKwqc78ZzouSCbvIKzR8LVQiL7l1Fn1l4dM9-z6a57ptYRUwpBsmaNYQ5oWMmFoIWyEkGabaUAGxpOljX0W1qLCDCHAQmUmQYuenBkvFGxbHBZAe2vKKJKUIrtF0HmgjVwEpnn5YQ/p.png"
              rootClassName="rootClassName4"
            ></GalleryCard1>
            <GalleryCard1
              title="MARKETING AND ADVERTISING"
              imageAlt="MARKETING AND ADVERTISING"
              imageSrc="https://previews.dropbox.com/p/thumb/ACNHa4UUaUSTepV2hpCcsEoF0iGACdZAwMmrR37lmjEttoySOf3FBhekECDXvrXEjnyUnPPBdyjI_FflDmK4670MBXGI5vxDkfyjoIT0Nlymmj2NjL0a1xOBReZD89KeN3BWNcSkzQWoNGzeFmJ1fNiILHw4uH8kzuqmL_2T1e_k09i_8_hRoDwoXpofVVlNglEAKbnQCy2Ji5_2Tq9-CgpwX98mJf_ya10od9yqiozleJZ6BHaiHqcy_FjGcWX10_PRkKqyQIEtrcQktyt8-zwJ8N63EX9sSwwE65uAtwpuI2bj-JH4SHoROkElrdCFz9B36lW3vnBYoJs5GTzAO-au/p.png"
              rootClassName="rootClassName5"
            ></GalleryCard1>
          </div>
          <div className="home-gallery1">
            <GalleryCard1
              title="PRINT ON DEMAND"
              imageAlt="PRINT ON DEMAND"
              imageSrc="https://previews.dropbox.com/p/thumb/ACNWhBvnTn2leW2GVuj44nMOnuQ8kpL0z-0hPYhmp-Cl3eYar_zinqMIRU5K-3X2wXC4JGIAGhoWKWOo0SqNidGP95nEuJy7KfYIQ8kfjySwRGTzDnXR5RgI4ZeyXsVE_a14dr4gs41XuK0J838E3Sd_SoT9ci_OHbAY--kVxCcVyLdOzhhmFxlORPQw0arU6Vt36z-5xEeD-_P-v3Vy61pPP3oMnCzKbqEH_CZtuH52uX-ghmU8mUFAqL1zJIwm0r5cehjCTU89E0v_vRhmEGp9PZurvhyp9g8L8uG4tbYcJVitJkmQPSIDUQ39AU4tyeW1_o552gg5COf3K5RSmt3W/p.png"
              rootClassName="rootClassName6"
            ></GalleryCard1>
            <GalleryCard1
              title="RESPONSIVE DESIGN"
              imageAlt="RESPONSIVE DESIGN"
              imageSrc="https://previews.dropbox.com/p/thumb/ACMHoEvvGIJIcKCFGY2pPMhQSRN7-Mjs3ZWWw_5mMId4-zVlTbrPuNYxo_lCvH4NPBhxq3FJF0VIs4So3YINk1SnbXC75Dd1M5cExaHn1KMP6_Dlxqpj7gLjuNeAxpxsfUA7lv-P0JJoGI9GP4Bg10193JY5fWHZmWORsZyeE6jKwFqB1lK27ZZ4sG480CbpaMi_TSYtxUnT6Y8vkVsQfNm6aCqITzJiw-wOo267jeAI841vUdWvgNt8tCFsnInwgV0gbzhxXSvLh40A3RRwgsSzgix3lFZoTVfWQJbH4BEROImkW3su4i9u0qkfid1Ay6ZnDhVOfU420GqPjB8Tl__O/p.png"
              rootClassName="rootClassName7"
            ></GalleryCard1>
            <GalleryCard1
              title="PRINT DESIGN"
              imageAlt="PRINT DESIGN"
              imageSrc="https://previews.dropbox.com/p/thumb/ACO3ZNIrqdS0Lf64wR1xIa_PvjETeLkf73NpM_Ug0TMSzmwYGV9IL29DnqjPtkqqsPkGg7MD-4VYd4loxlKXyrvS9SqpQ_MZOa_acuJZeQ1GcAO849RCBpFjfxbqG3IYVRqW21bqFy1rTSpBQDfulmlE0mS1ntVZbnHVEbAUr-k9Iywd2wvRW6YSinrW01jFu9peNsQOMQJSOP9s9gsLtbPWDDp951c3Ih-0LE87r6he1wLlswY4hE8h5oAbIeailNcpfjdGNOIzTCAxiUcI8JwNatbdXRkcvmTQHIFxpA1damkKEDYhbrpwD-xFtqJueUgRGXkj5eXAwoMtuJepvIQ7/p.png"
              rootClassName="rootClassName8"
            ></GalleryCard1>
            <GalleryCard1
              title="WEBSITE DESIGN"
              imageAlt="WEBSITE DESIGN"
              imageSrc="https://previews.dropbox.com/p/thumb/ACNxpD1BXCiepkTSKcxkCSZFVNTcvzEZysRDb5sCk_mz0-SkD1GSPLBaDs4qfuDA2WAey51pw-H7sME7MsWXBgzhIpk6VnEKfrDD-zfLYUltucl8XrY1IAXgV_Wxto0aCyegqHenBl3WXPI_jVFKg1YWHvPTb1yn1g2IVpTdUgcZJvxAuludaD0xg-EAN0oRg5Ka3Z9_lIYDIS_M1dCm_fjndGUlQML_6xUEznRCkBJhD5TgBl1OAMd9b2X3QPaM9oYfsGV2qRlVMRYq2CkJYVelj-bOrCjcj8_3r5gEtIJEboMgNE8O2-BciJwqQ6dml_Sz4huMPaKDT9reW8kqZ4rp8ncVxtSvPz1TbPiP3NQKDug20xCec6GCT696SDfAnpGtkpBCMubUTVhmi-mxMvsxsCJ7ETPyEq7RNA2aEpyNK-wxpYAqtseMkKbVSMFJV-3Mj-MufSoF8t4VKTP-Fh8gdjokxgZ81PSjpcEI6X4zDe_IqrkAnceLPoc1I6gGxvKsk5n3ekrgsPa4ZHZt-IDFHetXexqLsck0qdWFPO8fYCx4Mc8jABzMo9vGHvTVLO9PVpNQbt4DArKL-hHQRAqW/p.gif"
              rootClassName="rootClassName9"
            ></GalleryCard1>
            <GalleryCard1
              title="WORDPRESS &amp; CMS DESIGN"
              imageAlt="WORDPRESS &amp; CMS DESIGN"
              imageSrc="https://previews.dropbox.com/p/thumb/ACO8ZruI1b5_TrjCK_OJ9Be0Lq5DJCgdxK5ut2N8cuJHd8nAVTxA37iZwymsMkIgtAV_jp7lfe6lrgqEec0t_U88Avpa7NVr2BYR0W4s92bynaR2KG5ug8P6iY_OH7_Q00btSgascqiZSkP1DqEcHpezLZ4dfp9ww0TngEvwbjEZ66hY9Dn6BGCp7PV-b6NeaEt7ocNkXGGGq86HK7Hx-714phi6wEEifWAZHM3Sx5nUOOYIgG-q2_HabNnw1NbW3H0Qs7kI8IUJGTYXPAMiENzw67Anv8AQ5ryUj9Oh-5hrZnbuG010DOWePpnzGEQMqK8UwhC4-uT0bRk-doNwtahn/p.png"
              rootClassName="rootClassName10"
            ></GalleryCard1>
            <GalleryCard1
              title="SOCIAL MEDIA DESIGN"
              imageAlt="SOCIAL MEDIA DESIGN"
              imageSrc="https://previews.dropbox.com/p/thumb/ACOQLGkcHKS5NeFfO9tJu57RJI5f_qbmUQP4fboqPkfFVY2eX8gR4CQPDeUyOdetSvbmXbpx-e48JIphy7zgwUbyPaV9YeSR5UspkYJtGN4Ta2ztbLAvKU5T0fApqoRA9bSLUbmZFcky89r0sePxiqhZ9xC_-aHHuGQSoOYhR9F__rqBkdgGxK_xbiEGpg738Pxn-mcdOJrXZUPLPxBnhGqjz7bk92oXpOjWaykif5U-A1Zu6yTMqzH5uHzSGZyxDwyPBnE-a0VPx8MlRnnaI54KqQpQj4_JqFGIqu915eIHqmfARe05DRVRgFHuJ93Lir3wIxJ9u_aCSjHQ3sjSO983/p.png"
              rootClassName="rootClassName11"
            ></GalleryCard1>
          </div>
        </div>
        <div className="home-about-us">
          <div className="home-container4">
            <h1 className="home-text25">About us</h1>
            <span className="home-text26">
              At Elecnovate, we&apos;re not just a team of designers; we&apos;re
              a collective passionate about redefining the design services
              landscape. Our journey begins with a simple belief: every pixel,
              every line, and every color has the potential to tell an
              interesting story.
            </span>
          </div>
          <img
            alt="image"
            src="https://previews.dropbox.com/p/thumb/ACMs9X1p_cxNVawAa7X-B1R-vfs51NJ8Qdpv_UcvbexiGajBkxWEV5XNjRhSAJKxgXu3qC_P1gAJyf3wgTDw6tRM645Bk-RunDrwbl3npE6NiXjvUeFNI6Nx4tMXG-OIymBHiRngC9SeYBSAI9N3p1eWYyLjafcPpTPakQKxVe8999ojame1oyQRfzzkxiXpQC2_eLpveBNpy6lTM7SxyHTUbUkY1VXo5ItT8pIy1UCyddJBj_4Y7Lz0GgpMrdqiH5_nZZjsDsQRtC-LKG8Lz7CLk7chDYagpXaORL6VB7sXIoFRXJBKkePvI9zQc1x-WBNi4MWzAxV8StsGfl_PuhY8GAeFqwTdFnB3BPlOhDdwRgYAEXW0tOiL3nFhtXXjlzTk2FJ2G6k7tCvHVzKJq8pC46B_wWbLdq4cGoHf5xg8GyRPq_13cd2OtjQqw6Q4Ovgv0aP0wd-X4kjul9tojh5zEwyOJCSX8hbM2s_FO1Eg1zR5n3fY0hVK6NsgRDJblIUocXIb7G5L4l5H5iw2JbxTiZ9bcsU4hQB0JD8lIvQrKqYVwR6WOJeiGk6yBFfzP-re2hyvqv5HIogbw7UCw4ga/p.gif"
            loading="lazy"
            className="home-image2"
          />
        </div>
        <div className="home-hero">
          <div className="home-container5">
            <h1 className="home-text27">Who we are?</h1>
            <span className="home-text28">
              <span>
                We are passionate and versatile graphic designers with a keen
                eye for aesthetics and a commitment to delivering visually
                compelling solutions.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                With a background in Graphic Design &amp; Web Design, We try our
                best to bring a unique blend of creativity and technical
                proficiency to every project. Whether it&apos;s crafting
                engaging brand identities, designing captivating marketing
                materials, or illustrating impactful visuals, our goal is to
                transform ideas into visually stunning realities.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                Explore our portfolio to discover the diverse range of projects
                that showcase my skills, dedication, and love for the art of
                graphic design.
              </span>
            </span>
            <div className="home-btn-group">
              <button className="home-button3 button">Get Started</button>
              <button className="home-button4 button">Learn More</button>
            </div>
          </div>
          <img
            alt="image"
            src="https://previews.dropbox.com/p/thumb/ACOGW3I9gqajWs5eVr2ilb0FW_pHXX_0MJplWgKiOpbDxzYUwuZDpQcIErT3WqNE4_8PyNyG17yirtwVjBWu7HJD8nVgCtWcYYU0PdB6mTgFQesTx8Q8yY-2LsRctxDykGvDW5jasQX4fbC6x4XH1hNELede4ZScryqMvHi9NGge7sovRY26KTs0_QEclS8qooEebnbT8MGInsecOCQF9I3s2pbCJT6ADvfDLY7lSRDLCGshzvuOKghqWd50H1o4d5bCx08gfk3FywOyEOlQg_4E4IsevWXDlm4I-AUiWuW54874DTsFvzHXfxXWp0hp2T0k1ww9pgYtAo-882cKvzJV/p.png"
            className="home-image3"
          />
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-sec1 {
            width: 100%;
            height: 752px;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: linear-gradient(
                113.8deg,
                rgba(255, 76, 92, 0.8) 7.5%,
                rgba(255, 177, 70, 0.8) 94.47%
              ),
              url('/Home/design%20graphic-1500h.jpg');
            background-position: top left, center;
          }
          .home-text {
            color: var(--dl-color-gray-white);
            font-size: 3rem;
          }
          .home-text01 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-sec1-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-button {
            font-size: 0.75rem;
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
          }
          .home-button:hover {
            transform: scale(1.02);
          }
          .home-button1 {
            color: var(--dl-color-gray-white);
            font-size: 0.75rem;
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-white);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            background-color: transparent;
          }
          .home-button1:hover {
            transform: scale(1.02);
          }
          .home-our-missio-sec {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #faeed1;
          }
          .home-banner {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-text08 {
            font-size: 3rem;
            text-align: center;
          }
          .home-text09 {
            max-width: var(--dl-size-size-maxwidth);
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text13 {
            font-size: 28;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-button2 {
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-button2:hover {
            transform: scale(1.02);
          }
          .home-image {
            width: 45rem;
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text14 {
            width: 100%;
            font-size: 36;
            align-self: center;
            margin-top: var(--dl-space-space-fourunits);
            text-align: center;
          }
          .home-blog {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 100%;
            align-items: center;
            justify-content: space-between;
          }
          .home-container1 {
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-banner1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 100%;
            align-items: center;
            justify-content: space-between;
            background-color: #3d405b;
          }
          .home-container2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-text15 {
            color: #ffffff;
            text-align: center;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text16 {
            color: #ffffff;
            margin-right: var(--dl-space-space-threeunits);
          }
          .home-container3 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-image1 {
            color: var(--dl-color-gray-black);
            width: 300px;
            height: 300px;
            object-fit: cover;
            flex-shrink: 0;
          }
          .home-portfolio-sect {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text22 {
            font-size: 60px;
            margin-top: var(--dl-space-space-threeunits);
            font-weight: 700;
          }
          .home-gallery {
            width: 100%;
            display: grid;
            padding: var(--dl-space-space-threeunits);
            grid-gap: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            grid-template-columns: 1fr 1fr 1fr;
          }
          .home-gallery1 {
            width: 100%;
            display: grid;
            padding: var(--dl-space-space-threeunits);
            grid-gap: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            grid-template-columns: 1fr 1fr 1fr;
          }
          .home-about-us {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            justify-content: space-between;
          }
          .home-container4 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-text25 {
            text-align: center;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text26 {
            font-size: 28;
            margin-right: var(--dl-space-space-threeunits);
          }
          .home-image2 {
            width: 448px;
            height: 300px;
            object-fit: cover;
            flex-shrink: 0;
          }
          .home-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 100%;
            min-height: 80vh;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
            background-color: #feece2;
          }
          .home-container5 {
            display: flex;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-text27 {
            font-size: 3rem;
            max-width: 450px;
          }
          .home-text28 {
            font-size: 28px;
          }
          .home-btn-group {
            display: none;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .home-button3 {
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-button3:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .home-button4 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            border-color: transparent;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-button4:hover {
            border-color: var(--dl-color-gray-black);
          }
          .home-image3 {
            width: var(--dl-size-size-xxlarge);
            object-fit: cover;
          }
          @media (max-width: 1600px) {
            .home-sec1 {
              background-position: top left, center;
            }
            .home-our-missio-sec {
              height: 755px;
            }
            .home-text13 {
              font-size: 24;
            }
            .home-button2 {
              font-size: 100%;
            }
            .home-text14 {
              font-size: 32;
            }
            .home-banner1 {
              background-color: #3d405b;
            }
            .home-text15 {
              color: #ffffff;
              width: 100%;
              align-self: flex-start;
              text-align: left;
            }
            .home-text16 {
              color: #ffffff;
              width: 100%;
              font-size: 27px;
              font-family: Noto Sans Mono;
            }
            .home-about-us {
              max-width: 100%;
            }
            .home-text25 {
              font-weight: 600;
            }
            .home-text26 {
              font-size: 24;
            }
            .home-image2 {
              width: 464px;
              border-radius: 16px;
            }
            .home-text27 {
              font-size: 3rem;
            }
            .home-text28 {
              font-size: 26;
            }
            .home-btn-group {
              display: none;
              margin-top: var(--dl-space-space-unit);
              margin-bottom: 0px;
            }
            .home-image3 {
              width: 376px;
              height: 434px;
            }
          }
          @media (max-width: 1200px) {
            .home-our-missio-sec {
              background-color: #feece2;
            }
            .home-text13 {
              font-size: 20;
            }
            .home-text15 {
              font-weight: 600;
            }
            .home-text16 {
              font-size: 27px;
            }
            .home-text17 {
              font-size: 19px;
            }
            .home-text18 {
              font-size: 19px;
            }
            .home-text19 {
              font-size: 19px;
            }
            .home-text22 {
              font-size: 45;
            }
            .home-text23 {
              font-size: 45;
            }
            .home-text26 {
              font-size: 20;
            }
            .home-text28 {
              font-size: 22;
            }
            .home-image3 {
              width: 289px;
              height: 386px;
            }
          }
          @media (max-width: 991px) {
            .home-sec1 {
              flex-direction: column;
            }
            .home-text {
              text-align: center;
            }
            .home-text01 {
              text-align: center;
            }
            .home-our-missio-sec {
              flex-direction: column;
            }
            .home-text09 {
              max-width: 100%;
            }
            .home-text13 {
              font-size: 18;
            }
            .home-image {
              width: 80%;
            }
            .home-text14 {
              font-size: 28;
            }
            .home-banner1 {
              flex-direction: column;
            }
            .home-container2 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-text16 {
              text-align: center;
              margin-left: var(--dl-space-space-threeunits);
            }
            .home-container3 {
              justify-content: center;
            }
            .home-image1 {
              width: var(--dl-size-size-xxlarge);
              height: var(--dl-size-size-xxlarge);
            }
            .home-gallery {
              grid-template-columns: 1fr 1fr;
            }
            .home-gallery1 {
              grid-template-columns: 1fr 1fr;
            }
            .home-about-us {
              flex-direction: column;
            }
            .home-container4 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-text26 {
              font-size: 18;
              text-align: center;
              margin-left: var(--dl-space-space-threeunits);
            }
            .home-image2 {
              width: 488px;
              height: var(--dl-size-size-xxlarge);
            }
            .home-hero {
              flex-direction: column;
            }
            .home-container5 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .home-text27 {
              text-align: center;
            }
            .home-text28 {
              font-size: 18;
            }
            .home-image3 {
              width: var(--dl-size-size-xxlarge);
              height: 100%;
            }
          }
          @media (max-width: 767px) {
            .home-sec1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-our-missio-sec {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-banner {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text09 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-text13 {
              font-size: 17;
            }
            .home-blog {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-container1 {
              flex: 0 0 auto;
              margin-left: 0px;
              margin-right: 0px;
            }
            .home-banner1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text16 {
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
            .home-text22 {
              font-size: 35px;
              font-weight: 700;
            }
            .home-gallery {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-gallery1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-about-us {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text26 {
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
            .home-image2 {
              width: 352px;
              height: 204px;
            }
            .home-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-image3 {
              width: 212px;
              height: 100%;
            }
          }
          @media (max-width: 576px) {
            .home-sec1 {
              width: 100%;
              padding: var(--dl-space-space-twounits);
              align-self: flex-start;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-sec1-btn-group {
              flex-direction: column;
            }
            .home-button1 {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
            .home-text14 {
              font-size: 22;
            }
            .home-banner1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text16 {
              width: 90%;
              text-align: justify;
            }
            .home-container3 {
              align-items: center;
              flex-direction: column;
            }
            .home-image1 {
              width: var(--dl-size-size-xlarge);
              height: var(--dl-size-size-xlarge);
            }
            .home-image2 {
              width: 100%;
            }
            .home-image3 {
              width: 65%;
              height: 100%;
            }
          }
          @media (max-width: 479px) {
            .home-our-missio-sec {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-banner {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-blog {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-gallery {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-gallery1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-about-us {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-image2 {
              width: var(--dl-size-size-xlarge);
              height: var(--dl-size-size-xlarge);
            }
            .home-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container5 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-btn-group {
              flex-direction: column;
            }
            .home-button4 {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
