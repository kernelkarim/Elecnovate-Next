import React from 'react'
import Head from 'next/head'

const DevelopmentExcellenceHub = (props) => {
  return (
    <>
      <div className="development-excellence-hub-container">
        <Head>
          <title>Development-Excellence-Hub - Elecnovate</title>
          <meta
            property="og:title"
            content="Development-Excellence-Hub - Elecnovate"
          />
        </Head>
        <div className="development-excellence-hub-hero">
          <div className="development-excellence-hub-container1">
            <h1 className="development-excellence-hub-text">
              <span className="development-excellence-hub-text01">
                Design Excellence Hub
              </span>
              <br></br>
              <br></br>
            </h1>
            <span>
              <span>At the Core of Our Business is Development Excellence</span>
              <br></br>
              <span>Empowering Your Vision with Cutting-Edge Solutions</span>
              <br></br>
              <br></br>
              <span className="development-excellence-hub-text10">
                🚀 Our Commitment:
              </span>
              <br></br>
              <span>
                Striving for excellence, we go beyond conventional development.
                We pledge to deliver not just code but a foundation for your
                success—a testament to our unwavering commitment to your goals.
              </span>
              <br></br>
              <br></br>
              <span className="development-excellence-hub-text15">
                💡 Innovation &amp; Efficiency:
              </span>
              <br></br>
              <span>
                Our development philosophy revolves around innovation and
                efficiency. We harness the latest technologies to build
                solutions that not only meet your current needs but are
                future-ready. Efficiency isn&apos;t just a goal; it&apos;s
                ingrained in every line of code we write.
              </span>
              <br></br>
              <br></br>
              <span className="development-excellence-hub-text20">
                🌐 Scalability by Design:
              </span>
              <br></br>
              <span>
                Anticipating growth is integral to our approach. We architect
                scalable solutions, ensuring your platform evolves seamlessly
                with your expanding user base and business requirements.
                Scalability isn&apos;t an afterthought; it&apos;s woven into the
                fabric of our development process.
              </span>
              <br></br>
              <br></br>
              <span className="development-excellence-hub-text25">
                🧪 Thorough Testing, Zero Compromises:
              </span>
              <br></br>
              <span>
                Quality is non-negotiable. We believe in delivering solutions
                that stand the test of real-world scenarios. Rigorous testing at
                every stage ensures a robust, bug-free, and reliable product.
                Your peace of mind is our priority.
              </span>
              <br></br>
              <br></br>
              <span className="development-excellence-hub-text30">
                🤝 Collaborative Development Journey:
              </span>
              <br></br>
              <span>
                Your project is not just an assignment; it&apos;s a
                collaboration. We involve you at every step, ensuring your
                vision aligns seamlessly with the development process. Your
                feedback isn&apos;t just welcome; it&apos;s essential to shaping
                the success of the final product.
              </span>
              <br></br>
              <br></br>
              <span className="development-excellence-hub-text35">
                ✨ Beyond Solutions, Building Legacies:
              </span>
              <br className="development-excellence-hub-text36"></br>
              <span>
                Our focus extends beyond mere development; we are here to build
                legacies. The solutions we create are not just functional; they
                are transformative—catalysts for your continued success.
              </span>
              <br></br>
              <br></br>
              <span>
                Join Us on the Journey of Innovation and Excellence. Let&apos;s
                Develop Tomorrow Together.
              </span>
              <br></br>
              <br></br>
            </span>
            <button className="development-excellence-hub-button button">
              Explore Services
            </button>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1471086569966-db3eebc25a59?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxtaW5pbWFsaXNtJTIwcGxhbnR8ZW58MHx8fHwxNjI2MTgyODMw&amp;ixlib=rb-1.2.1&amp;w=1200"
            className="development-excellence-hub-image"
          />
        </div>
      </div>
      <style jsx>
        {`
          .development-excellence-hub-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .development-excellence-hub-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .development-excellence-hub-container1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .development-excellence-hub-text {
            font-size: 3rem;
          }
          .development-excellence-hub-button {
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .development-excellence-hub-button:hover {
            transform: scale(1.02);
          }
          .development-excellence-hub-image {
            width: 45rem;
            margin-top: var(--dl-space-space-twounits);
          }
          @media (max-width: 1600px) {
            .development-excellence-hub-text {
              font-size: 3rem;
            }
            .development-excellence-hub-text10 {
              font-size: 20px;
              font-weight: 700;
            }
            .development-excellence-hub-text15 {
              font-size: 20px;
              font-weight: 700;
            }
            .development-excellence-hub-text20 {
              font-size: 20px;
              font-weight: 700;
            }
            .development-excellence-hub-text25 {
              font-size: 20px;
              font-weight: 700;
            }
            .development-excellence-hub-text30 {
              font-size: 20px;
              font-weight: 700;
            }
            .development-excellence-hub-text35 {
              font-size: 20px;
              font-weight: 700;
            }
            .development-excellence-hub-text36 {
              font-size: 20px;
              font-weight: 700;
            }
            .development-excellence-hub-button {
              align-self: flex-start;
            }
          }
          @media (max-width: 991px) {
            .development-excellence-hub-hero {
              flex-direction: column;
            }
            .development-excellence-hub-container1 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .development-excellence-hub-text {
              text-align: center;
            }
            .development-excellence-hub-text01 {
              text-align: center;
            }
            .development-excellence-hub-image {
              width: 80%;
            }
          }
          @media (max-width: 767px) {
            .development-excellence-hub-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .development-excellence-hub-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .development-excellence-hub-container1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .development-excellence-hub-button {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default DevelopmentExcellenceHub
