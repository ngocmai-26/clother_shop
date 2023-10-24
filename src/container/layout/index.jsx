import NavAdmin from "../../container/admin/component/nav";
import Header from "./header";
import Footer from "./footer";

export const Layout = ({ isAdmin, children }) => {
  return (
    <div>
      {isAdmin ? (
        <>
          <div className="flex">
            <NavAdmin />
            {children}
          </div>
        </>
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </div>
  );
};
