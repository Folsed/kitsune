@extends('layouts.admin')


@section('adminContent')
    <section class="content">
        <div class="content-wrapper">
            <div class="page-info">
                <div class="page-info__location">
                    <h6><span style="color:rgb(0, 241, 141);">FORMS/</span>ANIME</h6>
                    <h4 class="">Anime forms:</h4>
                </div>
                <div class="shalf"></div>
            </div>


            <div class="content__item-wrapper">
                <div class="form__title">
                    <h3>Create anime</h3>
                </div>
                <div class="form_container">
                    <div class="card-body">
                        <form action="{{ route('admin-forms-create-anime-submit') }}" method="post"
                            enctype="multipart/form-data">
                            @csrf
                            <div class="row">
                                <div class="col-xl-6">
                                    <div class="form-group mb-3">
                                        <label class="form-label" for="">
                                            Ukrainian title
                                        </label>
                                        <input type="text" name="ua_title"
                                            class="form-control @error('ua_title') is-invalid @enderror"
                                            placeholder="ua_title" value="{{ old('ua_title') }}">
                                        @error('ua_title')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="form-label" for="">
                                            English title
                                        </label>
                                        <input type="text" name="en_title"
                                            class="form-control @error('en_title') is-invalid @enderror"
                                            placeholder="en_title" value="{{ old('en_title') }}">
                                        @error('en_title')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="form-label" for="">
                                            Aired
                                        </label>
                                        <input type="text" name="aired"
                                            class="form-control @error('aired') is-invalid @enderror" placeholder="aired"
                                            value="{{ old('aired') }}">
                                        @error('aired')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="form-label" for="">
                                            Country
                                        </label>
                                        <input type="text" name="country"
                                            class="form-control @error('country') is-invalid @enderror"
                                            placeholder="country" value="{{ old('country') }}">
                                        @error('country')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="form-label" for="">
                                            Episodes
                                        </label>
                                        <input type="text" name="episodes"
                                            class="form-control @error('episodes') is-invalid @enderror"
                                            placeholder="episodes" value="{{ old('episodes') }}">
                                        @error('episodes')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="form-label" for="">
                                            Total Episodes
                                        </label>
                                        <input type="text" name="total_episodes"
                                            class="form-control @error('total_episodes') is-invalid @enderror"
                                            placeholder="total_episodes" value="{{ old('total_episodes') }}">
                                        @error('total_episodes')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="form-label" for="">
                                            Director
                                        </label>
                                        <input type="text" name="director"
                                            class="form-control @error('director') is-invalid @enderror"
                                            placeholder="director" value="{{ old('director') }}">
                                        @error('director')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="form-label" for="">
                                            Studio
                                        </label>
                                        <input type="text" name="studio"
                                            class="form-control @error('studio') is-invalid @enderror" placeholder="studio"
                                            value="{{ old('studio') }}">
                                        @error('studio')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="form-label" for="">
                                            Translated
                                        </label>
                                        <input type="text" name="translated"
                                            class="form-control @error('translated') is-invalid @enderror"
                                            placeholder="translated" value="{{ old('translated') }}">
                                        @error('translated')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="form-label" for="">
                                            Duration
                                        </label>
                                        <input type="text" name="duration"
                                            class="form-control @error('duration') is-invalid @enderror"
                                            placeholder="translated" value="00:23:59" value="{{ old('duration') }}">
                                        @error('duration')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="form-group mb-3">
                                        <label class="form-label" for="genres">Genres</label>
                                        <select name="genres[]" id="genres"
                                            class="@error('genres') is-invalid @enderror" multiple>
                                            @foreach ($genres as $genre)
                                                <option value="{{ $genre->name }}"
                                                    {{ (is_array(old('genres')) and in_array($genre->name, old('genres'))) ? 'selected' : '' }}>
                                                    {{ $genre->name }}</option>
                                            @endforeach
                                        </select>
                                        @error('categories')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="form-label" for="">
                                            Synopsis
                                        </label>
                                        <textarea class="form-control @error('synopsis') is-invalid @enderror" name="synopsis" id=""
                                            rows="5" placeholder="synopsis">{{ old('synopsis') }}</textarea>
                                        @error('synopsis')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="form-label" for="">
                                            Youtube trailer Link
                                        </label>
                                        <input type="text" name="trailer"
                                            class="form-control @error('trailer') is-invalid @enderror"
                                            placeholder="trailer" value="{{ old('trailer') }}">
                                        @error('trailer')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="form-label" for="">
                                            Preview
                                        </label>
                                        <input type="file" name="preview"
                                            class="form-control choose @error('preview') is-invalid @enderror"
                                            id="" value="{{ old('preview') }}">
                                        @error('preview')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="form-label" for="">
                                            Sub Preview
                                        </label>
                                        <input type="file" name="sub_preview"
                                            class="form-control choose @error('sub-preview') is-invalid @enderror"
                                            id="" value="{{ old('sub_preview') }}">
                                        @error('sub-preview')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="form-label" for="">
                                            Logo
                                        </label>
                                        <input type="file" name="logo"
                                            class="form-control choose @error('logo') is-invalid @enderror"
                                            id="" value="{{ old('logo') }}">
                                        @error('logo')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="form-label" for="">
                                            Screenshots
                                        </label>
                                        <input type="file" name="screenshot[]"
                                            class="form-control choose @error('screenshot') is-invalid @enderror"
                                            id="" multiple value="{{ old('screenshot') }}">
                                        @error('screenshot')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>


                                </div>
                            </div>
                            <button class="submit-button" type="submit">Create</button>
                        </form>
                    </div>
                </div>
            </div>


            {{-- News Form --}}
            <div class="content__item-wrapper">
                <div class="form__title">
                    <h3>Create news</h3>
                </div>
                <div class="form_container">
                    <div class="card-body">
                        <form>
                            <div class="row">
                                <div class="col-xl-6">
                                    <div class="form-group mb-3">
                                        <label class="form-label" for="">
                                            Ukrainian title
                                        </label>
                                        <input type="email" name="ua_title" class="form-control"
                                            placeholder="ua_title">
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="form-label" for="">
                                            English title
                                        </label>
                                        <input type="email" name="en_title" class="form-control"
                                            placeholder="en_title">
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="form-label" for="">
                                            Aired
                                        </label>
                                        <input type="email" name="aired" class="form-control" placeholder="aired">
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="form-label" for="">
                                            Country
                                        </label>
                                        <input type="email" name="country" class="form-control" placeholder="country">
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="form-label" for="">
                                            Episodes
                                        </label>
                                        <input type="email" name="episodes" class="form-control"
                                            placeholder="episodes">
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="form-label" for="">
                                            Translated
                                        </label>
                                        <input type="email"n ame="translated" class="form-control"
                                            placeholder="translated">
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="form-label" for="">
                                            Director
                                        </label>
                                        <input type="email" name="director" class="form-control"
                                            placeholder="director">
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="form-label" for="">
                                            Studio
                                        </label>
                                        <input type="email" name="studio" class="form-control" placeholder="studio">
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="form-group mb-3">
                                        <label class="form-label" for="">
                                            Synopsis
                                        </label>
                                        <textarea class="form-control" name="synopsis" id="" rows="5" placeholder="synopsis"></textarea>
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="form-label" for="">
                                            Youtube trailer Link
                                        </label>
                                        <input type="email" name="trailer" class="form-control"
                                            placeholder="Youtube trailer Link">
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="form-label" for="">
                                            Preview
                                        </label>
                                        <input type="file" name="preview" class="form-control choose" id="">
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="form-label" for="">
                                            Sub Preview
                                        </label>
                                        <input type="file" name="sub-preview" class="form-control choose"
                                            id="">
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="form-label" for="">
                                            Screenshots
                                        </label>
                                        <input type="file" name="screenshot[]" class="form-control choose"
                                            id="">
                                    </div>

                                    <button class="submit-button" type="submit">Create</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
