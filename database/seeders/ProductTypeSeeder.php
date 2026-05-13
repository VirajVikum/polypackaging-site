<?php

namespace Database\Seeders;

use App\Models\ProductType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ProductTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $types = [
            ['name' => 'Food', 'description' => 'Food packaging solutions'],
            ['name' => 'Health Care', 'description' => 'Health care product packaging'],
            ['name' => 'Pet Care', 'description' => 'Pet care product packaging'],
            ['name' => 'Home Care', 'description' => 'Home care product packaging'],
            ['name' => 'Beverages', 'description' => 'Beverage packaging solutions'],
            ['name' => 'Cosmetics', 'description' => 'Cosmetics and beauty product packaging'],
        ];

        foreach ($types as $type) {
            ProductType::updateOrCreate(
                ['name' => $type['name']],
                [
                    'slug' => Str::slug($type['name']),
                    'description' => $type['description'],
                ]
            );
        }
    }
}
