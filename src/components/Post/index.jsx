import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
// import MarkDownViewer from '../MarkDownViewer';
import MarkdownView from '../MarkDownViewer/MarkdownView';
import { fetchPostThunk } from '../../store/actions';

const useStyles = makeStyles(theme => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

function Post(props) {
  const classes = useStyles();
  const postId = props.match.params.id;
  const post = useSelector(state => state.post);
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPostThunk(postId));
  }, [postId, dispatch]);

  console.log('render post')

  return (
    <Container maxWidth="lg">
      {
        loading || !post.title ?
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