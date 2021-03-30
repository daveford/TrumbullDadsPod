import * as React from "react"
import { graphql } from "gatsby"
import { Grid, Paper } from '@material-ui/core';
import { StaticImage } from "gatsby-plugin-image"
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
    marginBottom: `30px`,
  },
}));

const AboutUs = ({data}) => {
  const classes = useStyles();
  const bios = data.allMarkdownRemark.nodes;
  return(
    <Layout>
      <SEO title="About Us" />
      <h1>The Trumbull Dads Podcast Hosts</h1>
      <div className={classes.root}>
        <Grid container direction={'column'} spacing={24}>
          {bios.map(bio=> {
            return (
              <Grid item>
                <Paper elevation={3} className={classes.paper}>
                  <Grid container xs={12} key={bio.fields.slug}>
                    <Grid item xs={12} sm={4}>
                      <StaticImage
                        src="../images/trumbull-dads-pod-logo.jpg"
                        width={300}
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="Trumbull Dads Podcast"
                        style={{ marginBottom: `1.45rem`, marginLeft: `auto`, marginRight: `auto` }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <h3>{bio.frontmatter.name}</h3>
                      <div dangerouslySetInnerHTML={{__html:bio.html}}></div>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            )
          })}
        </Grid>
      </div>
    </Layout>
  )
}
  
  export default AboutUs

  export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(bios)/"}}) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          name
        }
        html
      }
    }
  }
`