import React from 'react'
import Head from 'next/head'

import FeatureCard13 from '../components/feature-card13'
import GalleryCard12 from '../components/gallery-card12'

const SocialMediaDesign = (props) => {
  return (
    <>
      <div className="social-media-design-container">
        <Head>
          <title>Social-Media-Design - Elecnovate</title>
          <meta
            property="og:title"
            content="Social-Media-Design - Elecnovate"
          />
        </Head>
        <div className="social-media-design-features">
          <h1 className="social-media-design-text">Social Media Design</h1>
          <div className="social-media-design-container1">
            <FeatureCard13
              title="SETUP AND OPTIMIZATION"
              imageAlt="SETUP AND OPTIMIZATION"
              rootClassName="rootClassName"
            ></FeatureCard13>
            <FeatureCard13
              title="CONTENT CREATION"
              imageAlt="CONTENT CREATION"
              rootClassName="rootClassName1"
            ></FeatureCard13>
            <FeatureCard13
              title="BRANDING IDENTITY"
              imageAlt="BRANDING IDENTITY"
              rootClassName="rootClassName2"
            ></FeatureCard13>
            <FeatureCard13
              title="CONTENT CALENDARS"
              imageAlt="CONTENT CALENDARS"
              rootClassName="rootClassName3"
            ></FeatureCard13>
            <FeatureCard13
              title="SOCIAL MEDIA ADVERTISING"
              imageAlt="SOCIAL MEDIA ADVERTISING"
              rootClassName="rootClassName7"
            ></FeatureCard13>
            <FeatureCard13
              title="ANALYTICS AND REPORTING"
              imageAlt="ANALYTICS AND REPORTING"
              rootClassName="rootClassName6"
            ></FeatureCard13>
            <FeatureCard13
              title="Adapting for Different Platforms"
              imageAlt="Adapting for Different Platforms"
              rootClassName="rootClassName4"
            ></FeatureCard13>
          </div>
        </div>
        <div className="social-media-design-hero">
          <h1 className="social-media-design-text01">
            <span className="social-media-design-text02">We Creat Brands</span>
            <br></br>
          </h1>
          <span className="social-media-design-text04">
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
          <div className="social-media-design-btn-group"></div>
        </div>
        <h2 className="social-media-design-text11">Portfolio</h2>
        <div className="social-media-design-gallery">
          <GalleryCard12
            title="Posts"
            imageAlt="Posts"
            rootClassName="rootClassName"
          ></GalleryCard12>
          <GalleryCard12
            title="Carousals"
            imageAlt="Carousals"
            imageSrc="https://images.unsplash.com/photo-1579551053957-ee77f9b970c7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQ2fHx3b29kc3xlbnwwfHx8fDE2MjY0NDc1ODg&amp;ixlib=rb-1.2.1&amp;w=1000"
            rootClassName="rootClassName1"
          ></GalleryCard12>
          <GalleryCard12
            title="Stories"
            imageAlt="Stories"
            imageSrc="https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHdvb2RzfGVufDB8fHx8MTYyNjQ0NzU3Mw&amp;ixlib=rb-1.2.1&amp;w=1000"
            rootClassName="rootClassName2"
          ></GalleryCard12>
          <GalleryCard12
            title="Reels"
            imageAlt="Reels"
            imageSrc="https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxuYXR1cmV8ZW58MHx8fHwxNjI2NDQ3ODAw&amp;ixlib=rb-1.2.1&amp;w=1000"
            rootClassName="rootClassName3"
          ></GalleryCard12>
          <GalleryCard12
            title="LINKEDIN ARTICLES AND POSTS"
            imageAlt="LINKEDIN ARTICLES AND POSTS"
            imageSrc="https://images.unsplash.com/photo-1529948723647-8b7bd77b441c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxjbGlmZnxlbnwwfHx8fDE2MjY0NDc4MjQ&amp;ixlib=rb-1.2.1&amp;w=1000"
            rootClassName="rootClassName4"
          ></GalleryCard12>
          <GalleryCard12
            title="PINTEREST PINS AND BOARDS"
            imageAlt="PINTEREST PINS AND BOARDS"
            imageSrc="https://images.unsplash.com/photo-1553570739-330b8db8a925?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxvY2VhbnxlbnwwfHx8fDE2MjY0NDc4ODQ&amp;ixlib=rb-1.2.1&amp;w=1000"
            rootClassName="rootClassName5"
          ></GalleryCard12>
        </div>
        <div className="social-media-design-gallery1">
          <GalleryCard12
            title="THUMBNAIL DESIGN"
            imageAlt="THUMBNAIL DESIGN"
            rootClassName="rootClassName6"
          ></GalleryCard12>
          <GalleryCard12
            title="HEADERS &amp; COVERS"
            imageAlt="HEADERS &amp; COVERS"
            imageSrc="https://images.unsplash.com/photo-1579551053957-ee77f9b970c7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQ2fHx3b29kc3xlbnwwfHx8fDE2MjY0NDc1ODg&amp;ixlib=rb-1.2.1&amp;w=1000"
            rootClassName="rootClassName7"
          ></GalleryCard12>
          <GalleryCard12
            title="INFOGRAPHICS"
            imageAlt="INFOGRAPHICS"
            imageSrc="https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHdvb2RzfGVufDB8fHx8MTYyNjQ0NzU3Mw&amp;ixlib=rb-1.2.1&amp;w=1000"
            rootClassName="rootClassName8"
          ></GalleryCard12>
          <GalleryCard12
            title="SOCIAL MEDIA ADVERTISEMENTS"
            imageAlt="SOCIAL MEDIA ADVERTISEMENTS"
            imageSrc="https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxuYXR1cmV8ZW58MHx8fHwxNjI2NDQ3ODAw&amp;ixlib=rb-1.2.1&amp;w=1000"
            rootClassName="rootClassName9"
          ></GalleryCard12>
          <GalleryCard12
            title="BUSINESS CARDS"
            imageAlt="BUSINESS CARDS"
            imageSrc="https://images.unsplash.com/photo-1529948723647-8b7bd77b441c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxjbGlmZnxlbnwwfHx8fDE2MjY0NDc4MjQ&amp;ixlib=rb-1.2.1&amp;w=1000"
            rootClassName="rootClassName10"
          ></GalleryCard12>
          <GalleryCard12
            title="BUSINESS CARDS"
            imageAlt="BUSINESS CARDS"
            imageSrc="https://images.unsplash.com/photo-1553570739-330b8db8a925?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxvY2VhbnxlbnwwfHx8fDE2MjY0NDc4ODQ&amp;ixlib=rb-1.2.1&amp;w=1000"
            rootClassName="rootClassName11"
          ></GalleryCard12>
        </div>
      </div>
      <style jsx>
        {`
          .social-media-design-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .social-media-design-features {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: column;
          }
          .social-media-design-text {
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .social-media-design-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            align-items: flex-start;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .social-media-design-hero {
            width: 100%;
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
              url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHx3b3JrJTIwbGFwdG9wfGVufDB8fHx8MTYyNjE3NjkzMA&ixlib=rb-1.2.1&w=1500');
          }
          .social-media-design-text01 {
            color: var(--dl-color-gray-white);
            font-size: 3rem;
          }
          .social-media-design-text04 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .social-media-design-btn-group {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .social-media-design-text11 {
            font-size: 60px;
            margin-top: var(--dl-space-space-sixunits);
          }
          .social-media-design-gallery {
            width: 100%;
            display: grid;
            padding: var(--dl-space-space-threeunits);
            grid-gap: var(--dl-space-space-unit);
            max-width: 100%;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .social-media-design-gallery1 {
            width: 100%;
            display: grid;
            padding: var(--dl-space-space-threeunits);
            grid-gap: var(--dl-space-space-unit);
            max-width: 100%;
            grid-template-columns: 1fr 1fr 1fr;
          }
          @media (max-width: 1600px) {
            .social-media-design-features {
              position: relative;
              max-width: 100%;
              margin-top: var(--dl-space-space-sixunits);
            }
            .social-media-design-text {
              font-size: 3rem;
              text-align: center;
            }
            .social-media-design-container1 {
              align-self: center;
            }
            .social-media-design-hero {
              height: 406px;
            }
            .social-media-design-text01 {
              color: var(--dl-color-gray-white);
              font-size: 3rem;
            }
            .social-media-design-text11 {
              font-size: 60px;
              margin-top: var(--dl-space-space-sixunits);
              font-weight: 700;
            }
          }
          @media (max-width: 991px) {
            .social-media-design-text {
              align-self: center;
            }
            .social-media-design-container1 {
              grid-template-columns: 1fr 1fr;
            }
            .social-media-design-hero {
              flex-direction: column;
            }
            .social-media-design-text01 {
              text-align: center;
            }
            .social-media-design-text02 {
              text-align: center;
            }
            .social-media-design-text04 {
              text-align: center;
            }
            .social-media-design-gallery {
              grid-template-columns: 1fr 1fr;
            }
            .social-media-design-gallery1 {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 767px) {
            .social-media-design-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .social-media-design-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .social-media-design-gallery {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .social-media-design-gallery1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .social-media-design-features {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .social-media-design-container1 {
              grid-gap: var(--dl-space-space-halfunit);
            }
            .social-media-design-hero {
              width: 100%;
              padding: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .social-media-design-btn-group {
              flex-direction: column;
            }
            .social-media-design-gallery {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .social-media-design-gallery1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

export default SocialMediaDesign
