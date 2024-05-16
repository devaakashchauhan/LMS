

function ShowCommentBoxUI({ comment, userAvatar, username }) {
    return (
        <>
            <div className="p-2 border rounded-lg mb-2">
                <div className="flex ">
                    <div className=""><img src={userAvatar} className="max-w-[50px] max-h-[50px] rounded-lg overflow-hidden border border-green-400" /></div>
                    <div className="px-5">{username}</div>
                </div>
                <div className="pt-3">{comment}</div>
            </div>
        </>
    )
}

export default ShowCommentBoxUI