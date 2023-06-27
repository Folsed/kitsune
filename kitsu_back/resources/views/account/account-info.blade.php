@extends('layouts.main')

@section('title')
    Account
@endsection

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <div class="trending__product">
                    <div class="row">
                        <div class="col-lg-8 col-md-8 col-sm-8">
                            <div class="section-account-info">
                                <h4><span style="color:red">E-mail:</span> {{ $currentuser->email }}</h4>
                                <h5><span style="color:red;">Roles:</span>
                                    @foreach ($role as $role)
                                        {{ $role }}
                                    @endforeach
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
