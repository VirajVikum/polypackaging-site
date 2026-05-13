import React, { useState } from 'react';
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
    products: Product[];
}

interface Props {
    groupedProducts: Record<string, ProductType>;
}

export default function ProductsIndex({ groupedProducts }: Props) {
    const [activeType, setActiveType] = useState<string>(
        Object.keys(groupedProducts)[0] || ''
    );

    const productTypes = Object.values(groupedProducts);
    const currentType = groupedProducts[activeType];

    return (
        <div className="min-h-screen bg-(--background) px-4 sm:px-6 md:px-8 py-12">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4 font-[Montserrat,sans-serif]">
                        Our Products
                    </h1>
                    <p className="text-center text-(--foreground) text-lg">
                        Explore our complete range of flexible packaging solutions
                    </p>
                </div>

                {/* Type Tabs */}
                <div className="flex flex-wrap gap-3 justify-center mb-12">
                    {productTypes.map((type) => (
                        <button
                            key={type.id}
                            onClick={() => setActiveType(type.slug)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                                activeType === type.slug
                                    ? 'bg-red-600 text-white shadow-lg'
                                    : 'bg-white text-black border-2 border-red-600 hover:bg-red-50'
                            }`}
                        >
                            {type.name}
                        </button>
                    ))}
                </div>

                {/* Current Type Description */}
                {currentType && currentType.description && (
                    <div className="text-center mb-8 bg-white p-6 rounded-lg border-l-4 border-red-600">
                        <p className="text-(--foreground) text-base">
                            {currentType.description}
                        </p>
                    </div>
                )}

                {/* Products Grid */}
                {currentType && currentType.products.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {currentType.products.map((product) => (
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
                            No products available for this type yet.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

ProductsIndex.layout = AppLayout;
