import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from 'pages/home'
import { Result } from 'pages/result'
import { History } from 'pages/history'
import { About } from 'pages/about'

export const Routing = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/history" element={<History />} />
				<Route path="/converted-resume" element={<Result />} />
			</Routes>
		</BrowserRouter>
	)
}
