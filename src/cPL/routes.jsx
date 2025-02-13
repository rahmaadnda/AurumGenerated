/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import React from 'react';

import DaftarCPLPage from './containers/DaftarCPLPage'
import DetailCPLPage from './containers/DetailCPLPage'
import TambahCPLPage from './containers/TambahCPLPage'
import UbahCPLPage from './containers/UbahCPLPage'

const cPLRoutes = [
	{ 
		path: "/cpl",
		element: <DaftarCPLPage />,
	},
	{ 
		path: "/cpl/tambah",
		element: <TambahCPLPage />,
	},
	{ 
		path: "/cpl/ubah",
		element: <UbahCPLPage />,
	},
	{ 
		path: "/cpl/:id",
		element: <DetailCPLPage />,
	}
]

export default cPLRoutes
