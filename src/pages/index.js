import React, { useState } from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  //Search blogs
  const [search, setSearch] = useState({
    querySelector: ``,
    filteredBlogs: posts
  })

  //OnChange event for searching blogs
  const handleBlogFilter = (event) => {
    setSearch(
      {
        querySelector: event.target.value,
        filteredBlogs: posts.filter((blg) => blg.frontmatter.title.toLowerCase().includes(event.target.value.toLowerCase().trim()))
      }
    )
  }

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }
  return (
    <Layout location={location} title={siteTitle}>
      <div className="container">
        <Seo title="All posts" />
        <section id="blogs" className="blog-section">
          <div className="blog-heading grid grid-cols-2">
            <h2>Blogs ({search.filteredBlogs.length})</h2>
            <div className="text-right">
              <input type="text" onChange={handleBlogFilter} value={search.querySelector} placeholder="Search blog here.. " />
            </div>
          </div>
          <ol style={{ listStyle: `none` }}>
            {search.filteredBlogs.map(post => {
              const title = post.frontmatter.title || post.fields.slug

              return (
                <li className="shadow blog-item" key={post.fields.slug}>
                  <article
                    className="post-list-item"
                    itemScope
                    itemType="http://schema.org/Article">
                    <header>
                      <div className="blog-sub-heading grid grid-cols-2">
                        <h2>
                          {title}
                        </h2>
                        <small className="time-stamp">{post.frontmatter.date}</small>
                      </div>
                    </header>
                    <section className="basic-blog-info">
                      <img width="100" height="100" src={post.frontmatter.bannerimage}
                        alt={post.frontmatter.alt}
                        border="0" />
                      <p className="blog-description"
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </section>
                    <section className="text-left">
                      <Link className="link-to-blog" to={post.fields.slug} itemProp="url">
                        Click for information
                      </Link>
                    </section>
                  </article>
                </li>
              )
            })}
          </ol>
        </section>
      </div >
    </Layout >
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY, MMM DD")
          title
          description
          bannerimage
          alt
        }
      }
    }
  }
`
