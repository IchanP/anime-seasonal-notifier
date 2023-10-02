import { useRouteError } from 'react-router'

const ErrorPage = (): JSX.Element => {
  interface Error {
    statusText: string
    message: string
  }
  const error = useRouteError() as Error
  console.error(error)

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage
