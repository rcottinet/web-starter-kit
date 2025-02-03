export interface PageProps {
  errors: {
    name?: string
    email?: string
    password?: string
    [key: string]: string | undefined
  }
}
