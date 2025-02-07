import { useRoutes } from "react-router-dom";
import { commonRoutes, commonMobileRoutes } from "@/commons/routes";
import userRoutes from "@/user/routes";
import roleRoutes from "@/role/routes";
import staticPageRoutes from "@/staticPage/routes";
import homeRoutes from "@/home/routes";
import kurikulumRoutes from "@/kurikulum/routes";
import mataKuliahRoutes from "@/mataKuliah/routes";
import kelasRoutes from "@/kelas/routes";
import cPMKRoutes from "@/cPMK/routes";
import subCPMKRoutes from "@/subCPMK/routes";
import laporanCPMKRoutes from "@/laporanCPMK/routes";
import ringkasanAkademisRoutes from "@/ringkasanAkademis/routes";
import riwayatAkademisRoutes from "@/riwayatAkademis/routes";
import lihatIRSRoutes from "@/lihatIRS/routes";
import isiUbahIRSRoutes from "@/isiUbahIRS/routes";
import pengaturanPengisianIRSRoutes from "@/pengaturanPengisianIRS/routes";
import pembayaranRoutes from "@/pembayaran/routes";
import programStudiRoutes from "@/programStudi/routes";
import cPLRoutes from "@/cPL/routes";
import laporanCPLRoutes from "@/laporanCPL/routes";
import semesterRoutes from "@/semester/routes";
import penilaianKelasRoutes from "@/penilaianKelas/routes";

const GlobalRoutes = () => {
  const router = useRoutes([
	...commonRoutes,
	...staticPageRoutes,
	...userRoutes,
	...roleRoutes,
	...homeRoutes, 
	...kurikulumRoutes, 
	...mataKuliahRoutes, 
	...kelasRoutes, 
	...cPMKRoutes, 
	...subCPMKRoutes, 
	...laporanCPMKRoutes, 
	...ringkasanAkademisRoutes, 
	...riwayatAkademisRoutes, 
	...lihatIRSRoutes, 
	...isiUbahIRSRoutes, 
	...pengaturanPengisianIRSRoutes, 
	...pembayaranRoutes, 
	...programStudiRoutes, 
	...cPLRoutes, 
	...laporanCPLRoutes, 
	...semesterRoutes, 
	...penilaianKelasRoutes, 
  ])
  return router
}

const MobileRoutes = () => {
	const router = useRoutes([ 
	  ...commonMobileRoutes, 
  ])
  return router
}

export {GlobalRoutes, MobileRoutes}
