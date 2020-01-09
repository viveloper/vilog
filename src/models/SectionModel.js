import firebase from '../firebase'

export default {
  fetchSections() {
    return firebase.firestore().collection('sections').orderBy('index').get().then(snapshot => {
      const sections = [];
      snapshot.forEach(doc => {
        sections.push(doc.data())
      });
      return { sections };
    }).catch(error => {      
      throw {
        code: error.code,
        message: error.message
      }
    })    
  }
}