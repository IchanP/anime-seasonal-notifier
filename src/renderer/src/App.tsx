import appIcon from '../src/assets/fixedEresh.png'

function App(): JSX.Element {
  return (
    <>
      <div className="titlebar">
        <div id="titleimgwrapper">
          <img src={appIcon} id="titleIcon" />
        </div>
      </div>
      <div className="container">
        <h1>Hello, world!</h1>
        <p>Electron + React + TypeScript + Vite</p>
        <button style={{ width: '50px', height: '50px' }} onClick={(): void => window.api.test()}>
          Test
        </button>
      </div>
    </>
  )
}

export default App
