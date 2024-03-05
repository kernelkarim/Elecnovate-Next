import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard16 = (props) => {
  return (
    <>
      <div className={`feature-card16-feature-card ${props.rootClassName} `}>
        <h2 className="feature-card16-text">{props.title}</h2>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="feature-card16-image"
        />
      </div>
      <style jsx>
        {`
          .feature-card16-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card16-feature-card:hover {
            transform: scale(1.02);
          }
          .feature-card16-text {
            margin-bottom: var(--dl-space-space-twounits);
          }
          .feature-card16-image {
            width: var(--dl-size-size-medium);
            height: var(--dl-size-size-medium);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius4);
          }

          @media (max-width: 1600px) {
            .feature-card16-feature-card {
              max-width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard16.defaultProps = {
  imageAlt: 'image',
  imageSrc:
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=1000',
  rootClassName: '',
  title: 'Lorem ipsum',
}

FeatureCard16.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCard16
