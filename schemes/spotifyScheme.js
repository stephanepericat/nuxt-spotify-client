import consola from 'consola'
import { Oauth2Scheme } from '~auth/runtime'

export default class SpotifyScheme extends Oauth2Scheme {
  constructor($auth, options, ...defaults) {
    super($auth, options, ...defaults)
    consola.log('options', options)
  }
}
