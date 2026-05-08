<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $titles = ['Food', 'Health Care', 'Pet Care', 'Home Care', 'Beverages', 'Cosmetics', 'Industrial'];
        $title = $this->faker->randomElement($titles);

        return [
            'title' => $title,
            'description' => $this->faker->sentence(10),
            'long_description' => $this->faker->paragraphs(3, true),
            'image' => '/images/product-types/'.strtolower(str_replace(' ', '-', $title)).'.png',
            'slug' => Str::slug($title.'-'.$this->faker->unique()->numberBetween(1, 1000)),
            'category' => $this->faker->randomElement(['packaging', 'printing', 'custom']),
        ];
    }
}
