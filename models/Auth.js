import Model from './Model'

class Auth extends Model {
  constructor(auth) {
    super()
    this.accessToken = auth.access_token
    this.expiresIn = auth.expires_in || null
    this.refreshToken = auth.refresh_token
    this.tokenType = auth.token_type
  }
}

export default Auth
