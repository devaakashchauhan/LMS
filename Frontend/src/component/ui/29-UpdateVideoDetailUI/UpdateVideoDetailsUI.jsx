import axios from 'axios'
import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LoaderUI from '../0-LoaderUI/LoaderUI';
import Swal from 'sweetalert2';

// icon,svg
import { MdAddAPhoto } from "react-icons/md";

function UpdateVideoDetailsUI() {

    const navigate = useNavigate()
    const inputRef = useRef(null)
    const videoRef = useRef(null)

    const [image, setImage] = useState('')
    const [videoIdForUpdate, setVideoIdForUpdate] = useState({})
    const [Loader, setLoader] = useState(false)
    const [handleSubmitbtn, setHandleSubmitbtn] = useState(false)

    const [form, setForm] = useState({
        title: "",
        description: "",
        thumbnail: "",
        video: "",
        videoid: "",
    });

    const [image2, setImage2] = useState('')
    const [video2, setvideo2] = useState('')
    const [form2, setForm2] = useState({
        title: "",
        description: "",
        thumbnail: "",
        video: "",
        videoid: "",
    });

    useEffect(() => {
        const stringToObject = JSON.parse(localStorage.getItem("videoIdForUpdate"));
        if (stringToObject) {
            setVideoIdForUpdate(stringToObject);
            setForm({
                title: stringToObject.title,
                description: stringToObject.description,
                thumbnail: stringToObject.thumbnail,
                video: stringToObject.video,
                videoid: stringToObject.videoid,
            });
        }
    }, []);


    // handel text input change
    const handleInputChange = (e) => {
        setForm2({ ...form2, [e.target.name]: e.target.value })
    };

    // handel open file to input image
    const handleImgClick = () => {
        inputRef.current.click()
    }

    // handel image input change
    const handleImgChange = (event) => {
        setImage2(event.target.files[0])
        console.log("image : ", event.target.files[0])
        console.log("image : ", image)
    }

    // handel open file to input video
    const handleVideoClick = () => {
        videoRef.current.click()
    }

    // handel video input change
    const handleVideoChange = (event) => {
        setvideo2(event.target.files[0])
    }
    const handelUpdate = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update it!"
        }).then((result) => {
            if (result.isConfirmed) {
                videoUpload()
            }
        });
    }



    const videoUpload = () => {
        setHandleSubmitbtn(true)
        setLoader(true)

        const formdata = new FormData()
        formdata.append("title", form2.title)
        formdata.append("description", form2.description)
        formdata.append("videoid", form.videoid)
        formdata.append("thumbnail", image2)
        formdata.append("video", video2)

        axios.post('/api/v1/users/courseupdate', formdata)
            .then(function (response) {
                console.log(response);
                setHandleSubmitbtn(false)
                setLoader(false)
                const user = response.data.data._id;
                if (user) {
                    toast(`Course Updated 😃`)
                    navigate("/teacherDashboard/courseview")
                }
            })
            .catch(function (error) {
                console.log(error);
                setHandleSubmitbtn(false)
                setLoader(false)
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className="grid justify-items-center">
                <LoaderUI show={Loader} />
            </div>
            <div className='w-full bg-white py-24'>
                <div className="text-center">
                    <h1 className='text-3xl py-3 font-bold '>Course <span className='text-[#20B486]'>Setup</span></h1>
                </div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className=" md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px] ">
                        <div className="p-3">
                            <div className=" bg-gray-100 w-full  max-w-[800px] p-4 shadow-lg rounded-md flex  border border-transparent ">
                                <div className="w-full flex flex-col justify-center">
                                    <div className="flex flex-col">
                                        <label htmlFor="name" className="text-xl py-1 font-bold ">
                                            Course Title
                                        </label>
                                        <input
                                            type="name"
                                            name="title"
                                            id="name"
                                            placeholder="Name"
                                            defaultValue={form.title}
                                            onChange={handleInputChange}
                                            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-200 text-gray-800 font-semibold focus:border-[#20B486] focus:outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-3">
                            <div className=" bg-gray-100 w-full  max-w-[800px] p-4 shadow-lg rounded-md flex  border border-transparent ">
                                <div className="w-full flex flex-col justify-center">
                                    <div className="flex flex-col">
                                        <label htmlFor="name" className="text-xl py-1 font-bold ">
                                            Course Description
                                        </label>
                                        <input
                                            type="name"
                                            name="description"
                                            id="name"
                                            placeholder="Name"
                                            defaultValue={form.description}
                                            onChange={handleInputChange}
                                            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-200 text-gray-800 font-semibold focus:border-[#20B486] focus:outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-3">
                            <div className=" bg-gray-100 w-full  max-w-[800px] p-4 shadow-lg rounded-md flex  border border-transparent ">
                                <div className="w-full flex flex-col justify-center">
                                    <div className="flex flex-col "  >
                                        <div className="flex ">
                                            <label htmlFor="name" className="text-xl py-1 font-bold ">
                                                Course Image
                                            </label>
                                            <MdAddAPhoto size={40} onClick={handleImgClick} className='ms-auto hover:cursor-pointer' />
                                        </div>
                                        <div className=" w-[287px] rounded-lg overflow-hidden  object-contain   h-[160px] border">
                                            {image2 ? <img src={URL.createObjectURL(image2)} /> : <img src={form.thumbnail} />}
                                        </div>
                                        <input
                                            type="file"
                                            name="name"
                                            id="name"
                                            placeholder="Name"
                                            ref={inputRef}
                                            onChange={handleImgChange}
                                            className="hidden "
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-3">
                            <div className=" bg-gray-100 w-full  max-w-[800px] p-4 shadow-lg rounded-md flex  border border-transparent ">
                                <div className="w-full flex flex-col justify-center">
                                    <div className="flex flex-col "  >
                                        <div className="flex ">
                                            <label htmlFor="name" className="text-xl py-1 font-bold ">
                                                Course Video
                                            </label>
                                            <MdAddAPhoto size={40} onClick={handleVideoClick} className='ms-auto hover:cursor-pointer' />
                                        </div>
                                        <div className=" w-[287px] rounded-lg overflow-hidden   h-[160px] border">
                                            {video2 ? <video src={URL.createObjectURL(video2)} /> : <video src={form.video} />}
                                        </div>
                                        <input
                                            type="file"
                                            name="name"
                                            id="name"
                                            placeholder="Name"
                                            ref={videoRef}
                                            onChange={handleVideoChange}
                                            className="hidden "
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-5">
                        <button onClick={() => handelUpdate()} className=' max-w-[300px] bg-[#20B486] my-4 px-8 py-3 rounded-md text-white font-bold' disabled={handleSubmitbtn}>
                            {handleSubmitbtn ? "Course Updating..." : "Update Course"}
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default UpdateVideoDetailsUI