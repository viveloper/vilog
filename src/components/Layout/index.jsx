import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Footer from './Footer';
import withAuth from '../../hoc/withAuth'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSectionsThunk } from '../../store/actions';

function Layout(props) {
  const dispatch = useDispatch();
  const sections = useSelector(state=>state.sections)
  useEffect(() => {
    dispatch(fetchSectionsThunk())
    return () => { }
  }, [dispatch])

  console.log('render layout')

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Vilog" sections={sections} />
        <main>
          {props.children}
        </main>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </React.Fragment>
  );
}

export default withAuth(Layout)