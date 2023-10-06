import RouterAdmin from "../../RouteAdmin";
import HeaderAdmin from "./component/header";
import Dashboard from "./dashboard";
import ProductManager from "./product_manager";
import ProductCreate from "./product_manager/create";
import UserCreate from "./user_manager/create";

function HomeAdmin() {
    return ( 
        <div className="bg-gray-100 font-family-karla flex">
            <RouterAdmin />
        </div>
     );
}

export default HomeAdmin;