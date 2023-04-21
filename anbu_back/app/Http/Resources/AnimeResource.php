<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

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
            'duration' => $this->duration,
            'synopsis' => $this->synopsis,
            'trailer' => $this->trailer,
            'genres' => $this->genres,
            'created_at' => Carbon::parse($this->updated_at)->format('Y/m/d H:m:s'),
            'updated_at' => Carbon::parse($this->updated_at)->format('Y/m/d H:m:s'),
            'preview' => PreviewResource::collection($this->previews),
        ];
    }
}




























