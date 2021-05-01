/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

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
  const social = data.site.siteMetadata?.social

  return (
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
          <strong class="name-color">{author.name} - {author?.summary || null}
            {` `}</strong> <br />
          <a target="_blank" href={`https://github.com/nitishkumar90-svg`}>
            <StaticImage
              className="bio-avatar"
              formats={["AUTO", "WEBP", "SVG"]}
              src="../images/github.svg"
              width={20}
              height={20}
              quality={95}
              alt="Github"
            />
          </a>
          <a target="_blank" href={`https://linkedin.com/in/nitishkumar90`}>
            <StaticImage
              className="bio-avatar"
              formats={["AUTO", "WEBP", "SVG"]}
              src="../images/linkedin.png"
              width={20}
              height={20}
              quality={10}
              alt="Github"
            />
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
