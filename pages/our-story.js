import React from 'react'
import Head from 'next/head'

const OurStory = (props) => {
  return (
    <>
      <div className="our-story-container">
        <Head>
          <title>
            Our-Story - Elevate Your Brand with Stunning Graphic Design |
            Graphic Design
          </title>
          <meta
            name="description"
            content="Elevate your brand with our comprehensive solutions. From graphic designs and websites to captivating social media visuals we bring your vision to life."
          />
          <meta
            property="og:title"
            content="Our-Story -  Elevate Your Brand with Stunning Graphic Design | Graphic Design"
          />
          <meta
            property="og:description"
            content="Elevate your brand with captivating designs. 🚀 Offering expert Graphic Design, Social Media Creatives, UI/UX Excellence, and Seamless Website Design. Let's bring your ideas to life! 💡🎨"
          />
        </Head>
        <div className="our-story-hero">
          <div className="our-story-container1">
            <h1 className="our-story-text">
              Magnificent things are very simple
            </h1>
            <p className="our-story-text01">
              <br></br>
              <span>
                This story begins not as a single voice, but as a chorus of
                creative minds. At Elecnovate, each of us brings not only
                technical expertise, but also a passion for the power of visual
                communication.
              </span>
              <br></br>
              <br></br>
              <span>
                It&apos;s not about creating an aesthetically pleasing design;
                It&apos;s about creating stories visually, touching the heart
                and inspiring action. We hope our designs leave a lasting
                impression on the audience and bridge the gap between ideas and
                reality.
              </span>
              <br></br>
              <br></br>
              <span>
                Our journey is not always easy. We face challenges, develop our
                skills together, and continue to push each other to reach new
                creative heights. We&apos;ve worked on [name some notable
                project or achievement] along the way, and each experience has
                strengthened our bond and shaped our design philosophy.
              </span>
              <br></br>
              <br></br>
              <span>
                Today, we stand as a dynamic force with a common goal:
                transforming the ordinary into the extraordinary. We believe
                that design has the power to move mountains, and we dedicate our
                collective experience to creating visual stories that resonate
                and leave a lasting impression.
              </span>
              <br></br>
              <br></br>
              <span>
                Explore our portfolio and learn how our passion is translated
                into effective design solutions.
              </span>
            </p>
            <div className="our-story-btn-group"></div>
          </div>
          <img
            alt="image"
            src="https://previews.dropbox.com/p/thumb/ACMRwo_uL0YPwJedMYazAFYd1ZQWojf2RvP_GgPS0aihTjhzaPg5znyrJ7n4yz4CZaeHPldNlMdF5DQrwuzdJDH7BvN9s-Z79AN9hgKkj9fWoTdLVsIgSy9JqFgtetUjSFPDN8GDB4yNhIFY1HbzAlpgb4rzS6CWMyI-eBFW050FQAh7MQj-08V-OcHsIC4iPejLJ_tfD1WqE2zx4xKPYAXkTG2rdgYAbCylEIa7R8KNo9Dch2Cd4i1nWm6A8XLEiPxyVYQ2ABRoA1VVgndIPgW1X6uTbR4MxsnCdBWjnovani3xdhmx0bL7cS92CQWkzUYa6IrAFqOMKVZ5dz8WBWUg/p.png"
            className="our-story-image"
          />
        </div>
      </div>
      <style jsx>
        {`
          .our-story-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .our-story-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 100%;
            min-height: 80vh;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .our-story-container1 {
            display: flex;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .our-story-text {
            font-size: 3rem;
            max-width: 450px;
          }
          .our-story-text01 {
            font-size: 36;
          }
          .our-story-btn-group {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .our-story-image {
            width: 580px;
            height: 722px;
            object-fit: cover;
          }
          @media (max-width: 1600px) {
            .our-story-hero {
              width: 100%;
              max-width: 100%;
              flex-direction: column;
            }
            .our-story-text {
              width: 100%;
              max-width: 100%;
            }
            .our-story-text01 {
              font-size: 30px;
              font-family: Noto Sans;
            }
          }
          @media (max-width: 1200px) {
            .our-story-hero {
              flex-direction: row;
            }
          }
          @media (max-width: 991px) {
            .our-story-hero {
              flex-direction: column;
            }
            .our-story-container1 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .our-story-text {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .our-story-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .our-story-image {
              width: 80%;
            }
          }
          @media (max-width: 479px) {
            .our-story-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .our-story-container1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .our-story-btn-group {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default OurStory
