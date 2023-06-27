@extends('layouts.admin')

@section('adminContent')
    <div class="col-md-8">
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">Add post</h4>
            </div>
            <div class="card-body">
                <form action="{{ route('admin-forms-create-anime-submit') }}" method="post" enctype="multipart/form-data">
                    @csrf
                    <div class="row">
                        <div class="col-md-5 pr-1">
                            <div class="form-group">
                                <label>Title</label>
                                <input type="text" name="title" class="form-control" placeholder="title"
                                    value="">
                            </div>
                        </div>
                        <div class="col-md-3 px-1">
                            <div class="form-group">
                                <label>alias</label>
                                <input type="text" name="alias" class="form-control" placeholder="alias"
                                    value="">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label>description</label>
                                    <textarea name="description" rows="4" cols="80" class="form-control" placeholder="description"></textarea>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 pr-1">
                            <div class="form-group">
                                <label>release_year</label>
                                <input type="year" name="release_year" class="form-control" placeholder="release_year"
                                    value="2014">
                            </div>
                        </div>
                        <div class="col-md-6 pl-1">
                            <div class="form-group">
                                <label>country</label>
                                <input type="text" name="country" class="form-control" placeholder="country"
                                    value="Japan">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2 pl-3">
                            <div class="form-group">
                                <label>duration</label>
                                <input type="text" name="duration" class="form-control" placeholder="duration"
                                    value="23:59">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label>director</label>
                                <input type="text" name="director" class="form-control" placeholder="director"
                                    value="Folsed Fo">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label>videoYoutubeId</label>
                                <input type="text" name="videoYoutubeId" class="form-control"
                                    placeholder="videoYoutubeId" value="6ohYYtxfDCg">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 pr-1">
                            <div class="form-group">
                                <label class="block mb-4">Preview
                                    <span class="sr-only">Choose File</span>
                                    <input type="file" name="preview" class="form-control" />
                                    @error('preview')
                                        <span class="text-red-600 text-sm">{{ $message }}</span>
                                    @enderror
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 px-1 pl-3">
                            <div class="form-group">
                                <label>Screenshots</label>
                                <input type="file" name="screenshot[]" class="form-control" multiple/>
                            </div>
                        </div>
                    </div>


                    <button type="submit" class="btn btn-success btn-fill pull-right">Add post</button>
                    <div class="clearfix"></div>
                </form>
            </div>
        </div>
    </div>
@endsection
