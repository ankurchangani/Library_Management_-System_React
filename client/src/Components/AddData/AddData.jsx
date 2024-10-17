import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { AddDataPostAsync } from '../../Services/Actions/BooksAction';

const AddData = () => {
    const [forminput, setForminput] = useState({
        id: '',
        title: '',
        author: '',
        genre: '',
        year: '',
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleFormInput = (e) => {
        const { name, value } = e.target;
        setForminput({ ...forminput, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(AddDataPostAsync(forminput));
        navigate('/view-books-data');

        setForminput({
            id: '',
        title: '',
        author: '',
        genre: '',
        year: '',
        })
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Library Management System</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" hidden  name='id' value={forminput.id} onChange={handleFormInput}  />
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="title">
                  Title
                </label>
                <input
                  className="border border-gray-300 rounded-lg w-full py-2 px-4 focus:outline-none focus:border-blue-500"
                  type="text"
                  id="title"
                  name='title'
                  value={forminput.title}
                  onChange={handleFormInput}
                  placeholder="Enter book title"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="author">
                  Author
                </label>
                <input
                  className="border border-gray-300 rounded-lg w-full py-2 px-4 focus:outline-none focus:border-blue-500"
                  type="text"
                  id="author"
                  name='author'
                  value={forminput.author}
                  onChange={handleFormInput}
                  placeholder="Enter author's name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="genre">
                  Genre
                </label>
                <input
                  className="border border-gray-300 rounded-lg w-full py-2 px-4 focus:outline-none focus:border-blue-500"
                  type="text"
                  id="genre"
                  name='genre' 
                  value={forminput.genre} 
                  onChange={handleFormInput}
                  placeholder="Enter book genre"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="year">
                  Year
                </label>
                <input
                  className="border border-gray-300 rounded-lg w-full py-2 px-4 focus:outline-none focus:border-blue-500"
                  type="number"
                  id="year"
                  name='year'
                  value={forminput.year}
                  onChange={handleFormInput}
                  placeholder="Enter publication year"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
              >
                Add Book
              </button>
            </form>
          </div>
        </div>
      );
};

export default AddData;
