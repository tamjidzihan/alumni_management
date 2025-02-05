import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb'
import Content from '../../components/Content/Content'

const SiteContent = () => {
    return (
        <>
            <Breadcrumb pageName="Site Content" />
            <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
                <div className="flex flex-col gap-9">
                    <Content />
                </div>
            </div>
        </>
    )
}

export default SiteContent