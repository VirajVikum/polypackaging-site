<?php

namespace Database\Factories;

use App\Models\ProductType;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<ProductType>
 */
class ProductTypeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $names = ['Food', 'Health Care', 'Pet Care', 'Home Care', 'Beverages', 'Cosmetics', 'Industrial'];
        $name = $this->faker->randomElement($names);

        return [
            'name' => $name,
            'description' => $this->faker->sentence(10),
            'slug' => Str::slug($name),
        ];
    }
}
