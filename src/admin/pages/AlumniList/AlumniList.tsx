
import AlumniListTable from "../../components/AlumniListTable/AlumniListTable";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
const AlumniList = () => {

    return (
        <>
            <Breadcrumb pageName="Alumni List" />
            <div className="flex flex-col gap-10 ">
                <AlumniListTable />
            </div>
        </>
    );
};

export default AlumniList;
