import React, { useContext, useState } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { addDoc } from 'firebase/firestore'
import { moviesRef } from './firebase/firebase'
import swal from 'sweetalert'
import { AppState } from '../App'
import { useNavigate } from 'react-router-dom'

const AddMovie = () => { 
    const useAppState = useContext(AppState)
    const navigate = useNavigate()
    const [form, setForm] = useState({
        title: "",
        year: "",
        description: "",
        image:"",
        rated:0,
        rating:0
    })
    const [loading,setLoading] = useState(false)
    const AddMovie = async () =>{

        setLoading(true)
        try {
        if(useAppState.login) {
        await addDoc(moviesRef , form)
        swal({
            title:"Successfully Added",
            icons:"Success",
            button:false,
            timer:3000
        })
        setForm({
        title: "",
        year: "",
        description: "",
        image:""
        })
    }else {
       navigate('/login')
      }
        } catch (error) {
            swal({
                title:error,
                icons:"error",
                button:false,
                timer:3000
            })
            
        }
        setLoading(false) 
    }
    return (
        <div>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-8 mx-auto">
                    <div className="flex flex-col text-center w-full mb-4">
                        <h1 className="sm:text-xl text-2xl font-medium title-font mb-4 text-red-500">Add New Movie</h1>

                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label for="name" className="leading-7 text-sm text-white">Title</label>
                                    <input type="text" id="name" name="name" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label for="email"
                                        className="leading-7 text-sm text-white">Year</label>
                                    <input type="email" id="email" name="email" value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} className="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label for="message" className="leading-7 text-sm text-white">Image Link </label>
                                    <input id="message" name="message" value={form.image} onChange={(e) => setForm({ ...form,image: e.target.value })} className="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label for="message" className="leading-7 text-sm text-white">Description </label>
                                    <textarea id="message" name="message" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
 <button onClick={AddMovie} className="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
    { loading ? <TailSpin height={25} color="white"/> : "Submit"}
 </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AddMovie