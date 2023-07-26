import { useEffect, useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card.jsx';


function Jewelry() {
    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const apiData = await fetch('https://fakestoreapi.com/products/category/jewelery');
                const response = await apiData.json();
                setData(response);
            } catch(e) {
                setError(e);
            }
        }

        fetchData();
    },[]);

    function checkCondition() {
        if (error) {
            return 'There seems to be an error, try refreshing';
        }

        if (!data && !error) {
            return "Loading"
        }

        if (data) {
            return (
                <div>
                    {data.map((product) => <Card key={product.id} product={product}/>)}
                </div>
            );
        }
    }
    return (
        <>
        <Header />
        {checkCondition()}
        <Footer />
        </>
    )
}

export default Jewelry
