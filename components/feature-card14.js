import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard14 = (props) => {
  return (
    <>
      <div className={`feature-card14-feature-card ${props.rootClassName} `}>
        <h2 className="feature-card14-text">{props.title}</h2>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          loading="lazy"
          className="feature-card14-image"
        />
      </div>
      <style jsx>
        {`
          .feature-card14-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 10px 10px 10px 10px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card14-feature-card:hover {
            transform: scale(1.02);
          }
          .feature-card14-text {
            margin-bottom: var(--dl-space-space-twounits);
          }
          .feature-card14-image {
            width: var(--dl-size-size-xxlarge);
            height: var(--dl-size-size-xxlarge);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius4);
          }

          @media (max-width: 1600px) {
            .feature-card14-image {
              width: var(--dl-size-size-xlarge);
              height: var(--dl-size-size-xlarge);
            }
          }
          @media (max-width: 576px) {
            .feature-card14-feature-card {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard14.defaultProps = {
  rootClassName: '',
  imageSrc:
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=300',
  imageAlt: 'image',
  title: 'Lorem ipsum',
}

FeatureCard14.propTypes = {
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCard14
