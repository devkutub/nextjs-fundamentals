'use client';
import { FunctionComponent, useState } from "react";
// import HeavyComponent from "../components/HeavyComponent";
import dynamic from "next/dynamic";
const HeavyComponent = dynamic(
    () => import("../components/HeavyComponent"),
    {
        ssr: false,
        loading: () => <p>...loading</p>
    }
); // lazy loading, loaded when required, need to use for loaded component or else there will be no use of it
// import _ from "lodash"; // static import

interface AdminHomePageProps {

}

const AdminHomePage: FunctionComponent<AdminHomePageProps> = () => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <h1>Admin Home Page</h1>
            <button className="btn btn-primary" onClick={() => setVisible(true)}>Show</button>
            {visible && <HeavyComponent />}
            <button className="btn btn-secondary" onClick={async () => {
                const _ = (await import("lodash")).default; // lazy loading external javascript library
                const users = [
                    { name: "c" },
                    { name: "b" },
                    { name: "a" },
                ];

                const sortedUser = _.orderBy(users, ["name"]);
                console.log(sortedUser);
            }}>Lodash Button</button>
        </>
    );
}

export default AdminHomePage;