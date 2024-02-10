
import axios from 'axios';
import { useEffect, useState } from 'react';

const CardUI = ({ video, title, description, thumbnail, _id }) => {

  const [id, setId] = useState(_id)
  const [rolechk, setRolechk] = useState(false)






  const handelDeleteVideo = () => {
    axios.post('/api/v1/users/deletevideo',
      { id }
    )
      .then(function ak(response) {
        // console.log(response);
        // console.log(response.data.data);

      })
      .catch(function (error) {
        console.log(error);

      });
  }


  const setPlayerVideo = () => {
    localStorage.setItem("playerVideo", video)
  }
  return (
    <>

      <div className="bg-white drop-shadow-md overflow-hidden rounded-2xl mr-4 my-4 card h-[400px]" >
        <img src={thumbnail} alt="" className="max-h-72 w-full object-cover p-3 rounded-3xl" style={{ height: "200px" }} />
        <div className="p-5  ">
          <h1 className='py-2 truncate'>{description}</h1>
          {/* <StarRating rating={course.rating} /> */}
        </div>
        <div className="items-center justify-between">
          <h3 className='p-5 text-2xl font-bold text-gray-900 '>{title}</h3>
          <div className=" px-3 flex justify-between">

            <a
              href="/videoPlayer"
              onClick={setPlayerVideo}
              className="me-[10px] text-white bg-[#20B486] hover:bg-[#20B486] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Play
            </a>
            <a
              onClick={handelDeleteVideo}
              className="me-[10px] text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Delete
            </a>
          </div>
        </div>
        <div className="absolute top-0 bg-white m-5 px-2 py-[2.5px] rounded font-bold">
          <h1>new</h1>
        </div>
      </div>
    </>
  )
}

export default CardUI