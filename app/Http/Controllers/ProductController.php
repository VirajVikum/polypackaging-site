<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductType;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $productTypes = ProductType::with(['products' => function ($query) {
            $query->paginate(12);
        }])->get();

        $groupedProducts = $productTypes->mapWithKeys(function ($type) {
            return [$type->slug => [
                'id' => $type->id,
                'name' => $type->name,
                'slug' => $type->slug,
                'description' => $type->description,
                'products' => $type->products,
            ]];
        });

        return Inertia::render('Products/Index', [
            'groupedProducts' => $groupedProducts,
        ]);
    }

    public function show($slug)
    {
        $product = Product::with('productType')->where('slug', $slug)->firstOrFail();
        $relatedProducts = Product::where('product_type_id', $product->product_type_id)
            ->where('id', '!=', $product->id)
            ->take(6)
            ->get();

        return Inertia::render('Products/Show', [
            'product' => $product,
            'relatedProducts' => $relatedProducts,
        ]);
    }

    public function paginate(Request $request)
    {
        $page = $request->query('page', 1);
        $products = Product::paginate(12, ['*'], 'page', $page);

        return response()->json($products);
    }
}
