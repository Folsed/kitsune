<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PreviewResource extends JsonResource
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
            'anime_id' => $this->anime_id,
            'preview_path' => $this->preview_path,
            'sub_preview_path' => $this->sub_preview_path,
            'logo_path' => $this->logo_path,
        ];
    }
}
