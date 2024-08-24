import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
;


function Set() {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);



    useEffect(() => {
        const getSet = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }

        getSet();
    }, []);

    const Loading = () => {
        return (
            <>
                Loading....
            </>
        )
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="col md-6 py-2 my-2">
                    <img src={product.image} alt={product.title} height={400} width={400} />
                </div>
                <div className="col-md-6 py-2 my-2">
                    <h4 className="text-uppercase text-black-50">
                        {product.category}
                    </h4>
                    <h1 className="display-5">
                        {product.title}
                    </h1>
                    <p className="fw-bolder">
                        Rating {product.rating && product.rating.rate} <i className="fa fa-star"></i>
                    </p>
                    <h3 className=" display-6 fw-bold">
                        {product.price}
                    </h3>
                    <p className="lead">{product.description}</p>
                    <button className="btn btn-outline-dark me-2">
                        Add to cart
                    </button>
                    <NavLink to='/cart' className="btn btn-dark">
                        Go to cart
                    </NavLink>
                </div>

            </>

        )
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    {ShowProducts ? <ShowProducts /> : <Loading />}
                </div>
            </div>
        </>
    )
}
export default Set;