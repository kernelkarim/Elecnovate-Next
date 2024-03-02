import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import FeatureCard11 from '../components/feature-card11'
import FeatureCard4 from '../components/feature-card4'
import GalleryCard1 from '../components/gallery-card1'
import GalleryCard11 from '../components/gallery-card11'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Elecnovate</title>
          <meta property="og:title" content="Elecnovate" />
        </Head>
        <Header></Header>
        <div className="home-hero">
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
          <div className="home-btn-group">
            <button className="home-button button">Get Started</button>
            <button className="home-button1 button">Contact us</button>
          </div>
        </div>
        <div className="home-hero1">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1529859503572-5b9d1e68e952?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjYxODI1OTE&amp;ixlib=rb-1.2.1&amp;w=1500"
            className="home-image"
          />
          <div className="home-container1">
            <h1 className="home-text08">Who we are?</h1>
            <p className="home-text09">
              <span>
                We are Two passionate and versatile graphic designers with a
                keen eye for aesthetics and a commitment to delivering visually
                compelling solutions. With a background in
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text11">
                Graphic Design &amp; Web Design
              </span>
              <span>
                , We try our best to bring a unique blend of creativity and
                technical proficiency to every project. Whether it&apos;s
                crafting engaging brand identities, designing captivating
                marketing materials, or illustrating impactful visuals, our goal
                is to transform ideas into visually stunning realities. Explore
                our portfolio to discover the diverse range of projects that
                showcase my skills, dedication, and love for the art of graphic
                design.
              </span>
            </p>
          </div>
        </div>
        <div className="home-banner">
          <h1 className="home-text13">Our Mission?</h1>
          <p className="home-text14">
            Our goal is to seamlessly integrate human-centered design principles
            with the latest digital technologies, creating seamless and
            transformative experiences for users around the world.
          </p>
          <span className="home-text15">
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
        </div>
        <div className="home-features">
          <h1 className="home-text22">Our services</h1>
          <div className="home-container2">
            <FeatureCard11
              title="Logo &amp; Branding"
              rootClassName="rootClassName"
            ></FeatureCard11>
            <FeatureCard11
              title="Photo Editing"
              rootClassName="rootClassName1"
            ></FeatureCard11>
            <FeatureCard11
              title="Print Design"
              rootClassName="rootClassName2"
            ></FeatureCard11>
            <FeatureCard11
              title="Marketing and Advertising"
              rootClassName="rootClassName3"
            ></FeatureCard11>
            <FeatureCard11
              title="Print on Demand"
              rootClassName="rootClassName7"
            ></FeatureCard11>
            <FeatureCard11
              title="UI/UX Design"
              rootClassName="rootClassName6"
            ></FeatureCard11>
            <FeatureCard11
              title="Website Design"
              rootClassName="rootClassName5"
            ></FeatureCard11>
            <FeatureCard11
              title="Social Media Designing"
              rootClassName="rootClassName4"
            ></FeatureCard11>
          </div>
        </div>
        <div className="home-features1">
          <h1 className="home-text23">
            Grow Your Business with Full-Service Graphics Designing
          </h1>
          <div className="home-separator"></div>
          <div className="home-container3">
            <div className="home-container4">
              <FeatureCard4
                title="Flexible work life"
                description="We operate beyond conventional hours; we work longer than normal. We know that the unexpected can happen, and we adapt accordingly."
                rootClassName="rootClassName1"
              ></FeatureCard4>
              <FeatureCard4
                title="Self-care &amp; wellness"
                description="At Elecnovate, I prioritize self-care and wellness, promoting balance and personal growth."
                rootClassName="rootClassName4"
              ></FeatureCard4>
              <FeatureCard4
                title="Your future"
                description="A world of endless possibilities waiting to be explored and embraced. Let's take this journey together, discover new possibilities."
                rootClassName="rootClassName3"
              ></FeatureCard4>
              <FeatureCard4
                title="A culture of belonging"
                description="At Elecnovate, we value inclusiveness by valuing each team member and creating an environment of respect and collaboration. It boosts engagement, creativity and well-being."
                rootClassName="rootClassName2"
              ></FeatureCard4>
            </div>
            <img
              alt="image"
              src="/Home/graphics%20design%20services-500h.png"
              className="home-image1"
            />
          </div>
        </div>
        <div className="home-banner1">
          <div className="home-container5">
            <h1 className="home-text24">​Our Philosophy</h1>
            <span className="home-text25">
              <span className="home-text26">
                ​At the core of our philosophy lies a deep reverence for
                creativity, innovation, and human connection. We believe in the
                power of design to transcend mere functionality, enriching lives
                and sparking meaningful interactions.
              </span>
              <br className="home-text27"></br>
              <span className="home-text28">
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
            <div className="home-container6"></div>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1pbmltYWxpc20lMjB5ZWxsb3d8ZW58MHx8fHwxNjI2MTg0NjU3&amp;ixlib=rb-1.2.1&amp;w=1000"
            className="home-image2"
          />
        </div>
        <div className="home-gallery">
          <GalleryCard1
            title="Branding &amp; Strategy"
            subtitle="Graphic Design"
            rootClassName="rootClassName"
          ></GalleryCard1>
          <GalleryCard1
            title="User Interface &amp; Experience"
            imageSrc="https://images.unsplash.com/photo-1579551053957-ee77f9b970c7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQ2fHx3b29kc3xlbnwwfHx8fDE2MjY0NDc1ODg&amp;ixlib=rb-1.2.1&amp;w=1000"
            subtitle="Graphic Design"
            rootClassName="rootClassName1"
          ></GalleryCard1>
          <GalleryCard1
            title="Photo Editing"
            imageSrc="https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHdvb2RzfGVufDB8fHx8MTYyNjQ0NzU3Mw&amp;ixlib=rb-1.2.1&amp;w=1000"
            subtitle="Graphic Design"
            rootClassName="rootClassName2"
          ></GalleryCard1>
          <GalleryCard1
            title="Marketing &amp; Advertising"
            imageSrc="https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxuYXR1cmV8ZW58MHx8fHwxNjI2NDQ3ODAw&amp;ixlib=rb-1.2.1&amp;w=1000"
            subtitle="Graphic Design"
            rootClassName="rootClassName3"
          ></GalleryCard1>
          <GalleryCard1
            title="Print on Demand"
            imageSrc="https://images.unsplash.com/photo-1529948723647-8b7bd77b441c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxjbGlmZnxlbnwwfHx8fDE2MjY0NDc4MjQ&amp;ixlib=rb-1.2.1&amp;w=1000"
            subtitle="Graphic Design"
            rootClassName="rootClassName4"
          ></GalleryCard1>
          <GalleryCard1
            title="Print Design"
            imageSrc="https://images.unsplash.com/photo-1553570739-330b8db8a925?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxvY2VhbnxlbnwwfHx8fDE2MjY0NDc4ODQ&amp;ixlib=rb-1.2.1&amp;w=1000"
            subtitle="Graphic Design"
            rootClassName="rootClassName5"
          ></GalleryCard1>
          <GalleryCard11
            title="Website Design"
            imageSrc="https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHdvb2RzfGVufDB8fHx8MTYyNjQ0NzU3Mw&amp;ixlib=rb-1.2.1&amp;w=1000"
            subtitle="Graphic Design"
            rootClassName="rootClassName2"
          ></GalleryCard11>
          <GalleryCard11
            title="Wordpress Design"
            subtitle="Web Design"
            rootClassName="rootClassName"
          ></GalleryCard11>
          <GalleryCard11
            title="Social Media Design"
            imageSrc="https://images.unsplash.com/photo-1579551053957-ee77f9b970c7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQ2fHx3b29kc3xlbnwwfHx8fDE2MjY0NDc1ODg&amp;ixlib=rb-1.2.1&amp;w=1000"
            subtitle="Graphic Design"
            rootClassName="rootClassName1"
          ></GalleryCard11>
        </div>
        <div className="home-banner2">
          <div className="home-container7">
            <h1 className="home-text31">About us</h1>
            <span className="home-text32">
              <span>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non volutpat turpis, ut tincidunt lectus. Mauris luctus
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
              <span>
                rutrum mi ut rhoncus. Integer in dignissim tortor, id egestas
                ante. Proin at enim purus. Mauris ut felis nisi.
              </span>
            </span>
            <div className="home-container8">
              <button className="home-button2 button">Subscribe</button>
            </div>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1pbmltYWxpc20lMjB5ZWxsb3d8ZW58MHx8fHwxNjI2MTg0NjU3&amp;ixlib=rb-1.2.1&amp;w=1000"
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
          .home-hero {
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
              url('/design%20graphic-1500h.jpg');
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
          .home-btn-group {
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
          .home-hero1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: 90%;
            min-height: 80vh;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image {
            width: 25rem;
            object-fit: cover;
          }
          .home-container1 {
            width: 979px;
            display: flex;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .home-text08 {
            font-size: 3rem;
          }
          .home-text09 {
            width: 100%;
            font-size: 30px;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-banner {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            background-size: cover;
            justify-content: space-between;
            background-image: url('https://images.unsplash.com/photo-1485628390555-1a7bd503f9fe?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxhcmNoaXRlY3R1cmUlMjBtaW5pbWFsfGVufDB8fHx8MTYyNjE4NDA0Mg&ixlib=rb-1.2.1&w=1500');
            background-position: center;
          }
          .home-text13 {
            font-size: 3rem;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text14 {
            font-size: 2rem;
            text-align: center;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
            letter-spacing: 2px;
          }
          .home-text15 {
            max-width: var(--dl-size-size-maxwidth);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-features {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 90%;
            flex-direction: column;
          }
          .home-text22 {
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            align-items: flex-start;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .home-features1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 85%;
            flex-direction: column;
          }
          .home-text23 {
            width: 1358px;
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-separator {
            width: 100px;
            height: 2px;
            background-color: var(--dl-color-gray-500);
          }
          .home-container3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container4 {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .home-image1 {
            width: 450px;
            height: 450px;
            object-fit: cover;
            flex-shrink: 0;
            margin-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-round);
            object-position: left;
          }
          .home-banner1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 100%;
            align-items: center;
            justify-content: space-between;
          }
          .home-container5 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-text24 {
            text-align: center;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text25 {
            margin-right: var(--dl-space-space-threeunits);
          }
          .home-container6 {
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
          .home-image2 {
            width: 300px;
            height: 300px;
            object-fit: cover;
            flex-shrink: 0;
          }
          .home-gallery {
            width: 100%;
            display: grid;
            padding: var(--dl-space-space-threeunits);
            grid-gap: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            grid-template-columns: 1fr 1fr 1fr;
          }
          .home-banner2 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            justify-content: space-between;
          }
          .home-container7 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-text31 {
            text-align: center;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text32 {
            margin-right: var(--dl-space-space-threeunits);
          }
          .home-container8 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-button2 {
            font-size: 0.75rem;
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-500);
          }
          .home-button2:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .home-image3 {
            width: 300px;
            height: 300px;
            object-fit: cover;
            flex-shrink: 0;
          }
          @media (max-width: 1600px) {
            .home-hero1 {
              max-width: 90%;
            }
            .home-text08 {
              font-size: 3rem;
            }
            .home-text09 {
              width: 100%;
              font-size: 30px;
              font-style: inherit;
              font-weight: 400;
            }
            .home-text11 {
              font-weight: 700;
            }
            .home-text14 {
              font-size: 2rem;
              font-style: normal;
              font-weight: 400;
              letter-spacing: 2px;
            }
            .home-text23 {
              width: 100%;
              font-size: 45px;
              align-self: center;
              font-style: normal;
              text-align: center;
              font-weight: 700;
            }
            .home-text24 {
              width: 100%;
              align-self: flex-start;
              text-align: left;
            }
            .home-text25 {
              width: 100%;
              font-size: 27px;
            }
            .home-banner2 {
              max-width: 100%;
            }
            .home-text31 {
              font-weight: 600;
            }
          }
          @media (max-width: 1200px) {
            .home-image {
              width: 412px;
              height: 511px;
            }
            .home-container1 {
              position: relative;
            }
            .home-text09 {
              width: 100%;
              font-size: 30px;
              font-style: normal;
              font-weight: 500;
            }
            .home-text13 {
              font-size: 3rem;
            }
            .home-text14 {
              font-size: 2rem;
              text-align: left;
              font-weight: 600;
              letter-spacing: 2px;
            }
            .home-features1 {
              max-width: 90%;
            }
            .home-text23 {
              width: 100%;
            }
            .home-text24 {
              font-weight: 600;
            }
            .home-text25 {
              font-size: 27px;
            }
            .home-text26 {
              font-size: 19px;
            }
            .home-text27 {
              font-size: 19px;
            }
            .home-text28 {
              font-size: 19px;
            }
          }
          @media (max-width: 991px) {
            .home-hero {
              flex-direction: column;
            }
            .home-text {
              text-align: center;
            }
            .home-text01 {
              text-align: center;
            }
            .home-hero1 {
              padding: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-image {
              order: 2;
            }
            .home-container1 {
              align-items: center;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-text08 {
              text-align: center;
            }
            .home-text09 {
              width: 80%;
              text-align: justify;
            }
            .home-text15 {
              width: 100%;
            }
            .home-text22 {
              align-self: center;
            }
            .home-container2 {
              grid-template-columns: 1fr 1fr;
            }
            .home-features1 {
              align-items: center;
            }
            .home-container3 {
              flex-direction: column;
            }
            .home-image1 {
              width: 300px;
              height: 300px;
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
            }
            .home-banner1 {
              flex-direction: column;
            }
            .home-container5 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-text25 {
              text-align: center;
              margin-left: var(--dl-space-space-threeunits);
            }
            .home-container6 {
              justify-content: center;
            }
            .home-image2 {
              width: var(--dl-size-size-xxlarge);
              height: var(--dl-size-size-xxlarge);
            }
            .home-gallery {
              grid-template-columns: 1fr 1fr;
            }
            .home-banner2 {
              flex-direction: column;
            }
            .home-container7 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-text32 {
              text-align: center;
              margin-left: var(--dl-space-space-threeunits);
            }
            .home-container8 {
              justify-content: center;
            }
            .home-image3 {
              width: var(--dl-size-size-xxlarge);
              height: var(--dl-size-size-xxlarge);
            }
          }
          @media (max-width: 767px) {
            .home-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-hero1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-image {
              width: 80%;
            }
            .home-container1 {
              width: 100%;
            }
            .home-text09 {
              width: 70%;
              font-size: 35px;
              font-style: normal;
              font-weight: 500;
            }
            .home-banner {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text15 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-features1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text23 {
              text-align: center;
            }
            .home-container3 {
              flex-direction: column;
            }
            .home-banner1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text25 {
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
            .home-gallery {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-banner2 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text32 {
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 576px) {
            .home-hero {
              width: 100%;
              padding: var(--dl-space-space-twounits);
              align-self: flex-start;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-btn-group {
              flex-direction: column;
            }
            .home-button1 {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
            .home-hero1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container1 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text08 {
              font-size: 3rem;
            }
            .home-text09 {
              width: 100%;
            }
            .home-features {
              width: 100%;
              max-width: 90%;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container2 {
              grid-gap: var(--dl-space-space-halfunit);
            }
            .home-features1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container4 {
              grid-template-columns: 1fr;
            }
            .home-image1 {
              width: 250px;
              height: 250px;
            }
            .home-banner1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text25 {
              width: 90%;
              text-align: justify;
            }
            .home-container6 {
              align-items: center;
              flex-direction: column;
            }
            .home-image2 {
              width: var(--dl-size-size-xlarge);
              height: var(--dl-size-size-xlarge);
            }
          }
          @media (max-width: 479px) {
            .home-banner {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-gallery {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-banner2 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container8 {
              align-items: center;
              flex-direction: column;
            }
            .home-button2 {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
            .home-image3 {
              width: var(--dl-size-size-xlarge);
              height: var(--dl-size-size-xlarge);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
