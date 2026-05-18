<?php

namespace Database\Factories;

use App\Models\Branch;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<Branch>
 */
class BranchFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = $this->faker->company();
        
        return [
            'name' => $name,
            'slug' => Str::slug($name),
            'address' => $this->faker->address(),
            'contact1' => $this->faker->phoneNumber(),
            'contact2' => $this->faker->phoneNumber(),
            'email' => $this->faker->companyEmail(),
            'image' => 'images/branches/branch-' . $this->faker->randomNumber(3) . '.jpg',
        ];
    }
}
