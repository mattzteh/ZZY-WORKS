import { useDispatch } from "react-redux"


const ProductIndexPage = ({product}) => {
    const dispatch = useDispatch();

    return (

    <div>
        <img src={product.photoUrl}/>
        {console.log(product.photoUrl[0])}
        <h1>{product.name}</h1>
    </div>

    )
}

export default ProductIndexPage;