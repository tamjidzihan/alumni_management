import { GalleryProps } from "../../../hooks/useGallery"

interface ImageGalleryProps {
    allImage: GalleryProps[];
}



const ImageGallery = ({ allImage }: ImageGalleryProps) => {
    return (
        <div className="col-span-5 xl:col-span-3">


            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="py-6 px-4 md:px-6 xl:px-7.5">
                    <h4 className="text-xl font-semibold text-black dark:text-white">
                        Uploaded Images
                    </h4>
                </div>

                <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
                    <div className="col-span-4 flex items-center">
                        <p className="font-medium">Photo</p>
                    </div>
                    <div className="col-span-4 hidden items-center sm:flex">
                        <p className="font-medium">Description</p>
                    </div>
                </div>

                {allImage.map((image) => (
                    <div
                        className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
                        key={image.id}
                    >
                        <div className="col-span-4 flex items-center">
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                <div className="h-30 w-45 rounded-md">
                                    <img src={image.url} alt="Product" />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 hidden items-center sm:flex">
                            <p className="text-sm text-black dark:text-white">
                                {image.imageContext}
                            </p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImageGallery