
// import Header from "./Header";
import ComponentHeader from "@/components/Layout/ComponentHeader";
import ComponentSidebar from "@/components/Layout/ComponentSidebar";

const Layout = ({ children } : {children: JSX.Element | JSX.Element[]}) => {
  return (
    <div className="pt-[120px] min-h-screen">
      <div className="flex">
        <div className="w-48">
          <ComponentSidebar />
        </div>
        <div className="flex-1">
          <ComponentHeader />
          <main className="ml-20 bg-gray-100 min-h-[calc(100vh-120px)] py-18">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;