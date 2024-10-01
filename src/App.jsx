import Header from './components/Header'
import { Outlet, Link } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />

      <main>
        <Outlet/>
        <Link to='/admin' className="link__btns">Admin Login</Link>
      </main>
      {/* <ParentComponent  text={"Hello, world!!"}/> */}
    </>
  )
}

export default App
