
export const createById = (
  id
) => (state) => (state.article.byId[id])

export default { createById }
