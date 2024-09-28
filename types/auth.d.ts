declare module '#auth-utils' {
  interface User {
    provider: 'google' | 'github'
    id: number
    name: string
    avatar: string
  }
}
export {}
