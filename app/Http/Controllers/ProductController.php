<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductType;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $selectedTypeSlug = $request->query('type');
        
        $productTypes = ProductType::orderBy('name')->get();
        
        $selectedType = null;
        $selectedProducts = collect();
        
        if ($selectedTypeSlug) {
            $selectedType = $productTypes->firstWhere('slug', $selectedTypeSlug);
            if ($selectedType) {
                $selectedProducts = $selectedType->products()->get();
            }
        } else if ($productTypes->count() > 0) {
            $selectedType = $productTypes->first();
            $selectedProducts = $selectedType->products()->get();
        }

        $groupedProducts = $productTypes->mapWithKeys(function ($type) {
            return [$type->slug => [
                'id' => $type->id,
                'name' => $type->name,
                'slug' => $type->slug,
                'description' => $type->description,
            ]];
        });

        return Inertia::render('Products/Index', [
            'groupedProducts' => $groupedProducts,
            'selectedType' => $selectedType ? [
                'id' => $selectedType->id,
                'name' => $selectedType->name,
                'slug' => $selectedType->slug,
                'description' => $selectedType->description,
            ] : null,
            'selectedProducts' => $selectedProducts,
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

    public function types()
    {
        $types = ProductType::with(['products' => function ($query) {
            $query->select('id', 'slug', 'product_type_id')->orderBy('id')->limit(1);
        }])->select('id', 'name', 'slug')->orderBy('name')->get();

        $types = $types->map(fn ($type) => [
            'id' => $type->id,
            'name' => $type->name,
            'slug' => $type->slug,
            'firstProductSlug' => $type->products->first()?->slug ?? null,
        ])->toArray();

        return response()->json($types);
    }
}
