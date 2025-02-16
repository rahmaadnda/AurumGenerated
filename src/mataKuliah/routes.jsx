/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import RequireAuth from "@/commons/auth/RequireAuth";
import React from 'react';
import TambahMataKuliahPage from './containers/TambahMataKuliahPage'
import DaftarMataKuliahPage from './containers/DaftarMataKuliahPage'
import DetailMataKuliahPage from './containers/DetailMataKuliahPage'
import UbahMataKuliahPage from './containers/UbahMataKuliahPage'

const mataKuliahRoutes = [
{ 
	path: "/matakuliah/tambah",
	element: <RequireAuth permissionNeeded="ReadRencanaStudiMe" ><TambahMataKuliahPage/></RequireAuth>
}

	
,
{ 
	path: "/matakuliah/ubah",
	element: <UbahMataKuliahPage />,
}

	
,
{ 
	path: "/matakuliah",
	element: <RequireAuth permissionNeeded="CreateRencanaStudiMe" ><DaftarMataKuliahPage/></RequireAuth>
}

	
,
{ 
	path: "/matakuliah/:id",
	element: <DetailMataKuliahPage />,
}

	

]

export default mataKuliahRoutes
