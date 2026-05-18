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
    branch: Branch;
    otherBranches: Branch[];
}

export default function BranchShow({ branch, otherBranches }: Props) {
    return (
        <div className="min-h-screen bg-(--background) px-4 sm:px-6 md:px-8 py-12">
            <div className="max-w-6xl mx-auto">
                {/* Breadcrumb */}
                {/* <div className="mb-8">
                    <Link href="/branches" className="text-red-600 hover:underline">
                        Branches
                    </Link>
                    <span className="mx-2">/</span>
                    <span className="font-semibold text-(--foreground)">{branch.name}</span>
                </div> */}

                {/* Branch Title */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 font-[Montserrat,sans-serif]">
                        {branch.name}
                    </h1>
                </div>

                {/* Main Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start mb-12">
                    {/* Details on Left */}
                    <div className="flex flex-col justify-start">
                        <div className="bg-(--card) p-6 rounded-lg space-y-6">
                            {/* Address */}
                            <div>
                                <h2 className="text-lg font-bold text-red-600 mb-2">Address</h2>
                                <p className="text-(--foreground) leading-relaxed whitespace-pre-wrap">
                                    {branch.address}
                                </p>
                            </div>

                            {/* Contact Numbers */}
                            <div>
                                <h2 className="text-lg font-bold text-red-600 mb-2">Phone</h2>
                                <p className="text-(--foreground)">
                                    <a href={`tel:${branch.contact1}`} className="hover:text-red-600 transition">
                                        {branch.contact1}
                                    </a>
                                </p>
                                {branch.contact2 && (
                                    <p className="text-(--foreground)">
                                        <a href={`tel:${branch.contact2}`} className="hover:text-red-600 transition">
                                            {branch.contact2}
                                        </a>
                                    </p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <h2 className="text-lg font-bold text-red-600 mb-2">Email</h2>
                                <p className="text-(--foreground)">
                                    <a href={`mailto:${branch.email}`} className="hover:text-red-600 transition break-all">
                                        {branch.email}
                                    </a>
                                </p>
                            </div>

                            {/* Other Branches Section */}
                            {otherBranches.length > 0 && (
                                <div className="border-t border-(--card) pt-6">
                                    <h2 className="text-2xl font-bold text-red-600 mb-6 font-[Montserrat,sans-serif]">
                                        Other Branches
                                    </h2>

                                    <div className="flex flex-wrap gap-3">
                                        {otherBranches.map((otherBranch) => (
                                            <Link
                                                key={otherBranch.id}
                                                href={`/branches/${otherBranch.slug}`}
                                                className="inline-block group"
                                            >
                                                <div className="px-6 py-3 border-2 border-red-600 rounded-full text-red-600 font-semibold hover:bg-red-600 hover:text-white transition cursor-pointer">
                                                    {otherBranch.name}
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Image on Right */}
                    {branch.image && (
                        <div className="flex items-center justify-center">
                            <div className="w-full bg-gray-200 rounded-2xl overflow-hidden shadow-lg border-2 border-red-600">
                                <img
                                    src={branch.image.startsWith('/') ? branch.image : `/${branch.image}`}
                                    alt={branch.name}
                                    className="w-full h-auto object-cover min-h-[300px] max-h-[400px]"
                                />
                            </div>
                        </div>
                    )}
                </div>

                {/* CTA Section */}
                {/* <div className="mt-16 pt-12 border-t border-(--card) bg-(--card) rounded-2xl p-8 text-center">
                    <h2 className="text-2xl font-bold text-(--foreground) mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-(--foreground) mb-6 text-lg">
                        Visit us or contact us to learn more about our services and products.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-3 rounded-full bg-red-600 text-white font-semibold shadow hover:bg-red-700 transition"
                    >
                        Contact Us
                    </Link>
                </div> */}
            </div>
        </div>
    );
}

BranchShow.layout = AppLayout;
