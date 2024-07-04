

function ProductTable({products}) {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th className="w-3">Image Url</th>
                            <th>Stock</th>
                            <th>AuthorId</th>
                            <th className="w-[30px]">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => {
                            return (
                                <tr key={product.id}>
                                    <th>{product.id}</th>
                                    <th><img src={product.imgUrl} /></th>
                                    <td>{product.name}</td>
                                    <td>{product.description}</td>
                                    <td>{product.price}</td>
                                    <td>{product.imgUrl}</td>
                                    <td>{product.stock}</td>
                                    <td>{product.authorId}</td>
                                    <td><button className="btn ">Edit</button> <button className="btn ">Delete</button></td>
                                </tr>

                            )
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>company</th>
                            <th>location</th>
                            <th>Last Login</th>
                            <th>Favorite Color</th>
                            <td><button>Edit</button> <button>Delete</button></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    )
}

export default ProductTable