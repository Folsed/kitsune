<?php

namespace App\Http\Resources;

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
            'preview' => PreviewResource::collection($this->previews)
        ];
    }
}




























