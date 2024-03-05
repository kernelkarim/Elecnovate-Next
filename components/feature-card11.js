import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard11 = (props) => {
  return (
    <>
      <div className={`feature-card11-feature-card ${props.rootClassName} `}>
        <h2 className="feature-card11-text">{props.title}</h2>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="feature-card11-image"
        />
      </div>
      <style jsx>
        {`
          .feature-card11-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: 100%;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card11-feature-card:hover {
            transform: scale(1.02);
          }
          .feature-card11-text {
            font-size: 32;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .feature-card11-image {
            width: var(--dl-size-size-xxlarge);
            height: var(--dl-size-size-xxlarge);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius4);
          }

          @media (max-width: 1600px) {
            .feature-card11-text {
              font-size: 28;
            }
          }
          @media (max-width: 1200px) {
            .feature-card11-text {
              font-size: 24;
            }
          }
          @media (max-width: 991px) {
            .feature-card11-image {
              width: var(--dl-size-size-xlarge);
              height: var(--dl-size-size-xlarge);
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard11.defaultProps = {
  imageAlt: 'image',
  rootClassName: '',
  imageSrc:
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=300',
  title: 'Lorem ipsum',
}

FeatureCard11.propTypes = {
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCard11
