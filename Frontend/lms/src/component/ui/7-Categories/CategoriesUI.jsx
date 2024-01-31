import React from 'react'
import CategoryCardUI from './CategoryCard/CotegoryCardUI'
import { BsVectorPen } from 'react-icons/bs'
import { TiHtml5 } from 'react-icons/ti'

const CategoriesUI = () => {
    return (
        <>
            <div className='w-full bg-[#F0FBF7] py-24'>

                <div className=" md:max-w-[1480px] m-auto max-w-[600px]">
                    <h1 className='text-3xl py-3 font-bold '>Most <span className='text-[#20B486]'>Popular Categories</span></h1>
                    <p className='text-[#6D737A]'>Various versions have evolved over the years, sometimes by accident.</p>
                    <div className="grid lg:grid-cols-4  grid-cols-2 py-12 gap-4">
                        <CategoryCardUI
                            icon={<BsVectorPen size={30} />}
                            title={'Design'}
                        />
                        <CategoryCardUI
                            icon={<TiHtml5 size={30} />}
                            title={'Devlopment'}
                        />

                        <CategoryCardUI />
                        <CategoryCardUI />

                        <CategoryCardUI />
                        <CategoryCardUI />
                        <CategoryCardUI />
                        <CategoryCardUI />

                        <CategoryCardUI />
                        <CategoryCardUI />
                        <CategoryCardUI />
                        <CategoryCardUI />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoriesUI