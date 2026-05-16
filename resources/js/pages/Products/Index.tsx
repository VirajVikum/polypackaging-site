import React from 'react';
import { Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';

interface Product {
    id: number;
    title: string;
    description: string;
    image: string;
    slug: string;
    category: string;
    product_type_id: number;
}

interface ProductType {
    id: number;
    name: string;
    slug: string;
    description: string;
}

interface Props {
    groupedProducts: Record<string, ProductType>;
    selectedType: ProductType | null;
    selectedProducts: Product[];
}

export default function ProductsIndex({ groupedProducts, selectedType, selectedProducts }: Props) {
    return (
        <div className="min-h-screen bg-(--background) px-4 sm:px-6 md:px-8 py-12">
            <div className="max-w-7xl mx-auto">
                {/* Selected Type Description */}
                {selectedType && (
                    <div className="text-center mb-8 bg-white p-6 rounded-lg border-l-4 border-red-600">
                        <h2 className="text-4xl font-bold text-red-600 mb-2">
                            {selectedType.name}
                        </h2>
                        <p className="text-(--foreground) text-base">
                            {selectedType.description || 'Explore our range of products'}
                        </p>
                    </div>
                )}

                {/* Products Grid */}
                {selectedProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {selectedProducts.map((product) => (
                            <Link
                                key={product.id}
                                href={`/products/${product.slug}`}
                                className="group"
                            >
                                <div className="bg-white text-black rounded-2xl shadow-lg border-2 border-red-600 overflow-hidden transition-transform hover:-translate-y-2 cursor-pointer h-full flex flex-col">
                                    {/* Image Container */}
                                    <div className="w-full h-48 overflow-hidden bg-gray-200">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>

                                    {/* Content Container */}
                                    <div className="flex-1 flex flex-col p-5">
                                        <h3 className="font-bold text-lg mb-2">
                                            {product.title}
                                        </h3>
                                        <p className="text-sm opacity-80 mb-4 flex-1 line-clamp-3">
                                            {product.description}
                                        </p>
                                        <div className="px-3 py-2 rounded-full bg-red-600 text-white font-semibold shadow hover:bg-red-700 transition w-full text-sm text-center cursor-pointer">
                                            More Details
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-(--foreground) text-lg">
                            No products available for this category.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

ProductsIndex.layout = AppLayout;
