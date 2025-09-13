import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About';
import Contact from './pages/Contact';
import Details from './pages/Details'
import Favorites from './pages/Favorites';

function App() {


  const route = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: "/:page?", element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/contact', element: <Contact /> },
        { path: '/details/:id?', element: <Details /> },
        { path: '/favorites', element: <Favorites /> },
      ]
    }
  ])


  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App
