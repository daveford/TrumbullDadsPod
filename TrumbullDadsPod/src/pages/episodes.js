import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Layout from "../components/layout"
import SEO from "../components/seo"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Episodes = ({ data }) => {
  const classes = useStyles();
  const posts = data.allMarkdownRemark.nodes;
  return(
    <Layout>
      <SEO title="Episodes" />
      <h1>Trumbull Dads Podcast Episodes</h1>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug;
            return (
              <Grid item xs={12} sm={6} md={4} key={post.fields.slug}>
                <Link to={post.fields.slug} itemProp="url">
                  <p itemProp="headline">{title}</p>
                  <StaticImage
                    src="../images/trumbull-dads-pod-logo.jpg"
                    width={300}
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="Trumbull Dads Podcast"
                    style={{ marginBottom: `1.45rem`, marginLeft: `auto`, marginRight: `auto` }}
                  />
                </Link>
              </Grid>
            )
          })}
        </Grid>
      </div>
    </Layout>
  )
}

export default Episodes

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
