import request from 'superagent'

const article = res.body

export function getRightTitle() {
 return request.get('/articles.left')
}



console.log(getRightTitle(article))
