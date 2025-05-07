import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import ProfileForm from "../components/ProfileForm";

export default function ProfilePage() {
    const navigate = useNavigate();

    const handleSave = () => {
        navigate("/dashboard");
    };

    const handleCancel = () => {
        navigate("/dashboard");
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
            {/* Navbar */}
            <Navbar />
            <div className="max-w-4xl mx-auto p-6">
                {/* Profile Page Title */}

                {/* Profile Form */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                    <ProfileForm onSave={handleSave} onCancel={handleCancel} />
                </div>
            </div>
        </div>
    );
}
