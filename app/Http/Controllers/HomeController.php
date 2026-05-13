<?php

namespace App\Http\Controllers;

use App\Models\ProductType;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $productTypes = ProductType::get();

        $productTypesWithProducts = $productTypes->map(function ($type) {
            $randomProducts = $type->products()
                ->inRandomOrder()
                ->limit(2)
                ->get();

            return [
                'id' => $type->id,
                'name' => $type->name,
                'slug' => $type->slug,
                'description' => $type->description,
                'products' => $randomProducts,
            ];
        })->filter(function ($type) {
            // Only include types that have at least 1 product
            return $type['products']->count() > 0;
        })->values();

        return Inertia::render('Home', [
            'productTypes' => $productTypesWithProducts,
        ]);
    }
}
