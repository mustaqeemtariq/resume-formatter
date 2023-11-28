import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from 'pages/home'
import 'styles/main.css'

export const Routing = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	)
}
