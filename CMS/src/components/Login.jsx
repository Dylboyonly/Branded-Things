import axios from 'axios';
import { useState } from 'react'



function LoginForm({ setPage, url }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    async function handleLogin(event) {
        event.preventDefault();
        try {
            let { data } = await axios.post(`${url}/apis/login`, { email, password });
            console.log(data.data.access_token)
            localStorage.setItem("access_token", data.data.access_token);

            // Toastify({
            //     text: "Success Login",
            //     duration: 2000,
            //     newWindow: true,
            //     close: true,
            //     gravity: "bottom",
            //     position: "right",
            //     stopOnFocus: true,
            //     style: {
            //         background: "#00B29F",
            //         color: "#17202A",
            //         boxShadow: "0 5px 10px black",
            //         fontWeight: "bold"
            //     }
            // }).showToast();
            // setPage('home')
            if (localStorage) {
                setPage('home')
            }
        } catch (error) {
            // Toastify({
            //     text: error.response.data.error,
            //     duration: 2000,
            //     newWindow: true,
            //     close: true,
            //     gravity: "bottom",
            //     position: "right",
            //     stopOnFocus: true,
            //     style: {
            //         background: "#EF4C54",
            //         color: "#17202A",
            //         boxShadow: "0 5px 10px black",
            //         fontWeight: "bold"
            //     }
            // }).showToast();
            console.log(error)
        }
    }

    return (
        <>
            <div className="row justify-center align-center mt-[200px]">
                <div className="ml-30 justify-center flex align-center x-50">
                    <div className="mt-30">
                        <span className="text-6xl font-black">Hello There Mr/Ms.....?</span>
                        <br />
                        <br />
                        <span className="text-1xl font-black">I'm Sorry ... Could you please Log In first ...?</span>
                    </div>
                </div>
                <div className="flex justify-center align-center w-[1500px] mt-30 gap-20">
                    <div>
                        <img src="https://ouch-cdn2.icons8.com/GhEE3FM2au2ebS8jqiQ_UMzSVtlBtNd6wKEVssuBJLk/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNTI0/LzM3MWQ1NjU1LTM1/ZjctNGQwMS1iNzM2/LThkNWRmNzFmOTdl/Zi5zdmc.png" />
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={handleLogin} className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginForm