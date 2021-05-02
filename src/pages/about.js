import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <div className="container blog-item">
        <Seo title="About Page" />
        <article
          className="post-list-item"
          itemScope
          itemType="http://schema.org/Article">
          <section class="about-me shadow">
            <header>
              <div class="blog-sub-heading grid grid-cols-2">
                <h2>
                  Nitish Kumar - N01439396
              </h2>
              </div>
            </header>
            <section className="basic-blog-info">
              <p className="blog-description">Hi I'm Nitish Kumar, design thinking full-stack JavaScript developer with a passion for motion design. I'm currently living in Brampton, Canada, but originally from India. I'm an absolute geek and love geeking out on all things JavaScript.
              </p><p>
                First fell in love with web design 7 years ago simply because it made my Photoshop artwork come alive. Since then I have been hooked. Although my focus for now is heavily in both frontend and backend web development. My favorite development stack at the moment is React, UIkit, Node, Firebase.
              </p><p>
                Values I hold high are loyalty, reliability, authenticity and helping other achieve their success. Which is why I see projects through to the end and why I believe in not only creating beautiful software but also reliable and reflect the client's brand and that is easy to use so that it does not distract the a user experience
              </p><p>
                Whether it’s creating servers in Node, connecting to Firebase databases or designing unique user experiences per device whilst still maintaining a consistent brand experience I will bring your ideas to life.</p>
            </section>
            <section class="contact-info">
              <p>10, Juliana Square, Brampton, Ontario</p>
              <p>+1 437 983 0181</p>
              <p>Thank you!</p>
            </section>
          </section>
        </article>
      </div>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
