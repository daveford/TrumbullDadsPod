import * as React from "react"
import { graphql } from "gatsby"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import "../styles/home.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EpisodeTile from "../components/episode-tile"

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

const IndexPage = ({ data }) => {
  const classes = useStyles();
  const posts = data.allMarkdownRemark.nodes;
  
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Trumbull Dads Podcast</h1>
      <p>Dads from Connecticut talking NFL, NCAA football, and their kids playing soccer. </p>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {posts.map(post => {
            return (
              <EpisodeTile post={post}/>
            )
          })}
        </Grid>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
{
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 3, filter: {fileAbsolutePath: {regex: "/(episodes)/"}}) {
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
