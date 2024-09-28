export default oauthGoogleEventHandler({
  async onSuccess(event, { user }) {
    await setUserSession(event, {
      user: {
        provider: 'google',
        id: user.sub,
        name: user.name,
        avatar: user.picture,
        url: ''
      }
    })

    return sendRedirect(event, '/auth-ready')
  }
})
