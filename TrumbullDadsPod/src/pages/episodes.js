import * as React from "react"
import { graphql } from "gatsby"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

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
            return (
              <EpisodeTile post={post}/>
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
