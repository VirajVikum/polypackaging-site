<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            [
                'title' => 'Food',
                'description' => 'Flexible, food-safe packaging for snacks, dry goods, and perishables.',
                'long_description' => 'Our food packaging solutions are specifically designed to preserve freshness and maintain product quality. We use food-grade materials that comply with international safety standards. Our flexible packaging is ideal for snacks, grains, cereals, spices, and perishable items.',
                'image' => '/images/product-types/food.png',
                'slug' => 'food-packaging',
                'category' => 'packaging',
            ],
            [
                'title' => 'Health Care',
                'description' => 'Hygienic, durable packaging for medical and personal care.',
                'long_description' => 'We provide sterile and hygienic packaging solutions for healthcare and personal care products. Our materials are tested for biocompatibility and meet strict pharmaceutical standards. Perfect for pharmaceuticals, vitamins, medical devices, and personal hygiene items.',
                'image' => '/images/product-types/health.jpg',
                'slug' => 'healthcare-packaging',
                'category' => 'packaging',
            ],
            [
                'title' => 'Pet Care',
                'description' => 'Safe, attractive packaging for pet food and accessories.',
                'long_description' => 'Specially formulated for pet food packaging with barrier properties to keep feed fresh. Our designs are eye-catching and shelf-ready. We ensure pet safety with non-toxic materials and secure sealing.',
                'image' => '/images/product-types/pet-care.jpg',
                'slug' => 'pet-care-packaging',
                'category' => 'packaging',
            ],
            [
                'title' => 'Home Care',
                'description' => 'Reliable packaging for household products and cleaning supplies.',
                'long_description' => 'Durable packaging solutions for household cleaning products, detergents, and personal care items. Our flexible packaging resists chemical corrosion and maintains product integrity during storage and transportation.',
                'image' => '/images/product-types/home.png',
                'slug' => 'home-care-packaging',
                'category' => 'packaging',
            ],
            [
                'title' => 'Beverages',
                'description' => 'Protective packaging for beverages with excellent barrier properties.',
                'long_description' => 'Specialized beverage packaging with superior oxygen and moisture barriers. Maintains taste, aroma, and nutritional value. Suitable for juices, energy drinks, functional beverages, and more.',
                'image' => '/images/product-types/home.png',
                'slug' => 'beverage-packaging',
                'category' => 'packaging',
            ],
            [
                'title' => 'Cosmetics',
                'description' => 'Premium packaging for beauty and cosmetic products.',
                'long_description' => 'Elegant and protective packaging for cosmetics, beauty products, and fragrances. Our designs enhance product appeal while ensuring protection from external factors.',
                'image' => '/images/product-types/home.png',
                'slug' => 'cosmetics-packaging',
                'category' => 'packaging',
            ],
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
