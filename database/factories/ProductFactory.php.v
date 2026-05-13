<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\ProductType;
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
        $titles = ['Food', 'Health Care', 'Pet Care', 'Home Care', 'Beverages', 'Cosmetics'];
        $title = $this->faker->randomElement($titles);

        return [
            'title' => $title,
            'description' => $this->faker->sentence(10),
            'long_description' => $this->faker->paragraphs(3, true),
            'image' => '/images/product-types/'.strtolower(str_replace(' ', '-', $title)).'.png',
            'slug' => Str::slug($title.'-'.$this->faker->unique()->numberBetween(1, 1000)),
            'category' => $this->faker->randomElement(['packaging', 'printing', 'custom']),
            'product_type_id' => null,
        ];
    }

    public function withProductType(int $productTypeId = null): Factory
    {
        return $this->state(fn (array $attributes) => [
            'product_type_id' => $productTypeId ?? ProductType::factory(),
        ]);
    }
}
