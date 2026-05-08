import React, { useEffect, useRef, useCallback, useState } from 'react';
import { Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';

interface Product {
    id: number;
    title: string;
    description: string;
    image: string;
    slug: string;
    category: string;
}

interface PaginatedResponse {
    data: Product[];
    next_page_url: string | null;
    current_page: number;
}

export default function ProductsIndex({ initialProducts }: { initialProducts: PaginatedResponse }) {
    const [products, setProducts] = useState<Product[]>(initialProducts.data);
    const [nextPageUrl, setNextPageUrl] = useState(initialProducts.next_page_url);
    const [isLoading, setIsLoading] = useState(false);
    const observerTarget = useRef<HTMLDivElement>(null);

    const loadMore = useCallback(async () => {
        if (!nextPageUrl || isLoading) return;

        setIsLoading(true);
        try {
            const response = await fetch(nextPageUrl);
            const data: PaginatedResponse = await response.json();
            setProducts((prev) => [...prev, ...data.data]);
            setNextPageUrl(data.next_page_url);
        } catch (error) {
            console.error('Failed to load more products:', error);
        } finally {
            setIsLoading(false);
        }
    }, [nextPageUrl, isLoading]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && nextPageUrl && !isLoading) {
                    loadMore();
                }
            },
            { threshold: 0.1 }
        );

        if (observerTarget.current) {
            observer.observe(observerTarget.current);
        }

        return () => observer.disconnect();
    }, [loadMore, nextPageUrl, isLoading]);

    return (
        <div className="min-h-screen bg-(--background) px-4 sm:px-6 md:px-8 py-12">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4 font-[Montserrat,sans-serif] text-center">
                        Our Products
                    </h1>
                    <p className="text-center text-(--foreground) mb-12 text-lg">
                        Explore our complete range of flexible packaging solutions
                    </p>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.map((product) => (
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
                                        <h3 className="font-bold text-lg mb-2">{product.title}</h3>
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

                    {/* Loading indicator and observer target */}
                    <div ref={observerTarget} className="mt-12 text-center">
                        {isLoading && (
                            <div className="flex justify-center items-center space-x-2">
                                <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
                                <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                                <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                            </div>
                        )}
                        {!nextPageUrl && products.length > 0 && (
                            <p className="text-(--foreground) text-lg">All products loaded</p>
                        )}
                    </div>
                </div>
            </div>
    );
}

ProductsIndex.layout = AppLayout;
