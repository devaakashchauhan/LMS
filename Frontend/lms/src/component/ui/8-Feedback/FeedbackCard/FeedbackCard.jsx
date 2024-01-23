import React from 'react'
import { avatar, quotationMark, } from '../../../assets'

const FeedbackCard = () => {
    return (
        <>
            <div className="bg-white p-8 rounded-3xl shadow-xl my-8 mx-2">
                <div className="flex justify-between">

                    <div className="flex gap-4">
                        <img src={avatar} alt="" />
                        <div className="">
                            <h1>Akash Chauhan</h1>
                            <p>Developer</p>
                        </div>
                    </div>
                    <img className='h-8' src={quotationMark} alt="" />
                </div>
                <div className="py-8">
                    <h3 className='text-lg'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus labore distinctio doloremque veniam alias ratione saepe, laborum, quaerat dolor ullam nemo autem quisquam aut! Molestiae error labore commodi voluptates repellendus!
                    </h3>
                </div>
            </div>
        </>
    )
}

export default FeedbackCard