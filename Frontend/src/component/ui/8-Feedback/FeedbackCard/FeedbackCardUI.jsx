import { quotationMark, } from '../../../assets'

const FeedbackCardUI = ({ username, _id, fullname, email, role, createdAt, userId, feedback, avatar }) => {
    const time1 = createdAt
    const time = time1.substring(0, 10)

    return (
        <>
            <div className="bg-white p-8 rounded-3xl shadow-xl my-8 mx-2">
                <div className="flex justify-between">

                    <div className="flex gap-4">
                        <img src={avatar} className='max-h-[60px] max-w-[60px] rounded-full overflow-hidde6' alt="" />
                        <div className="">
                            <h1>{username} | {fullname}</h1>
                            <p>{role}</p>
                        </div>
                    </div>
                    <img className='h-8' src={quotationMark} alt="" />
                </div>
                <div className="py-8">
                    <h3 className='text-lg'> {feedback} </h3>
                </div>
                <div className="flex justify-between">
                    <h3 className='text-lg '> {email} </h3>
                    <h3 className='text-lg '> {time} </h3>
                </div>
            </div>
        </>
    )
}



export default FeedbackCardUI