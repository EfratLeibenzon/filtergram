import React from 'react'
import { Routes, Route } from 'react-router'
import routes from './routes'
import { Navbar } from './cmps/navbar'


export function RootCmp() {

    return (
        <div className='flex'>

            <Navbar />
            <main className='main-section'>
                <Routes>
                    {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
                </Routes>
            </main>

        </div>
    )
}


