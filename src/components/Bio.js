import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Image from 'gatsby-image';

import { IconCodepen, IconGitHub, IconTwitter } from '../components/icons';
import { bio, iconLink, gray } from '../styles';
import { rhythm } from '../utils';

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata;
        return (
          <div css={bio}>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
                mixBlendMode: 'lighten'
              }}
            />
            <p>
              <strong>{author}</strong> is a front-end developer at <a href="https://seesparkbox.com">Sparkbox</a>.<br />
              <a href={`https://twitter.com/${social.twitter}`} css={iconLink}>
                <IconTwitter size={30} color={gray} />
              </a>
              <a href={`https://github.com/${social.github}`} css={iconLink}>
                <IconGitHub size={30} color={gray} />
              </a>
              <a href={`https://codepen.io/${social.codepen}`} css={iconLink}>
                <IconCodepen size={30} color={gray} />
              </a>
            </p>
          </div>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
          github
          codepen
        }
      }
    }
  }
`;

export default Bio;
