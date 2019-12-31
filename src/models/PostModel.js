const posts = [
  {
    title: 'title',
    description: `Something short and leading about the collection below—its contents, the creator, etc.
    Make it short and sweet, but not too short so folks don&apos;t simply skip over it
    entirely.`
  },
  {
    title: 'title',
    description: `Something short and leading about the collection below—its contents, the creator, etc.
    Make it short and sweet, but not too short so folks don&apos;t simply skip over it
    entirely.`
  },
  {
    title: 'title',
    description: `Something short and leading about the collection below—its contents, the creator, etc.
    Make it short and sweet, but not too short so folks don&apos;t simply skip over it
    entirely.`
  },
  {
    title: 'title',
    description: `Something short and leading about the collection below—its contents, the creator, etc.
    Make it short and sweet, but not too short so folks don&apos;t simply skip over it
    entirely.`
  },
  {
    title: 'title',
    description: `Something short and leading about the collection below—its contents, the creator, etc.
    Make it short and sweet, but not too short so folks don&apos;t simply skip over it
    entirely.`
  },
  {
    title: 'title',
    description: `Something short and leading about the collection below—its contents, the creator, etc.
    Make it short and sweet, but not too short so folks don&apos;t simply skip over it
    entirely.`
  },
  {
    title: 'title',
    description: `Something short and leading about the collection below—its contents, the creator, etc.
    Make it short and sweet, but not too short so folks don&apos;t simply skip over it
    entirely.`
  },
  {
    title: 'title',
    description: `Something short and leading about the collection below—its contents, the creator, etc.
    Make it short and sweet, but not too short so folks don&apos;t simply skip over it
    entirely.`
  },
  {
    title: 'title',
    description: `Something short and leading about the collection below—its contents, the creator, etc.
    Make it short and sweet, but not too short so folks don&apos;t simply skip over it
    entirely.`
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
            description: `Something short and leading about the collection below—its contents, the creator, etc.
            Make it short and sweet, but not too short so folks don&apos;t simply skip over it
            entirely.`
          }
        })
      }, 200)
    })
  }
}