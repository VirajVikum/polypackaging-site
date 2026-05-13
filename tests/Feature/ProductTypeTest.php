<?php

use App\Models\Product;
use App\Models\ProductType;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

test('product type has many products', function () {
    $productType = ProductType::factory()->create();
    Product::factory(3)->create(['product_type_id' => $productType->id]);

    expect($productType->products)->toHaveCount(3);
});

test('product belongs to product type', function () {
    $productType = ProductType::factory()->create();
    $product = Product::factory()->create(['product_type_id' => $productType->id]);

    expect($product->productType->id)->toBe($productType->id);
});

test('products index groups by type', function () {
    $type1 = ProductType::factory()->create(['name' => 'Food']);
    $type2 = ProductType::factory()->create(['name' => 'Beverage']);

    Product::factory(2)->create(['product_type_id' => $type1->id]);
    Product::factory(3)->create(['product_type_id' => $type2->id]);

    $response = $this->get('/products');

    $response->assertStatus(200);
    $response->assertInertia(fn ($page) => $page
        ->has('groupedProducts')
        ->has('groupedProducts.food')
        ->has('groupedProducts.beverage')
    );
});

test('product show includes type', function () {
    $productType = ProductType::factory()->create(['name' => 'Food']);
    $product = Product::factory()->create([
        'product_type_id' => $productType->id,
        'slug' => 'test-product',
    ]);

    $response = $this->get("/products/{$product->slug}");

    $response->assertStatus(200);
    $response->assertInertia(fn ($page) => $page
        ->has('product')
        ->has('product.productType')
        ->where('product.productType.name', 'Food')
    );
});

test('related products from same type', function () {
    $type1 = ProductType::factory()->create(['name' => 'Food']);
    $type2 = ProductType::factory()->create(['name' => 'Beverage']);

    $product1 = Product::factory()->create(['product_type_id' => $type1->id, 'slug' => 'food-1']);
    Product::factory(3)->create(['product_type_id' => $type1->id]);
    Product::factory(3)->create(['product_type_id' => $type2->id]);

    $response = $this->get("/products/{$product1->slug}");

    $response->assertInertia(fn ($page) => $page
        ->has('relatedProducts', 3)
    );
});
