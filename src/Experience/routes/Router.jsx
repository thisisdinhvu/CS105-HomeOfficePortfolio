import React from 'react'
import App from '../../App'
import HomePage from '../pages/HomePage/HomePage'
import AboutPage from '../pages/AboutPage/AboutPage'
import About2Page from '../pages/About2Page/About2Page'
import DevWorkPage from '../pages/DevWorkPage/DevWorkPage'
import DevWork2Page from '../pages/DevWork2Page/DevWork2Page'
import TransitionComponent from '../../components/Transition'
import {Route, Routes} from 'react-router'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'

const Router = () => {
    return (
        <Routes>
            <Route
                index
                element={
            <TransitionComponent>
                <HomePage />
            </TransitionComponent>} />
            <Route
                path="about"
                element={
            <TransitionComponent>
                <AboutPage />
            </TransitionComponent>} />
            <Route
                path="dev-work"
                element={
            <TransitionComponent>
                <DevWorkPage/>
                    </TransitionComponent>} />
            <Route
                path="about-2"
                element={
            <TransitionComponent>
                <About2Page />
            </TransitionComponent>} />
            <Route
                path="dev-work-2"
                element={
            <TransitionComponent>
                <DevWork2Page />
            </TransitionComponent>
            } />
            <Route
                path="*"
                element={<NotFoundPage />} />
        </Routes>
    )
}

export default Router
