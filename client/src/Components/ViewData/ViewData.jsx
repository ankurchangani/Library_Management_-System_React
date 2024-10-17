    import React, { useEffect } from 'react';
    import { useNavigate } from "react-router";
    import { useDispatch, useSelector } from "react-redux";
    import Booksimage from '../../assets/img/book.jpg';
    import { DeleteAsync, GetDataAsync, SingleRecord } from '../../Services/Actions/BooksAction';
    import { FiEdit, FiTrash } from 'react-icons/fi';

    const ViewData = () => {
        const { Books } = useSelector(state => state.Bookreducer);
        const navigate = useNavigate();
        const dispatch = useDispatch();

        const handleView = (id) => {
            navigate(`/view-details/${id}`);
        };
        

        const handleEdit = (id) => {
            dispatch(SingleRecord(id));
            navigate(`/edit/${id}`);
        };

        const handleDelete = (id) => {
            dispatch(DeleteAsync(id));
        };

        useEffect(() => {
            dispatch(GetDataAsync());
        }, [dispatch]);

        return (
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {Books.map((data) => (
                        <div key={data.id} className="bg-gray-800 rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
                            <div className="text-center">
                                <img src={Booksimage} alt="books" className="w-full h-48 object-cover rounded-lg mb-4" />
                            </div>

                            <h1 className="text-xl font-bold text-center text-white mt-4">{data.title}</h1>

                            <h4 className="text-center text-gray-200">Author: <span className="text-white">{data.author}</span></h4>

                            <h4 className="text-center text-gray-200">Genre: <span className="text-white">{data.genre}</span></h4>

                            <h4 className="text-center text-gray-200">Year:

                                <span className="text-white">{data.year}</span></h4>

                            <div className="flex justify-center mt-4 space-x-2">
                                <button
                                    className="bg-white text-blue-600 px-3 py-2 rounded-full hover:bg-blue-200 transition duration-200 flex items-center"
                                    onClick={() => handleView(data.id)}
                                >
                                    <span className="mr-1">View</span>
                                </button>

                                <button
                                    className="bg-white text-yellow-600 px-3 py-2 rounded-full hover:bg-yellow-200 transition duration-200 flex items-center"
                                    onClick={() => handleEdit(data.id)}
                                >
                                    <FiEdit className="mr-1" />
                                    Edit
                                </button>

                                <button
                                    className="bg-white text-red-600 px-3 py-2 rounded-full hover:bg-red-200 transition duration-200 flex items-center"
                                    onClick={() => handleDelete(data.id)}
                                >
                                    <FiTrash className="mr-1" />
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    export default ViewData;
