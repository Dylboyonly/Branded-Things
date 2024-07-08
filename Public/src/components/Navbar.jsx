

export default function NavBar() {

  return (
    <>

      <nav className="bg-white p-4 flex items-center justify-between">
       
        <div className="flex items-center">
          <a href="/"><span className="text-black text-lg font-semibold">Branded Things</span></a>
        </div>

        <div className="flex justify-between" style={{ justifyContent: "space-between", gap: "20px" }}>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className=" m-1 bg-white text-black border-0" style={{ width: "120px" }}>Men</div>
          </div>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className=" m-1 bg-white text-black border-0" style={{ width: "120px" }} >Women</div>
          </div>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className=" m-1 bg-white text-black border-0" style={{ width: "120px" }}>kids</div>
          </div>
        </div>
      </nav>


    </>
  )


}