import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Grid from '@material-ui/core/Grid';

const EpisodeTile = ({post}) => {
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
}

export default EpisodeTile;