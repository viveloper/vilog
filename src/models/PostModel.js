const posts = [
  {
    id: 1,
    title: 'Title',    
    content: 'This is a media card. You can use this section to describe the content.',
    image: 'https://source.unsplash.com/random',
    author: 'viveloper',
    created: new Date().toDateString()
  },
  {
    id: 2,
    title: 'Title',
    content: 'This is a media card. You can use this section to describe the content.',
    image: 'https://source.unsplash.com/random',
    author: 'viveloper',
    created: new Date().toDateString()
  },
  {
    id: 3,
    title: 'Title',
    content: 'This is a media card. You can use this section to describe the content.',
    image: 'https://source.unsplash.com/random',
    author: 'viveloper',
    created: new Date().toDateString()
  },
  {
    id: 4,
    title: 'Title',
    content: 'This is a media card. You can use this section to describe the content.',
    image: 'https://source.unsplash.com/random',
    author: 'viveloper',
    created: new Date().toDateString()
  },
  {
    id: 5,
    title: 'Title',
    content: 'This is a media card. You can use this section to describe the content.',
    image: 'https://source.unsplash.com/random',
    author: 'viveloper',
    created: new Date().toDateString()
  },
  {
    id: 6,
    title: 'Title',
    content: 'This is a media card. You can use this section to describe the content.',
    image: 'https://source.unsplash.com/random',
    author: 'viveloper',
    created: new Date().toDateString()
  },
  {
    id: 7,
    title: 'Title',
    content: 'This is a media card. You can use this section to describe the content.',
    image: 'https://source.unsplash.com/random',
    author: 'viveloper',
    created: new Date().toDateString()
  },
  {
    id: 8,
    title: 'Title',
    content: 'This is a media card. You can use this section to describe the content.',
    image: 'https://source.unsplash.com/random',
    author: 'viveloper',
    created: new Date().toDateString()
  },
  {
    id: 9,
    title: 'Title',
    content: 'This is a media card. You can use this section to describe the content.',
    image: 'https://source.unsplash.com/random',
    author: 'viveloper',
    created: new Date().toDateString()
  },
]

export default {
  fetchPosts(section) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          posts
        })
      }, 200)
    })
  },

  fetchPost(section, id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          post: {
            title: 'title',
            content: 'This is a media card. You can use this section to describe the content.'
          }
        })
      }, 200)
    })
  }
}