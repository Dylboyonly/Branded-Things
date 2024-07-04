
function NavBar({ setPage }) {
    console.log(setPage)
    function handleLogout() {
        localStorage.clear()
        setPage('login')
    }

    return (
        <>
            <nav className="bg-gray-800 p-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <span className="text-white text-lg font-semibold">Branded Things</span>
                </div>

                <div className="flex justify-between" style={{ justifyContent: "space-between", gap: "20px" }}>
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="btn m-1 bg-blue text-white" style={{ width: "120px" }}>Categories</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><a>Category A</a></li>
                            <li><a>Category B</a></li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="btn m-1 bg-blue text-white" style={{ width: "120px" }} >Filter</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><a>By Id</a></li>
                            <li><a></a></li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="btn m-1 bg-blue text-white" style={{ width: "120px" }}>Sort</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><a>Created At</a></li>
                            <li><a>Price </a></li>
                        </ul>
                    </div>
                </div>


                <div className="flex">
                    {/* Login Button */}
                    <button onClick={handleLogout} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Log out</button>

                </div>
            </nav>
        </>
    )
}

export default NavBar