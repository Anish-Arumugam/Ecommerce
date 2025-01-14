import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';

function Products() {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                Loading....
            </>
        )
    }
    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }

    const ShowProducts = () => {
        return (
            <>
                <div className='buttons d-flex justify-content-center'>
                    <button className='btn btn-outline-dark me-2' onClick={() => setFilter(data)}>All</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("men's clothing")}>Men's clothing</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("women's clothing")}>Women's clothing</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("electronics")}>Electronics</button>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className='col-md-3 mt-3 mb-4'>
                                <div className="card text-center h-100 p-4" key={product.id}>
                                    <img src={product.image} className="card-img-top" alt={product.title} height={250} />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                                        <p className="card-text">${product.price}</p>
                                        <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy now</NavLink>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}

            </>
        );

    };

    return (
        <div>
            <div className='container my-5 py-6'>
                <div className='row'>
                    <div className='col-12 mb-5'>
                        <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                        <hr></hr>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center'>
                {ShowProducts ? <ShowProducts /> : <Loading />}
            </div>
        </div>

    )
}

export default Products;