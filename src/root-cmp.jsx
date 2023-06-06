import React from 'react'
import { Routes, Route } from 'react-router'
import routes from './routes'
import { Navbar } from './cmps/navbar'

export function RootCmp() {

    return (
        <div>
            <main className='main-section'>
                <Navbar />
                <Routes>
                    {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
                </Routes>
            </main>

        </div>
    )
}


