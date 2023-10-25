'use client';
import { FunctionComponent } from "react";
import { CldUploadWidget } from 'next-cloudinary';

interface UploadWidgetPageProps {

}

const UploadWidgetPage: FunctionComponent<UploadWidgetPageProps> = () => {
    return (
        <CldUploadWidget uploadPreset="wxmopopt">
            {({ open }) => <button className="btn btn-primary" onClick={() => open()}>Upload</button>}
        </CldUploadWidget>
    );
}

export default UploadWidgetPage;