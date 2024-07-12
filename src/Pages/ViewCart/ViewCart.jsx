import Title from "../../Components/Title/Title";

const ViewCart = () => {
    return (
        <section className="container px-4 mx-auto my-6">
            <Title title={"Your Favourite Carts"}></Title>
            <div className="flex flex-col my-12">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-green-300 bg-gray-100 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-emerald-100/60">
                                    <tr>
                                        <th scope="col" className="py-3.5 px-4 text-lg font-medium text-left rtl:text-right text-emerald-500">
                                            <div className="flex items-center gap-x-3">
                                                <span>Image</span>
                                            </div>
                                        </th>

                                        <th scope="col" className="px-12 py-3.5 text-lg font-medium text-left rtl:text-right text-emerald-500">
                                            <button className="flex items-center gap-x-2">
                                                <span>Name</span>
                                            </button>
                                        </th>

                                        <th scope="col" className="px-4 py-3.5 text-lg font-medium text-left rtl:text-right text-emerald-500">
                                            <button className="flex items-center gap-x-2">
                                                <span>Product</span>
                                            </button>
                                        </th>

                                        <th scope="col" className="px-4 py-3.5 text-lg font-medium text-left rtl:text-right text-emerald-500">Order</th>
                                        <th scope="col" className="px-4 py-3.5 text-lg font-medium text-left rtl:text-right text-emerald-500">Edit</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-gray-100 divide-y divide-gray-700">
                                    <tr>
                                        <td className="px-4 py-4 text-sm font-medium text-gray-700">
                                            <img className="flex-shrink-0 object-cover w-20 h-20 rounded-lg outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="Polaroid camera" />
                                        </td>
                                        <td className="px-5 py-4 text-sm font-medium text-gray-700">

                                            <h2 className="text-xl font-medium text-emerald-500">Abu Saiyed</h2>
                                        </td>
                                        <td className="px-4 py-4 text-xl font-medium text-gray-500  ">Digital Camera</td>
                                        <td className="px-4 py-4 text-sm text-gray-500  ">
                                            <button type="button" className="flex items-center px-5 py-2 text-sm font-medium text-gray-700 hover:text-white capitalize transition-colors duration-200 bg-gray-100 border border-green-700 rounded-md gap-x-2 hover:bg-primary">Buy Now
                                            </button>
                                        </td>
                                        <td className="px-4 py-4 text-sm">
                                            <div className="flex items-center gap-x-6">
                                                <button className="text-gray-500 transition-colors duration-200 hover:text-red-700 focus:outline-none">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                        <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                    </svg>
                                                </button>

                                                <button className="text-gray-500 transition-colors duration-200 hover:text-green-500 focus:outline-none">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                        <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="space-y-1 text-right pr-6 pt-5">
                                <p>Total amount:
                                    <span className="font-semibold">357 $</span>
                                </p>
                                <p className="text-sm dark:text-gray-600">Not including taxes and shipping costs</p>
                            </div>
                            <div className="flex justify-end space-x-4 py-6 pr-6">
                                <button type="button" className="flex items-center px-5 py-2 text-sm text-gray-700 hover:text-white capitalize transition-colors duration-200 bg-gray-100 border border-green-700 rounded-md gap-x-2 hover:bg-primary">Back
                                    to shop
                                </button>
                                <button type="button" className="px-6 py-2 border rounded-md dark:bg-primary dark:text-gray-50 border-primary">
                                    <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ViewCart;