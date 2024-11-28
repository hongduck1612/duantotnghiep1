import Sidebaradmin from '../component/sidebaradmincomponent/Sidebaradmin';
import Headertongquan from '../component/headertongquancomponent/Headertongquan';
import Dashboardtongquan from '../component/dashboardtongquancomponent/DashboardCardtongquan';
import Charttongquan from '../component/charttongquancomponent/Charttongquan';
import Headerquanlydanhmuc from '../component/headerquanlydanhmuccomponent/Headerquanlydanhmuc';
import Textquanlydanhmuc from '../component/textquanlydanhmuccomponent/textquanlydanhmuc';
import Categoryquanlydanhmuc from '../component/categorytablequanlydanhmuccomponent/CategoryTablequanlydanhmuc';
import Headerquanlysanpham from '../component/headerquanlysanphamcomponent/HeaderQuanlySanpham';
import Textquanlysanpham from '../component/textquanlysanphamcomponent/textquanlysanpham';
import Productquanlysanpham from '../component/producttablequanlysanphamcomponent/ProductTablequanlysanpham';
import Headerquanlykhachhang from '../component/headerquanlykhachhangcomponent/HeaderQuanlykhachhang';
import Textquanlykhachhang from '../component/textquanlykhachhangcomponent/textquanlykhachhang';
import Customerquanlykhachhang from '../component/customertablequanlykhachhangcomponent/CustomerTablequanlykhachhang';
import Orderquanlydonhang from '../component/ordertablequanlydonhangcomponent/OrdertTablequanlydonhang';
import Headerquanlydonhang from '../component/headerquanlydonhangcomponent/Headerquanlydonhang';
import Textquanlydonhang from '../component/textquanlydonhangcomponent/textquanlydonhang';
import Headerthemxoasuasanpham from '../component/headerthemxoasuasanphamcomponent/Headerthemxoasuasanpham';
import Textthemxoasuasanpham from '../component/texthemxoasuasanphamcomponent/textthemxoasuasanpham';
import Editthemxoasuasanpham from '../component/edittablethemxoasuacomponent/EditTablethemxoasua';
import Headerquanlybanner from '../component/headerquanlybannercomponent/Headerquanlybanner';
import Textquanlybanner from '../component/textquanlybannercomponent/textquanlybanner';
import Tablequanlybanner from '../component/tablequanlybannercomponent/Tablequanlybanner';

export default function AdminPage() {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <Sidebaradmin />
            <div style={{ flexGrow: 1, padding: '20px' }}>
                {/* tổng quan */}
                {/* <Headertongquan />
                <Dashboardtongquan />
                <Charttongquan /> */}
                {/* quản lý danh mục */}
                {/* <Headerquanlydanhmuc />
                <Textquanlydanhmuc />
                <Categoryquanlydanhmuc /> */}
                {/* quản lý sản phẩm     */}
                {/* <Headerquanlysanpham />
                <Textquanlysanpham />
                <Productquanlysanpham /> */}
                {/* quản lý khách hàng*/}
                {/* <Headerquanlykhachhang />
                <Textquanlykhachhang />
                <Customerquanlykhachhang /> */}
                {/* quản lý đơn hàng*/}
                {/* <Headerquanlydonhang />
                <Textquanlydonhang />
                <Orderquanlydonhang /> */}
                {/* quản lý thêm xoá sửa sản phẩm*/}
                {/* <Headerthemxoasuasanpham />
                <Textthemxoasuasanpham />
                <Editthemxoasuasanpham /> */}
                {/* quản lý banner*/}
                <Headerquanlybanner />
                <Textquanlybanner />
                <Tablequanlybanner />
            </div>
        </div>
    );
}