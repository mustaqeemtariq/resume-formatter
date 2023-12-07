import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from 'pages/home'
import { Result } from 'pages/result'

export const Routing = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/converted-resume" element={<Result />} />
			</Routes>
		</BrowserRouter>
	)
}
