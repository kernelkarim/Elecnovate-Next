import React from 'react'

import PropTypes from 'prop-types'

const GalleryCard3 = (props) => {
  return (
    <>
      <div className={`gallery-card3-gallery-card ${props.rootClassName} `}>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="gallery-card3-image"
        />
      </div>
      <style jsx>
        {`
          .gallery-card3-gallery-card {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .gallery-card3-image {
            top: 0px;
            left: 0px;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 100%;
            display: none;
            position: absolute;
            object-fit: cover;
          }
        `}
      </style>
    </>
  )
}

GalleryCard3.defaultProps = {
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  imageSrc:
    'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjY0NDg1NTk&ixlib=rb-1.2.1&h=1000',
  rootClassName: '',
  imageAlt: 'image',
  title: 'Project Title',
  fffffdgffdfdffd: 'Text',
}

GalleryCard3.propTypes = {
  subtitle: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
  fffffdgffdfdffd: PropTypes.string,
}

export default GalleryCard3
