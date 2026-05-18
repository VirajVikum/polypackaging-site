<?php

namespace Database\Seeders;

use App\Models\Branch;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BranchSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Branch::factory()->create([
            'name' => 'Kurunegala Branch',
            'slug' => 'kurunegala',
            'address' => '123 Main St, Kurunegala, Sri Lanka',
            'contact1' => '+94-37-222-2201',
            'contact2' => '+94-37-222-2202',
            'email' => 'kurunegala@polypackaging.com',
            'image' => 'images/branches/kurunegala.jpg',
            'latitude' => 7.4863,
            'longitude' => 80.6349,
        ]);

        Branch::factory()->create([
            'name' => 'Anuradhapura Branch',
            'slug' => 'anuradhapura',
            'address' => '456 Main Street, Anuradhapura, Sri Lanka',
            'contact1' => '+94-25-222-2301',
            'contact2' => '+94-25-222-2302',
            'email' => 'anuradhapura@polypackaging.com',
            'image' => 'images/branches/anuradhapura.jpeg',
            'latitude' => 8.3228,
            'longitude' => 80.7327,
        ]);

        Branch::factory()->create([
            'name' => 'Puttalam Branch',
            'slug' => 'puttalam',
            'address' => '789 Colombo Road, Puttalam, Sri Lanka',
            'contact1' => '+94-32-222-2401',
            'contact2' => '+94-32-222-2402',
            'email' => 'puttalam@polypackaging.com',
            'image' => 'images/branches/puttalam.jpg',
            'latitude' => 8.0274,
            'longitude' => 79.8358,
        ]);
    }
}
