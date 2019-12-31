export const loginApi = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {
          email: 'test@test.com',
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNhc2lvQGNob3ZhLmNvbSIsInVzZXJuYW1lIjoiY2FzaW8iLCJpYXQiOjE1NzQ3NjYzMTcsImV4cCI6MTU3NTM3MTExNywiaXNzIjoidml2ZWxvcGVyLmNvbSIsInN1YiI6InVzZXJJbmZvIn0.JDOMycdDiXdAvIgEP7V3V3tRuiPP8QXPFak35Flm6vk'
        }
      })
    }, 200)
  })
}