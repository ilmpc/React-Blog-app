export default {
  loginUser: () => null,
  registerUser: () => null,
  fetchUser: () => null,
  fetchArticle: () => null,
  fetchArticles: () => null,
  fetchBlogName: () => null
}

const fetchUser = () => ({
  username: 'Bill'
})

const fetchArticle = () => ({
  id: 1,
  title: 'My brand new cat',
  content: 'Today we adopted a new cat.\n It\'s fluffy and soft.',
  user: { username: 'Mike' },
  createdAt: '03-20-2020',
  imageUrl: 'https://bit.ly/fcc-relaxing-cat'
})
