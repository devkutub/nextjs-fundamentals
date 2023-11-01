'use client';
import { FunctionComponent, useState } from "react";
import { CldUploadWidget, CldImage } from 'next-cloudinary';

interface UploadWidgetPageProps { }

interface CloudinaryResult {
    public_id: string;
}

const UploadWidgetPage: FunctionComponent<UploadWidgetPageProps> = () => {
    const [publicId, setPublicId] = useState('' as string);
    return (
        <>
            {publicId && <CldImage src={publicId} width={270} height={180} alt="fragrance" />}
            <CldUploadWidget
                uploadPreset="wxmopopt"
                onUpload={(result) => {
                    const info = result.info as CloudinaryResult;
                    if (info.public_id) setPublicId(info.public_id);
                }}
            >
                {({ open }) => <button className="btn btn-primary" onClick={() => open()}>Upload</button>}
            </CldUploadWidget>
        </>
    );
}

export default UploadWidgetPage;