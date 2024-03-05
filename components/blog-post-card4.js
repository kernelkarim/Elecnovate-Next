import React from 'react'

import PropTypes from 'prop-types'

const BlogPostCard4 = (props) => {
  return (
    <>
      <div className={`blog-post-card4-blog-post-card ${props.rootClassName} `}>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          loading="lazy"
          className="blog-post-card4-image"
        />
        <div className="blog-post-card4-container">
          <h2 className="blog-post-card4-text">{props.date}</h2>
          <span className="blog-post-card4-text1">{props.description}</span>
        </div>
      </div>
      <style jsx>
        {`
          .blog-post-card4-blog-post-card {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            border-radius: 32px;
            flex-direction: column;
            justify-content: space-between;
          }
          .blog-post-card4-blog-post-card:hover {
            transform: scale(1.02);
          }
          .blog-post-card4-image {
            width: 60%;
            height: 75%;
            align-self: center;
            max-height: 50rem;
            object-fit: cover;
            border-radius: 32px;
          }
          .blog-post-card4-container {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-white);
          }
          .blog-post-card4-text {
            color: var(--dl-color-gray-500);
            font-size: 32;
            margin-top: var(--dl-space-space-unit);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .blog-post-card4-text1 {
            font-size: 28;
            text-align: center;
            font-weight: 300;
          }
          .blog-post-card4-root-class-name {
            margin-bottom: 64px;
          }

          .blog-post-card4-root-class-name2 {
            margin-bottom: 48px;
          }

          @media (max-width: 1600px) {
            .blog-post-card4-blog-post-card {
              box-shadow: 0px 0px 0px 0px rgba(18, 18, 18, 0.1);
            }
            .blog-post-card4-text {
              font-size: 28;
            }
            .blog-post-card4-text1 {
              font-size: 25;
            }
          }
          @media (max-width: 1200px) {
            .blog-post-card4-text {
              font-size: 24;
            }
            .blog-post-card4-text1 {
              font-size: 22;
            }
          }
          @media (max-width: 991px) {
            .blog-post-card4-text {
              font-size: 20;
            }
            .blog-post-card4-text1 {
              font-size: 18;
            }
          }
        `}
      </style>
    </>
  )
}

BlogPostCard4.defaultProps = {
  imageSrc:
    'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHZlbmljZXxlbnwwfHx8fDE2MjYyNzIyOTA&ixlib=rb-1.2.1&w=900',
  description:
    'Lorem ipsum lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  imageAlt: 'image',
  label: 'Food & Drink',
  date: 'JULY 24',
  rootClassName: '',
}

BlogPostCard4.propTypes = {
  imageSrc: PropTypes.string,
  description: PropTypes.string,
  imageAlt: PropTypes.string,
  label: PropTypes.string,
  date: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default BlogPostCard4
