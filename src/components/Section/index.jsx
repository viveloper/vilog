import React, { useEffect } from 'react';

import Title from './Title'
import CardGrid from './CardGrid'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsThunk } from '../../store/actions';

function Section(props) {
  const { sectionName } = props.match.params
  const dispatch = useDispatch()
  const sections = useSelector(state => state.sections)
  const posts = useSelector(state => state.posts)

  const filteredSections = sections.filter(section => section.name === sectionName);
  const section = filteredSections.length > 0 ? filteredSections[0] : {};

  useEffect(() => {
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