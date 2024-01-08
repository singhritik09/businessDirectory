import { useState } from 'react'
import Navbar from './Navbar'
function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [descr, setDescr] = useState('')
    const [tag, setTag] = useState('')
    const [contact, setContact] = useState('')
    const [gst, setGst] = useState('')
    const [location, setLocation] = useState('')



    async function signUser(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:8000/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
                name,
                descr,
                tag,
                contact,
                gst,
                location,
            }),
        })

        const data = await response.json()
        // window.location.href = '/home'
        if (response.status === 201 && data.status === 'success') {
            // Redirect to /home on successful signup
            window.location.href = '/home';
          } else {
            // Handle signup error
            console.log(data);
          }
        console.log(data);
    }

    return (

        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <Navbar />
            <div className="w-1/2 p-6 m-auto bg-gray-100 rounded-md shadow-md lg:max-w-xl">
                <form onSubmit={signUser} className="mt-6">
                    <div className="mb-2">
                        <h2 className="text-3xl font-semibold text-center text-green-700 ">Signup</h2>
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Set Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}

                        />
                    </div>

                    <div className="mb-2">
                        <label
                            for="name"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Business Name
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">

                        <label
                            for="descr"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Description
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            value={descr}
                            onChange={(e) => setDescr(e.target.value)}
                        />
                    </div>

                    <div className="mb-2">

                        <label
                            for="tags"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Tags
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            value={tag}
                            onChange={(e) => setTag(e.target.value)}
                        />
                    </div>

                    <div className="mb-2">

                        <label
                            for="contact"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Contact
                        </label>
                        <input
                            type="tel"
                            className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                        />
                    </div>

                    <div className="mb-2">
                        <label
                            for="location"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            GST number
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            value={gst}
                            onChange={(e) => setGst(e.target.value)}
                        />
                    </div>



                    <div className="mb-2">
                        <label
                            for="location"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Location
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>



                    <div className="mt-6">
                        <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-800 focus:outline-none focus:bg-green-600">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;