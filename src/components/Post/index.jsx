import React from 'react';
import { useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
// import { makeStyles } from '@material-ui/core/styles';
// import MarkDownViewer from '../MarkDownViewer';
import MarkdownView from '../MarkDownViewer/MarkdownView';
import { fetchPost } from '../../api';

// const useStyles = makeStyles(theme => ({
//   markdown: {
//     ...theme.typography.body2,
//     padding: theme.spacing(3, 0),
//   },
// }));

function Post(props) {
  // const classes = useStyles();
  const [post, setPost] = React.useState({});
  const postId = props.match.params.id;
  const posts = useSelector(state => state.posts);

  React.useEffect(() => {
    const filterdPosts = posts.filter(post => post.postId === postId);
    if (filterdPosts.length > 0) {
      setPost(filterdPosts[0])
    }
    else {
      fetchPost(postId).then(data => {
        setPost(data.post);
      }).catch(error => {
        console.log(error);
      });
    }
  }, [posts, postId]);

  console.log('render post')

  return (
    <Container maxWidth="lg">
      {
        !post.title ?
          <div>Loading...</div>
          :
          <div>
            <h1>{post.title}</h1>
            <h4>{`${new Date(post.createdAt).getUTCFullYear()}/${new Date(post.createdAt).getUTCMonth() + 1}/${new Date(post.createdAt).getUTCDate()} by ${post.author}`}</h4>
            {/* <MarkDownViewer className={classes.markdown}>
              {post.content}
            </MarkDownViewer> */}
            <MarkdownView source={post.content} />
          </div>
      }
    </Container>
  )
}

export default Post