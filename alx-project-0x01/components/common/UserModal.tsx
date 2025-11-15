import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
    const [user, setUser] = useState<UserData>({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: { lat: "", lng: "" }
        },
        company: {
            name: "",
            catchPhrase: "",
            bs: ""
        }
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setUser(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(user);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>

                <form onSubmit={handleSubmit}>
                    {/* Name */}
                    <input
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        placeholder="Full name"
                        className="w-full mb-3 p-2 border rounded"
                    />

                    {/* Username */}
                    <input
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                        placeholder="Username"
                        className="w-full mb-3 p-2 border rounded"
                    />

                    {/* Email */}
                    <input
                        name="email"
                        type="email"
                        value={user.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full mb-3 p-2 border rounded"
                    />

                    {/* Phone */}
                    <input
                        name="phone"
                        value={user.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        className="w-full mb-3 p-2 border rounded"
                    />

                    {/* Website */}
                    <input
                        name="website"
                        value={user.website}
                        onChange={handleChange}
                        placeholder="Website"
                        className="w-full mb-4 p-2 border rounded"
                    />

                    {/* CTA */}
                    <div className="flex justify-between">
                        <button type="button" onClick={onClose} className="text-gray-600">
                            Cancel
                        </button>

                        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                            Save User
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default UserModal;
