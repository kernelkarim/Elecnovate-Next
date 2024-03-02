import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard13 = (props) => {
  return (
    <>
      <div className={`feature-card13-feature-card ${props.rootClassName} `}>
        <h2 className="feature-card13-text">{props.title}</h2>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="feature-card13-image"
        />
      </div>
      <style jsx>
        {`
          .feature-card13-feature-card {
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
          .feature-card13-feature-card:hover {
            transform: scale(1.02);
          }
          .feature-card13-text {
            margin-bottom: var(--dl-space-space-twounits);
          }
          .feature-card13-image {
            width: var(--dl-size-size-medium);
            height: var(--dl-size-size-medium);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius4);
          }
        `}
      </style>
    </>
  )
}

FeatureCard13.defaultProps = {
  rootClassName: '',
  imageSrc:
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=1000',
  title: 'Lorem ipsum',
  imageAlt: 'image',
}

FeatureCard13.propTypes = {
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default FeatureCard13
