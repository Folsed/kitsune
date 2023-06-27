<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BannerResource extends JsonResource
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
            'anime_id' => $this->anime_id,
            'png_preview' => $this->png_preview,
            'ua_title' => $this->anime->ua_title,
            'preview' => $this->anime->previews->value('preview_path'),
            'synopsis' => $this->anime->synopsis,
            'alias' => $this->anime->alias,
        ];
    }
}
