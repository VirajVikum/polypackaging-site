<?php

use App\Http\Controllers\BranchController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/products', [ProductController::class, 'index'])->name('products.index');
Route::get('/products/api/types', [ProductController::class, 'types'])->name('products.types');
Route::get('/products/api/paginate', [ProductController::class, 'paginate'])->name('products.paginate');
Route::get('/products/{slug}', [ProductController::class, 'show'])->name('products.show');

Route::get('/branches', [BranchController::class, 'index'])->name('branches.index');
Route::get('/branches/api/list', [BranchController::class, 'list'])->name('branches.list');
Route::get('/branches/{slug}', [BranchController::class, 'show'])->name('branches.show');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
