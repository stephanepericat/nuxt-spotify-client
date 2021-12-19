import {
  computed,
  useContext,
  useRoute,
  useRouter,
} from '@nuxtjs/composition-api'

export default () => {
  const { $auth, i18n } = useContext()
  const $route = useRoute()
  const $router = useRouter()

  const genericError = computed(() => i18n.t('genericError'))
  const redirecting = computed(() => i18n.t('redirecting'))
  const loggingIn = computed(() => i18n.t('loggingIn'))

  if (!$auth.loggedIn && !$route.value.query.code) {
    $auth.loginWith('spotify')
  }

  if ($route.value.query.error) {
    $router.push({ path: '/' })
  }

  return {
    code: $route.value.query.code || null,
    error: $route.value.query.error || null,
    genericError,
    loggedIn: $auth.loggedIn || false,
    loggingIn,
    redirecting,
  }
}
