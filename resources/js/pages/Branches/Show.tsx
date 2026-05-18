import React, { useEffect, useRef } from 'react';
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
    latitude?: number;
    longitude?: number;
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

                {/* Map Section */}
                {branch.latitude && branch.longitude && (
                    <div className="mt-16 pt-12 border-t border-(--card)">
                        <h2 className="text-2xl font-bold text-red-600 mb-6 font-[Montserrat,sans-serif]">
                            Location
                        </h2>
                        <div className="w-full rounded-2xl overflow-hidden shadow-lg border-2 border-red-600">
                            <MapEmbed latitude={branch.latitude} longitude={branch.longitude} />
                        </div>
                        <div className="mt-4 text-center">
                            <a
                                href={`https://www.openstreetmap.org/?mlat=${branch.latitude}&mlon=${branch.longitude}&zoom=15`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-red-600 hover:text-red-700 font-semibold transition"
                            >
                                View on OpenStreetMap
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

interface MapEmbedProps {
    latitude: number;
    longitude: number;
}

function MapEmbed({ latitude, longitude }: MapEmbedProps) {
    const mapContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mapContainer.current) return;

        // Load Leaflet CSS
        if (!document.getElementById('leaflet-css')) {
            const link = document.createElement('link');
            link.id = 'leaflet-css';
            link.rel = 'stylesheet';
            link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
            document.head.appendChild(link);
        }

        // Load Leaflet JS
        if (!(window as any).L) {
            const script = document.createElement('script');
            script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
            script.onload = () => {
                initMap();
            };
            document.body.appendChild(script);
        } else {
            initMap();
        }

        function initMap() {
            const L = (window as any).L;
            if (!L || !mapContainer.current) return;

            // Clear previous map
            mapContainer.current.innerHTML = '<div id="map-inner" style="width: 100%; height: 100%;"></div>';

            const mapElement = mapContainer.current.querySelector('#map-inner');
            if (!mapElement) return;

            const map = L.map(mapElement).setView([latitude, longitude], 15);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors',
                maxZoom: 19,
            }).addTo(map);

            // Add marker
            L.marker([latitude, longitude], {
                icon: L.icon({
                    iconUrl:
                        'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
                    shadowUrl:
                        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    shadowSize: [41, 41],
                }),
            })
                .addTo(map)
                .bindPopup('Branch Location');
        }
    }, [latitude, longitude]);

    return <div ref={mapContainer} style={{ width: '100%', height: '400px' }} />;
}

BranchShow.layout = AppLayout;
