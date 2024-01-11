import { useRouter } from "next/router";

function ClientProjectPage(){
    const router = useRouter();
    console.log(router.query);

    function handleClick(){
        router.push('/clients/ravi/ranjan');
        //using replace method, we can't go back...
        // router.replace('/clients/ravi/ranjan');
    }
    return (
        <div>
            <h1>The Projects of a given Client</h1>
            <button onClick={handleClick}>Click()</button>
        </div>
    )
}

export default ClientProjectPage;