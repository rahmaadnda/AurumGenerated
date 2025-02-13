const menus = []
const addMenu = (menu) => {
	menus.push(menu)
}

const addSubMenu = (label, subMenu, menu = menus) => {
	for (const item of menu) {
		if (item.label === label) {
			item.subMenus.push(subMenu);
			return;
		}
		if (item.subMenus) {
			addSubMenu(label, subMenu, item.subMenus);
		}
	}
}

export const settingsMenu = [
	{
	  route: '#',
	  label: 'Pengaturan',
	  subMenus: [
		{
		  route: '/settings/appearance',
		  label: 'Pengaturan Tampilan',
		},
		{
		  route: '/settings/role',
		  label: 'Pengaturan Role',
		},
		{
		  route: '/settings/user',
		  label: 'Pengaturan User',
		},
	  ]
	},
]
  
export default menus
addMenu({
	route: '/kurikulum',
    label: 'Kurikulum',
	subMenus: []
})

addMenu({
	route: '/pembayaran',
    label: 'Pembayaran',
	subMenus: []
})

addMenu({
	route: '#',
    label: 'Akademis',
	subMenus: []
})

addSubMenu('Akademis', {
	route: '/akademis/ringkasan',
	label: 'Ringkasan',
	
})

addSubMenu('Akademis', {
	route: '/akademis/riwayat',
	label: 'Riwayat',
	
})

addMenu({
	route: '/penilaian-kelas',
    label: 'Penilaian Kelas',
	subMenus: []
})

addMenu({
	route: '/matakuliah',
    label: 'Mata Kuliah',
	subMenus: []
})

addMenu({
	route: '#',
    label: 'CPL',
	subMenus: []
})

addSubMenu('CPL', {
	route: '/cpl',
	label: 'CPL',
	
})

addSubMenu('CPL', {
	route: '/cpl/laporan',
	label: 'Laporan CPL',
	
})

addMenu({
	route: '#',
    label: 'IRS',
	subMenus: []
})

addSubMenu('IRS', {
	route: '/irs/ringkasan',
	label: 'Lihat IRS',
	
})

addSubMenu('IRS', {
	route: '/irs/isi',
	label: 'Isi/Ubah IRS',
	
})

addSubMenu('IRS', {
	route: '/irs/pengaturan',
	label: 'Pengaturan Pengisian IRS',
	
})

addMenu({
	route: '#',
    label: 'CPMK',
	subMenus: []
})

addSubMenu('CPMK', {
	route: '/cpmk',
	label: 'CPMK',
	
})

addSubMenu('CPMK', {
	route: '/subcpmk',
	label: 'Sub-CPMK',
	
})

addSubMenu('CPMK', {
	route: '/cpmk/laporan',
	label: 'Laporan CPMK',
	
})

addMenu({
	route: '/semester',
    label: 'Semester',
	subMenus: []
})

addMenu({
	route: '/kelas',
    label: 'Kelas',
	subMenus: []
})

addMenu({
	route: '/programstudi',
    label: 'Program Studi',
	subMenus: []
})
