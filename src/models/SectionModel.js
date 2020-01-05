import axios from 'axios'
import { SERVER_BASE_URL } from '../constants'

// const sections = [
//   {
//     name: 'programming',
//     description: `Something short and leading about the collection below—its contents, the creator, etc.
//     Make it short and sweet, but not too short so folks don&apos;t simply skip over it
//     entirely.`
//   },
//   {
//     name: 'technology',
//     description: `Something short and leading about the collection below—its contents, the creator, etc.
//     Make it short and sweet, but not too short so folks don&apos;t simply skip over it
//     entirely.`
//   },
//   {
//     name: 'photography',
//     description: `Something short and leading about the collection below—its contents, the creator, etc.
//     Make it short and sweet, but not too short so folks don&apos;t simply skip over it
//     entirely.`
//   },
//   {
//     name: 'design',
//     description: `Something short and leading about the collection below—its contents, the creator, etc.
//     Make it short and sweet, but not too short so folks don&apos;t simply skip over it
//     entirely.`
//   },
//   {
//     name: 'food',
//     description: `Something short and leading about the collection below—its contents, the creator, etc.
//     Make it short and sweet, but not too short so folks don&apos;t simply skip over it
//     entirely.`
//   },
//   {
//     name: 'business',
//     description: `Something short and leading about the collection below—its contents, the creator, etc.
//     Make it short and sweet, but not too short so folks don&apos;t simply skip over it
//     entirely.`
//   },  
//   {
//     name: 'science',
//     description: `Something short and leading about the collection below—its contents, the creator, etc.
//     Make it short and sweet, but not too short so folks don&apos;t simply skip over it
//     entirely.`
//   },
//   {
//     name: 'health',
//     description: `Something short and leading about the collection below—its contents, the creator, etc.
//     Make it short and sweet, but not too short so folks don&apos;t simply skip over it
//     entirely.`
//   },
//   {
//     name: 'style',
//     description: `Something short and leading about the collection below—its contents, the creator, etc.
//     Make it short and sweet, but not too short so folks don&apos;t simply skip over it
//     entirely.`
//   },
//   {
//     name: 'travel',
//     description: `Something short and leading about the collection below—its contents, the creator, etc.
//     Make it short and sweet, but not too short so folks don&apos;t simply skip over it
//     entirely.`
//   },
// ]

export default {
  fetchSections() {
    return axios.get(`${SERVER_BASE_URL}/api/sections`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(res => res.data)
  }
}