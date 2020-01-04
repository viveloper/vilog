import React, { useEffect } from 'react';

import Title from './Title'
import CardGrid from './CardGrid'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSectionThunk, setSection, fetchPostsThunk } from '../../store/actions';

function Board(props) {
  const { sectionName } = props.match.params
  const dispatch = useDispatch()
  const sections = useSelector(state => state.sections)
  const section = useSelector(state => state.section)
  const posts = useSelector(state => state.posts)

  useEffect(() => {
    if (sections.length === 0) {
      dispatch(fetchSectionThunk(sectionName))
    } else {
      const result = sections.filter(section => section.name === sectionName)
      if (result.length > 0) dispatch(setSection(result[0]))
    }

    dispatch(fetchPostsThunk(sectionName))

    return () => { };
  }, [sectionName, sections, dispatch])  

  return (
    <React.Fragment>
      <Title title={section.name} description={section.description} />
      <CardGrid posts={posts} history={props.history} />
    </React.Fragment>
  );
}

export default Board