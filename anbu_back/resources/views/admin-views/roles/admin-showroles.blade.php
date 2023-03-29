@extends('layouts.admin')

@section('adminContent')
<button type="button" class="btn btn-warning">Add new role</button>
    @foreach ($roles as $role)
        <div class="alert alert-warning">
            <h3>{{ $role->name }}</h3>
            <p>{{ $role->guard_name }}</p>
            <a href="#"><button class="btn btn-danger">Edit</button></a>
            <a href="#"><button class="btn btn-danger">Delete</button></a>
        </div>
    @endforeach
@endsection
