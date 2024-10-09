 // MenuList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MenuList = () => {
  const [menus, setMenus] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingMenu, setEditingMenu] = useState(null);
  const [formData, setFormData] = useState({
    makanan: '',
    harga: '',
  });

  useEffect(() => {
    fetchMenus();
  }, []);

  const fetchMenus = () => {
    axios.get('http://localhost:4000/menu')
      .then(response => {
        console.log('Fetched menus:', response.data);
        setMenus(response.data);
      })
      .catch(error => {
        console.error('Error fetching menus:', error);
      });
  };

  const handleShowModal = (menu = null) => {
    setEditingMenu(menu);
    if (menu) {
      setFormData({ makanan: menu.makanan, harga: menu.harga });
    } else {
      setFormData({ makanan: '', harga: '' });
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingMenu(null);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingMenu) {
      axios.put(`http://localhost:4000/updateMenu/${editingMenu.id}`, formData)
        .then(() => {
          fetchMenus();
          handleCloseModal();
        })
        .catch(error => console.error('Error updating menu:', error));
    } else {
      axios.post('http://localhost:4000/createMenu', formData)
        .then(() => {
          fetchMenus();
          handleCloseModal();
        })
        .catch(error => console.error('Error adding menu:', error));
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this menu item?')) {
      axios.delete(`http://localhost:4000/deleteMenu/${id}`)
        .then(() => {
          fetchMenus();
        })
        .catch(error => console.error('Error deleting menu:', error));
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="mt-8">
        <h1 className="text-3xl font-bold mb-4">Menu List</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
          onClick={() => handleShowModal()}
        >
          Add Menu Item
        </button>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {menus.map(menu => (
                <tr key={menu.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{menu.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{menu.makanan}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{menu.harga}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                      onClick={() => handleShowModal(menu)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                      onClick={() => handleDelete(menu.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {editingMenu ? 'Edit Menu Item' : 'Add Menu Item'}
              </h3>
              <form className="mt-2 text-left" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="makanan">
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="makanan"
                    value={formData.makanan}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="harga">
                    Price
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="number"
                    name="harga"
                    value={formData.harga}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    {editingMenu ? 'Update' : 'Add'}
                  </button>
                  <button
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handleCloseModal}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuList;
