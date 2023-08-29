export const useAuth = () => {
  let user: any

  const _user = localStorage.getItem('user')

  if (_user) {
    user = JSON.parse(_user)
    console.log('user', user)
  }

  if (user) {
    return {
      auth: true,
      role: user.role,
    }
  }

  return {
    auth: false,
    role: null,
  }
}
