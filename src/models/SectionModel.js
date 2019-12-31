const sections = [
  {
    name: 'technology',
    description: `Something short and leading about the collection below—its contents, the creator, etc.
    Make it short and sweet, but not too short so folks don&apos;t simply skip over it
    entirely.`
  },
  {
    name: 'design',
    description: `Something short and leading about the collection below—its contents, the creator, etc.
    Make it short and sweet, but not too short so folks don&apos;t simply skip over it
    entirely.`
  },
  {
    name: 'culture',
    description: `Something short and leading about the collection below—its contents, the creator, etc.
    Make it short and sweet, but not too short so folks don&apos;t simply skip over it
    entirely.`
  },
  {
    name: 'business',
    description: `Something short and leading about the collection below—its contents, the creator, etc.
    Make it short and sweet, but not too short so folks don&apos;t simply skip over it
    entirely.`
  },
  {
    name: 'politics',
    description: `Something short and leading about the collection below—its contents, the creator, etc.
    Make it short and sweet, but not too short so folks don&apos;t simply skip over it
    entirely.`
  },
  {
    name: 'opinion',
    description: `Something short and leading about the collection below—its contents, the creator, etc.
    Make it short and sweet, but not too short so folks don&apos;t simply skip over it
    entirely.`
  },
  {
    name: 'science',
    description: `Something short and leading about the collection below—its contents, the creator, etc.
    Make it short and sweet, but not too short so folks don&apos;t simply skip over it
    entirely.`
  },
  {
    name: 'health',
    description: `Something short and leading about the collection below—its contents, the creator, etc.
    Make it short and sweet, but not too short so folks don&apos;t simply skip over it
    entirely.`
  },
  {
    name: 'style',
    description: `Something short and leading about the collection below—its contents, the creator, etc.
    Make it short and sweet, but not too short so folks don&apos;t simply skip over it
    entirely.`
  },
  {
    name: 'travel',
    description: `Something short and leading about the collection below—its contents, the creator, etc.
    Make it short and sweet, but not too short so folks don&apos;t simply skip over it
    entirely.`
  },
]

export default {
  fetchSections() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          sections
        })
      }, 200)
    })
  },

  fetchSection(name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = sections.filter(section => section.name===name)
        resolve({
          section: result[0]
        })
      }, 3000)
    })
  }
}