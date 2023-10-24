import { FunctionComponent } from "react";

interface NotFoundPageProps {

}

const NotFoundPage: FunctionComponent<NotFoundPageProps> = () => {
    return (
        <div>This request does not exist</div>
    );
}

export default NotFoundPage;