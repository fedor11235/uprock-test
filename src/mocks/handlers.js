import { rest } from 'msw'

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    if(
      req.body.email === process.env.VUE_APP_USER_EMAIL && 
      req.body.password === process.env.VUE_APP_USER_PASSWORD
      ) {
      sessionStorage.setItem('is-authenticated', 'true')
      return res(
        ctx.status(200),
      )
    }
    return res(
      ctx.status(401),
    )

  }),

  rest.post('/logout', (req, res, ctx) => {
    sessionStorage.removeItem('is-authenticated');
    return res(
      ctx.status(200),
    )
  }),

  rest.get('/user', (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem('is-authenticated')
    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        }),
      )
    }
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
        email: 'admin@admin.com',
        name: 'Fedor',
        surname: 'Avdeev'
      }),
    )
  }),
]