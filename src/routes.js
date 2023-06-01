import { HomeIndex } from './pages/home-index.jsx'


// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/',
        component: <HomeIndex />,
        label: 'Home 🏠',
    },


]

export default routes