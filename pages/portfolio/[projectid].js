import { useRouter } from 'next/router';

function PortfolioProjectPage(){
    const router = useRouter();

    // console.log(router.pathname);
    // console.log(router.query);

    //we can get the projectid by infering router.query.projectid

    return (
        <h1>The PortfolioProjectPage</h1>
    )
}

export default PortfolioProjectPage;