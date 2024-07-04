

function AddProduct() {

    const ct = ["male", 'female', 'trasngender']
    return (
        <>
            <form className="flex justify-center items-center w-[70%]">
                <div className=" grid grid-cols-2 gap-4">
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Name</span>
                        </label>
                        <input

                            type="text"
                            placeholder="Name"
                            className="w-full input input-bordered input-primary"
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Description</span>
                        </label>
                        <input

                            type="text"
                            placeholder="Enter Description"
                            className="w-full input input-bordered input-primary"
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Price</span>
                        </label>
                        <input

                            type="number"
                            placeholder="Enter Price"
                            className="w-full input input-bordered input-primary"
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Stock</span>
                        </label>
                        <input

                            type="number"
                            placeholder="Enter Stock"
                            className="w-full input input-bordered input-primary"
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Image (URL)</span>
                        </label>
                        <input

                            type="text"
                            placeholder="Image URL"
                            className="w-full input input-bordered input-primary"
                        />
                        {/* <a href="" class="text-xs ml-1 text-gray-600 hover:text-primary">Want to upload a file instead?</a> */}
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Category</span>
                        </label>
                        <select
                            className="w-full input input-bordered input-primary"
                            name="category"
                            id=""
                        >
                            {ct.map(c => {
                                return <option>{c}</option>
                            })}
                        </select>
                    </div>

                    <div>
                        <button className="btn btn-accent mt-10 w-full">Add New Product</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default AddProduct