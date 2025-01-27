import { useState } from "react";
import axios from "axios";

export const useImageUpload = () => {
    const [isUploading, setIsUploading] = useState(false);
    const [uploadError, setUploadError] = useState<string | null>(null);

    const uploadImageToCloudinary = async (image: File): Promise<string> => {
        setIsUploading(true);
        setUploadError(null);

        const cloudinaryUrl = "https://api.cloudinary.com/v1_1/dgjxkoai7/image/upload";
        const preset = "alumni_management_system";

        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", preset);

        try {
            const response = await axios.post(cloudinaryUrl, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            setIsUploading(false);
            return response.data.secure_url;
        } catch (error) {
            setUploadError("Failed to upload image. Please try again.");
            setIsUploading(false);
            throw error;
        }
    };

    return {
        isUploading,
        uploadError,
        uploadImageToCloudinary,
    };
};
