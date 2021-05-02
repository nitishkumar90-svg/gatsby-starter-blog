/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  return (
    <div className="container">
      <div className="bio">
        <StaticImage
          className="bio-avatar"
          layout="fixed"
          formats={["AUTO", "WEBP", "AVIF"]}
          src="../images/pp.jpg"
          width={50}
          height={50}
          quality={95}
          alt="Profile picture"
        />
        {author?.name && (
          <p>
            <strong className="name-color">{author.name} - {author?.summary || null}
              {` `}</strong> <br />
            <a target="_blank" className="my-links" href={`https://github.com/nitishkumar90-svg`}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a target="_blank" className="my-links" href={`https://linkedin.com/in/nitishkumar90`}>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </p>
        )}
      </div>
    </div>
  )
}

export default Bio
