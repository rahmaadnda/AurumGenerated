/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link, useParams } from 'react-router-dom'
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from 'react-router-dom';
import FormTambahNilai from '../components/FormTambahNilai'

import getKomponenPenilaianDataList from '../services/getKomponenPenilaianDataList'
const TambahNilaiMahasiswaPage = props => {
const [isLoading, setIsLoading] = useState({
	tambahNilai: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [searchParams] = useSearchParams()
const kelasId = searchParams.get('kelasId')
const mahasiswaId = searchParams.get('mahasiswaId')
const [komponenPenilaianDataList, setKomponenPenilaianDataList] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, tambahNilai: true}))
		const { data: komponenPenilaianDataListResponse } = await getKomponenPenilaianDataList({ kelasId  })

	    setKomponenPenilaianDataList(komponenPenilaianDataListResponse.data)


	    setIsLoading(prev => ({...prev, tambahNilai: false}))
    }
    fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Tambah Nilai Mahasiswa Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/penilaian-kelas//nilai/:mahasiswaId${mahasiswaId}`}>	<Button className="p-4" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  	
			  	
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Nilai"}
		isLoading={isLoading.tambahNilai}
	>
		{komponenPenilaianDataList ? 
		(<>
		 <FormTambahNilai
			{...{ 
				komponenPenilaianDataList
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TambahNilaiMahasiswaPage

