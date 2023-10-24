import { FunctionComponent } from "react";

interface LoadingProps {

}

const Loading: FunctionComponent<LoadingProps> = () => {
    return (
        <span className="loading loading-spinner loading-md"></span>
    );
}

export default Loading;