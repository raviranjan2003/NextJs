import { useRouter } from "next/router";

function BlogsPage(){
    const router = useRouter();
    console.log(router.query);
    
    return (
        <h1>This is Blog Page</h1>
    )
}

export default BlogsPage;