import consola from 'consola'

export default ({ $auth, $config }) => {
  consola.log('$auth', $auth.options)
  $auth.options.redirect.login = $config.loginUrl
  // $auth.options.redirect.logoutUrl = $config.logoutUrl;
  // $auth.options.redirectUrl = $config.redirectUrl;
}
