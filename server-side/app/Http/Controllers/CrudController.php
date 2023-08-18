<?php

namespace App\Http\Controllers;

use App\Models\Crud;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Requests\StoreRequest;
use App\Http\Requests\UpdateRequest;
use App\Http\Resources\CrudCollection;
use Illuminate\Support\Facades\Storage;

class CrudController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $crud = Crud::all();
        return view('index', compact('crud'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequest $request)
    {
        $st = Crud::create([
            'title' => $request->title,
            'desc' => $request->desc,

        ]);

        if ($request->file('attachment')) {
            $this->storeAttachment($request, $st);
        }

        return response()->redirectTo(route('index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Crud $crud)
    {
        return view('show', compact('crud'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Crud $crud)
    {
        return view('edit', compact('crud'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, Crud $crud)
    {
        $crud->update(
            $request->except('attachment')
        );

        if ($request->file('attachment')) {
            Storage::disk('public')->delete($crud->attachment);
            $this->storeAttachment($request, $crud);
        }

        return response()->redirectTo(route('index', $crud->id));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Crud $crud)
    {
        $crud->delete();
        return response()->redirectTo(route('index'));
    }

    protected function storeAttachment($request, $st)
    {
        $extension = $request->file('attachment')->extension();
        $content = file_get_contents($request->file('attachment'));
        $filename = Str::random(25);
        $path = "attachment/$filename.$extension";
        Storage::disk("public")->put($path,  $content);
        $st->update(['attachment' => $path]);
    }
}
