import React from 'react'

import PropTypes from 'prop-types'

const GalleryCard13 = (props) => {
  return (
    <>
      <div className={`gallery-card13-gallery-card ${props.rootClassName} `}>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="gallery-card13-image"
        />
        <h2 className="gallery-card13-text">{props.title}</h2>
        <span className="gallery-card13-text1">{props.subtitle}</span>
      </div>
      <style jsx>
        {`
          .gallery-card13-gallery-card {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .gallery-card13-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery-card13-text {
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .gallery-card13-text1 {
            color: var(--dl-color-gray-500);
            align-self: flex-start;
          }

          @media (max-width: 767px) {
            .gallery-card13-gallery-card {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .gallery-card13-image {
              height: 10rem;
            }
          }
        `}
      </style>
    </>
  )
}

GalleryCard13.defaultProps = {
  subtitle: 'Lorem ipsum dolor sit amet',
  rootClassName: '',
  imageAlt: 'image',
  title: 'Project Title',
  imageSrc:
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&h=1200',
}

GalleryCard13.propTypes = {
  subtitle: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default GalleryCard13
