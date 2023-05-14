<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class AnimeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {

        return [
            'id' => $this->id,
            'ua_title' => $this->ua_title,
            'en_title' => $this->en_title,
            'alias' => $this->alias,
            'aired' => $this->aired,
            'country' => $this->country,
            'episodes' => $this->episodes,
            'total_episodes' => $this->total_episodes,
            'director' => $this->director,
            'studio' => $this->studio,
            'translated' => $this->translated,
            'synopsis' => $this->synopsis,
            'trailer' => $this->trailer,
            'genres' => $this->genres,
            'review' => [
                'stars' => round($this->reviews->avg('stars'), 1),
                'reviews' =>  $this->reviews->count('user_id'),
            ],
            'created_at' => Carbon::parse($this->created_at)->toDateTimeString(),
            'updated_at' => Carbon::parse($this->updated_at)->toDateTimeString(),
            'preview' => PreviewResource::collection($this->previews),
            'active' => $this->active,
        ];
    }
}
