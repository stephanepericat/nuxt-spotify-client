import { useContext, useRoute, useRouter } from '@nuxtjs/composition-api'

export default () => {
  const { $auth } = useContext()
  const $route = useRoute()
  const $router = useRouter()

  if (!$auth.loggedIn && !$route.value.query.code) {
    $auth.loginWith('spotify')
  }

  if ($route.value.query.error) {
    $router.push({ path: '/' })
  }

  return {
    loggedIn: $auth.loggedIn || false,
    error: $route.value.query.error || null,
    code: $route.value.query.code || null,
  }
}
