import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Markdown from '../Markdown';
import withLayout from '../../hoc/withLayout'

const useStyles = makeStyles(theme => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

function Post() {
  const classes = useStyles();
  const post = `# Sample blog post

  #### April 1, 2020 by [Olivier](/)
  
  This blog post shows a few different types of content that are supported and styled with
  Material styles. Basic typography, images, and code are all supported.`

  return (
    <Markdown className={classes.markdown} key={post.substring(0, 40)}>
      {post}
    </Markdown>
  )
}

export default withLayout(Post)