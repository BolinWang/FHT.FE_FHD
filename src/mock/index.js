import Mock from 'mockjs'
Mock.mock('/api/data', (req, res) => {
  return {
    data: ['a', 'b']
  }
})
export default Mock
