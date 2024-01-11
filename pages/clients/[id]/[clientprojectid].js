import { useRouter } from "next/router";

function SelectedClientProjectPage(){
    const router = useRouter();
    // console.log(router.query);
    //here we'll get both [id] and [clientprojectid] concrete value

    return (
        <h1>The Project Page for a Specific Project for a Selected Client</h1>
    )
}

export default SelectedClientProjectPage;