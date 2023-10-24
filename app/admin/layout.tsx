import { FunctionComponent, ReactNode } from "react";

interface AdminLayoutProps {
   children: ReactNode; 
}
 
const AdminLayout: FunctionComponent<AdminLayoutProps> = ({ children }) => {
    return (
        <div className="flex">
            <aside className="bg-slate-200 p-5 mr-5">Side bar</aside>
            <div>{children}</div>
        </div>
    );
}
 
export default AdminLayout;