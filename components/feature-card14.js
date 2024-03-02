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
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card14-feature-card:hover {
            transform: scale(1.02);
          }
          .feature-card14-text {
            font-size: 1.5rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .feature-card14-image {
            width: 249px;
            height: 349px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius4);
          }

          @media (max-width: 1600px) {
            .feature-card14-root-class-name {
              max-width: 100%;
            }
            .feature-card14-root-class-name1 {
              max-width: 100%;
            }
            .feature-card14-root-class-name2 {
              max-width: 100%;
            }
            .feature-card14-root-class-name3 {
              max-width: 100%;
            }
            .feature-card14-root-class-name4 {
              max-width: 100%;
            }
            .feature-card14-root-class-name5 {
              max-width: 100%;
            }
            .feature-card14-root-class-name6 {
              max-width: 100%;
            }
            .feature-card14-root-class-name7 {
              max-width: 100%;
            }
          }
          @media (max-width: 1200px) {
            .feature-card14-feature-card {
              max-width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard14.defaultProps = {
  imageSrc:
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&h=400',
  title: 'Lorem ipsum',
  rootClassName: '',
  imageAlt: 'image',
}

FeatureCard14.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default FeatureCard14
