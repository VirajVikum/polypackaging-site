<?php

namespace App\Http\Controllers;

use App\Models\Branch;
use Inertia\Inertia;

class BranchController extends Controller
{
    public function index()
    {
        $branches = Branch::orderBy('name')->get();

        return Inertia::render('Branches/Index', [
            'branches' => $branches,
        ]);
    }

    public function show($slug)
    {
        $branch = Branch::where('slug', $slug)->firstOrFail();

        $otherBranches = Branch::where('id', '!=', $branch->id)->get();

        return Inertia::render('Branches/Show', [
            'branch' => $branch,
            'otherBranches' => $otherBranches,
        ]);
    }

    public function list()
    {
        $branches = Branch::select('id', 'name', 'slug', 'address', 'contact1', 'email', 'image')
            ->orderBy('name')
            ->get();

        return response()->json($branches);
    }
}
