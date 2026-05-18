import React from 'react';
import { Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';

interface Branch {
    id: number;
    name: string;
    address: string;
    contact1: string;
    contact2?: string;
    email: string;
    image?: string;
    slug: string;
}

interface Props {
    branches: Branch[];
}

export default function BranchesIndex({ branches }: Props) {
    return (
        <div className="min-h-screen bg-(--background) px-4 sm:px-6 md:px-8 py-12">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4 font-[Montserrat,sans-serif]">
                        Our Branches
                    </h1>
                    <p className="text-lg text-(--foreground) max-w-2xl mx-auto">
                        Visit our branches across different locations to experience our services and products.
                    </p>
                </div>

                {/* Branches Grid */}
                {branches.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {branches.map((branch) => (
                            <Link
                                key={branch.id}
                                href={`/branches/${branch.slug}`}
                                className="group"
                            >
                                <div className="bg-(--card) rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition border border-(--card) h-full flex flex-col">
                                    {/* Image Container */}
                                    {branch.image && (
                                        <div className="w-full h-48 overflow-hidden bg-gray-200">
                                            <img
                                                src={branch.image.startsWith('/') ? branch.image : `/${branch.image}`}
                                                alt={branch.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    )}

                                    {/* Content Container */}
                                    <div className="flex-1 flex flex-col p-6">
                                        <h3 className="text-xl font-bold text-red-600 mb-3 group-hover:text-red-700 transition">
                                            {branch.name}
                                        </h3>
                                        
                                        <div className="space-y-3 flex-1 mb-4">
                                            <div>
                                                <p className="text-sm font-semibold text-(--foreground) opacity-70">Address</p>
                                                <p className="text-(--foreground) line-clamp-2">
                                                    {branch.address}
                                                </p>
                                            </div>

                                            <div>
                                                <p className="text-sm font-semibold text-(--foreground) opacity-70">Phone</p>
                                                <p className="text-(--foreground)">
                                                    {branch.contact1}
                                                </p>
                                                {branch.contact2 && (
                                                    <p className="text-(--foreground)">
                                                        {branch.contact2}
                                                    </p>
                                                )}
                                            </div>

                                            <div>
                                                <p className="text-sm font-semibold text-(--foreground) opacity-70">Email</p>
                                                <p className="text-(--foreground) truncate">
                                                    {branch.email}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="px-3 py-2 rounded-full bg-red-600 text-white font-semibold shadow hover:bg-red-700 transition w-full text-sm text-center cursor-pointer">
                                            View Details
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-(--foreground) text-lg">
                            No branches available.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

BranchesIndex.layout = AppLayout;
