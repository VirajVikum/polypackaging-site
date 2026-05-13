import React from 'react';
import { Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';

interface ProductType {
    id: number;
    name: string;
    slug: string;
    description: string;
}

interface Product {
    id: number;
    title: string;
    description: string;
    long_description: string;
    image: string;
    slug: string;
    category: string;
    product_type_id: number;
    productType?: ProductType;
}

export default function ProductShow({
    product,
    relatedProducts,
}: {
    product: Product;
    relatedProducts: Product[];
}) {
    return (
        <div className="min-h-screen bg-(--background) px-4 sm:px-6 md:px-8 py-12">
                <div className="max-w-6xl mx-auto">
                    {/* Breadcrumb */}
                    <div className="flex items-center space-x-2 mb-8 text-(--foreground)">
                        <Link href="/products" className="text-red-600 hover:underline">
                            Products
                        </Link>
                        <span>/</span>
                        {product.productType && (
                            <>
                                <span className="text-red-600 hover:underline cursor-pointer">
                                    {product.productType.name}
                                </span>
                                <span>/</span>
                            </>
                        )}
                        <span className="font-semibold">{product.title}</span>
                    </div>

                    {/* Main Product Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start mb-12">
                        {/* Description on Left */}
                        <div className="flex flex-col justify-start">
                            <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-6 font-[Montserrat,sans-serif]">
                                {product.title}
                            </h1>

                            {product.productType && (
                                <div className="inline-flex items-center mb-4">
                                    <span className="text-sm text-red-600 font-semibold bg-red-50 px-3 py-1 rounded-full">
                                        {product.productType.name}
                                    </span>
                                </div>
                            )}

                            <p className="text-lg text-(--foreground) mb-6 leading-relaxed">
                                {product.description}
                            </p>

                            <div className="bg-(--card) p-6 rounded-lg mb-6">
                                <h2 className="text-xl font-bold text-red-600 mb-4">Product Details</h2>
                                <p className="text-(--foreground) leading-relaxed whitespace-pre-wrap">
                                    {product.long_description}
                                </p>
                            </div>

                            <div className="flex space-x-4">
                                <button className="px-6 py-3 rounded-full bg-red-600 text-white font-semibold shadow hover:bg-red-700 transition">
                                    Get Quote
                                </button>
                                <button className="px-6 py-3 rounded-full border-2 border-red-600 text-red-600 font-semibold hover:bg-red-50 transition">
                                    Learn More
                                </button>
                            </div>
                        </div>

                        {/* Image on Right */}
                        <div className="flex items-center justify-center">
                            <div className="w-full bg-gray-200 rounded-2xl overflow-hidden shadow-lg border-2 border-red-600">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-auto object-cover min-h-[400px]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Related Products Section */}
                    {relatedProducts.length > 0 && (
                        <div className="mt-16 pt-12 border-t border-(--card)">
                            <h2 className="text-3xl font-extrabold text-red-600 mb-8 font-[Montserrat,sans-serif]">
                                Related Products
                            </h2>

                            <div className="flex flex-wrap gap-3">
                                {relatedProducts.map((relatedProduct) => (
                                    <Link
                                        key={relatedProduct.id}
                                        href={`/products/${relatedProduct.slug}`}
                                        className="inline-block group"
                                    >
                                        <div className="px-6 py-3 border-2 border-red-600 rounded-full text-red-600 font-semibold hover:bg-red-600 hover:text-white transition cursor-pointer">
                                            {relatedProduct.title}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* CTA Section */}
                    <div className="mt-16 pt-12 border-t border-(--card) bg-(--card) rounded-2xl p-8 text-center">
                        <h2 className="text-2xl font-bold text-(--foreground) mb-4">
                            Interested in this product?
                        </h2>
                        <p className="text-(--foreground) mb-6 text-lg">
                            Contact us today to get a quote or discuss your packaging needs.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-3 rounded-full bg-red-600 text-white font-semibold shadow hover:bg-red-700 transition"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
    );
}

ProductShow.layout = AppLayout;
