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
            'address' => '123 Main St, Kurunegala, NY 10001',
            'contact1' => '+1-212-555-0001',
            'contact2' => '+1-212-555-0002',
            'email' => 'kurunegala@polypackaging.com',
            'image' => 'images/branches/kurunegala.jpg',
        ]);

        Branch::factory()->create([
            'name' => 'Anuradhapura Branch',
            'slug' => 'anuradhapura',
            'address' => '456 , Anuradhapura, CA 90001',
            'contact1' => '+1-213-555-0003',
            'contact2' => '+1-213-555-0004',
            'email' => 'anuradhapura@polypackaging.com',
            'image' => 'images/branches/anuradhapura.jpeg',
        ]);

        Branch::factory()->create([
            'name' => 'Puttalam Branch',
            'slug' => 'puttalam',
            'address' => '789 , Puttalam, IL 60601',
            'contact1' => '+1-312-555-0005',
            'contact2' => '+1-312-555-0006',
            'email' => 'puttalam@polypackaging.com',
            'image' => 'images/branches/puttalam.jpg',
        ]);
    }
}
