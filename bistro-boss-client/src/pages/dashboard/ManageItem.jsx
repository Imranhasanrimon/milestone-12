import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import useMenu from '../../hooks/useMenu';
import { MdEditSquare, MdDelete } from "react-icons/md";
import Swal from 'sweetalert2'
import useAxiosSecure from '../../hooks/useAxiosSecure';

const ManageItem = () => {
    const [menu] = useMenu();
    const axiosSecure = useAxiosSecure();
    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                console.log(res.data);
                //   Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                //   });
            }
        });
    }
    return (
        <div>
            <SectionTitle heading={'manage all items'} subHeading={'Hurry up'}></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={item.image}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td>$ {item.price}</td>
                                <th><button className='btn btn-primary'><MdEditSquare /></button> </th>
                                <th><button className='btn btn-error' onClick={() => handleDeleteItem(item)}><MdDelete /></button> </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default ManageItem;