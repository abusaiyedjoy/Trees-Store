import Title from "../../Components/Title/Title";

const ViewCart = () => {
    return (
        <section className="container px-4 mx-auto mt-6">
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
                                                <span>Name</span>
                                            </div>
                                        </th>

                                        <th scope="col" className="px-12 py-3.5 text-lg font-medium text-left rtl:text-right text-emerald-500">
                                            <button className="flex items-center gap-x-2">
                                                <span>Status</span>
                                            </button>
                                        </th>

                                        <th scope="col" className="px-4 py-3.5 text-lg font-medium text-left rtl:text-right text-emerald-500">
                                            <button className="flex items-center gap-x-2">
                                                <span>Role</span>
                                            </button>
                                        </th>

                                        <th scope="col" className="px-4 py-3.5 text-lg font-medium text-left rtl:text-right text-emerald-500">Email address</th>

                                        <th scope="col" className="px-4 py-3.5 text-lg font-medium text-left rtl:text-right text-emerald-500">Teams</th>

                                        <th scope="col" className="relative py-3.5 px-4">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-gray-100 divide-y divide-gray-700">
                                    <tr>
                                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                            <div className="inline-flex items-center gap-x-3">
                                                <input type="checkbox" className="text-green-500 border-gray-300 rounded" />

                                                <div className="flex items-center gap-x-2">
                                                    <img className="object-cover w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                                                    <div>
                                                        <h2 className="font-medium text-gray-800 ">Arthur Melo</h2>
                                                        <p className="text-sm font-normal text-gray-600">@authurmelo</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                            <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60">
                                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                                                <h2 className="text-sm font-normal text-emerald-500">Active</h2>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 text-sm text-gray-500   whitespace-nowrap">Design Director</td>
                                        <td className="px-4 py-4 text-sm text-gray-500   whitespace-nowrap">authurmelo@example.com</td>
                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                            <div className="flex items-center gap-x-2">
                                                <p className="px-3 py-1 text-xs text-indigo-500 rounded-full bg-indigo-100/60">Design</p>
                                                <p className="px-3 py-1 text-xs text-green-500 rounded-full bg-green-100/60">Product</p>
                                                <p className="px-3 py-1 text-xs text-pink-500 rounded-full bg-pink-100/60">Marketing</p>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                            <div className="flex items-center gap-x-6">
                                                <button className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 hover:text-red-500 focus:outline-none">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                                                        <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                    </svg>
                                                </button>

                                                <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 hover:text-yellow-500 focus:outline-none">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
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
                                <button type="button" className="px-6 py-2 border rounded-md dark:border-primary">Back
                                    <span className="sr-only sm:not-sr-only">to shop</span>
                                </button>
                                <button type="button" className="px-6 py-2 border rounded-md dark:bg-primary dark:text-gray-50 border-primary">
                                    <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between mt-6">
                <a href="#" className="flex items-center px-5 py-2 text-sm text-gray-700 hover:text-white capitalize transition-colors duration-200 bg-gray-100 border border-green-700 rounded-md gap-x-2 hover:bg-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                        <path d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>

                    <span>
                        previous
                    </span>
                </a>

                <div className="items-center hidden lg:flex gap-x-3">
                    <a href="#" className="px-2 py-1 text-sm text-white rounded-md bg-primary">1</a>
                    <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-primary hover:text-white">2</a>
                    <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-primary hover:text-white">3</a>
                    <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-primary hover:text-white">...</a>
                    <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-primary hover:text-white">12</a>
                    <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-primary hover:text-white">13</a>
                    <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-primary hover:text-white">14</a>
                </div>

                <a href="#" className="flex items-center px-5 py-2 text-sm text-gray-700 hover:text-white capitalize transition-colors duration-200 bg-gray-100 border rounded-md gap-x-2 hover:bg-primary border-green-700 dark:hover:bg-primary">
                    <span>
                        Next
                    </span>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                        <path d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default ViewCart;