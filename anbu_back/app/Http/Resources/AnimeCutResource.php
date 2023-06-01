<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AnimeCutResource extends JsonResource
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
            'preview_path' => $this->previews->value('preview_path'),
            'translated' => $this->translated,
            'second_preview_path' => $this->previews->value('second_preview_path'),
            'stars' => round($this->reviews->avg('stars'), 1),
            'genres' => $this->genres,
        ];
    }
}
