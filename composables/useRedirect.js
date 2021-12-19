import { useContext, useRouter } from '@nuxtjs/composition-api'

export default () => {
  const { $auth } = useContext()
  const $router = useRouter()

  if ($auth.loggedIn) {
    $router.push({ path: '/home' })
  }

  return { loggedIn: $auth.loggedIn }
}
