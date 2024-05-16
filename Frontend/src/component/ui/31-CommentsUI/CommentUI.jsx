import { useState } from "react"


function CommentUI({ setcommentfun, videoid, userId, username, userAvatar }) {
    const [comment, setComment] = useState('')


    const setcommentfun2 = (videoid, userId, comment, username, userAvatar) => {
        setcommentfun(videoid, userId, comment, username, userAvatar)
        console.log("befor", comment)
        // setComment('')
        console.log("after", comment)

    }

    const handleCommentSubmit = () => {
        setcommentfun2(videoid, userId, comment, username, userAvatar);
        setComment(''); // Reset comment after submission
    };





    return (
        <>
            <div className=" ">
                <div className=" mb-4  flex justify-between">
                    <div className="order-first">
                        <img src={userAvatar} className="max-w-[50px] max-h-[50px] rounded-lg overflow-hidden border border-green-400" />
                    </div>
                    <div className="order-last">
                        <button onClick={handleCommentSubmit} type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Comment</button>

                    </div>
                </div>
                <div className=" ">
                    {/* <input type="text" onChange={(e) => setComment(e.target.value)} name="comment" id="" /> */}
                    <textarea name="comment" value={comment} onChange={(e) => setComment(e.target.value)} rows={2} cols={40} className="w-full h-full border rounded-lg p-3" />
                </div>
            </div>
        </>
    )
}

export default CommentUI