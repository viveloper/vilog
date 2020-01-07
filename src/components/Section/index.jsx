import React, { useEffect } from 'react';

import Title from './Title'
import CardGrid from './CardGrid'
import { useDispatch, useSelector } from 'react-redux';
import { setSection, fetchPostsThunk } from '../../store/actions';

function Section(props) {
  const { sectionName } = props.match.params
  const dispatch = useDispatch()
  const sections = useSelector(state => state.sections)
  const section = useSelector(state => state.section)
  const posts = useSelector(state => state.posts)

  useEffect(() => {
    const result = sections.filter(section => section.name === sectionName)
    if (result.length > 0) {
      dispatch(setSection(result[0]))
    }
    dispatch(fetchPostsThunk(sectionName))
    return () => { };
  }, [sectionName, sections, dispatch])

  console.log('render section')

  return (
    <React.Fragment>
      <Title title={section.name} description={section.description} history={props.history} />
      <CardGrid posts={posts} history={props.history} />
    </React.Fragment>
  );
}

export default Section