// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

const Review = () => {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                classNameName=" container mx-auto"
            >
                <SwiperSlide>
                    <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg">
                        <div className="flex justify-center -mt-16 md:justify-end">
                            <img className="object-cover w-20 h-20 border-2 border-green-500 rounded-full" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80" />
                        </div>

                        <h2 className="mt-2 text-xl font-semibold text-gray-800  md:mt-0">Abu Saiyed Joy</h2>

                        <p className="mt-2 text-sm text-gray-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>

                        <div className="flex justify-end mt-4">
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg">
                        <div className="flex justify-center -mt-16 md:justify-end">
                            <img className="object-cover w-20 h-20 border-2 border-green-500 rounded-full" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80" />
                        </div>

                        <h2 className="mt-2 text-xl font-semibold text-gray-800  md:mt-0">Design Tools</h2>

                        <p className="mt-2 text-sm text-gray-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>

                        <div className="flex justify-end mt-4">
                            <a href="#" className="text-lg font-medium text-green-600" role="link">John Doe</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg">
                        <div className="flex justify-center -mt-16 md:justify-end">
                            <img className="object-cover w-20 h-20 border-2 border-green-500 rounded-full" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80" />
                        </div>

                        <h2 className="mt-2 text-xl font-semibold text-gray-800  md:mt-0">Design Tools</h2>

                        <p className="mt-2 text-sm text-gray-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>

                        <div className="flex justify-end mt-4">
                            <a href="#" className="text-lg font-medium text-green-600" role="link">John Doe</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg">
                        <div className="flex justify-center -mt-16 md:justify-end">
                            <img className="object-cover w-20 h-20 border-2 border-green-500 rounded-full" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80" />
                        </div>

                        <h2 className="mt-2 text-xl font-semibold text-gray-800  md:mt-0">Design Tools</h2>

                        <p className="mt-2 text-sm text-gray-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>

                        <div className="flex justify-end mt-4">
                            <a href="#" className="text-lg font-medium text-green-600" role="link">John Doe</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg">
                        <div className="flex justify-center -mt-16 md:justify-end">
                            <img className="object-cover w-20 h-20 border-2 border-green-500 rounded-full" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80" />
                        </div>

                        <h2 className="mt-2 text-xl font-semibold text-gray-800  md:mt-0">Design Tools</h2>

                        <p className="mt-2 text-sm text-gray-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>

                        <div className="flex justify-end mt-4">
                            <a href="#" className="text-lg font-medium text-green-600" role="link">John Doe</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg">
                        <div className="flex justify-center -mt-16 md:justify-end">
                            <img className="object-cover w-20 h-20 border-2 border-green-500 rounded-full" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80" />
                        </div>

                        <h2 className="mt-2 text-xl font-semibold text-gray-800  md:mt-0">Design Tools</h2>

                        <p className="mt-2 text-sm text-gray-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>

                        <div className="flex justify-end mt-4">
                            <a href="#" className="text-lg font-medium text-green-600" role="link">John Doe</a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};
export default Review;




