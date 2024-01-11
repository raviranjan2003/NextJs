import Link from "next/link";

function Clients(){
    const clients = [
        {id:"ravi", name:"Ravi"},
        {id:"ranjan", name:"Ranjan"},
        {id:"ranjan1", name:"Ranjan1"},
    ]
    return(
        <div>
            <h1>This is Client Page</h1>
            <ul>
                {clients.map(client =>(
                    <li key={client.id}>
                        {/* <Link href= {`/clients/${client.id}`}>{client.name}</Link> */}
                        <Link href={{
                            pathname : "/clients/[id]",
                            query : { id: client.id}
                        }} >{client.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Clients;