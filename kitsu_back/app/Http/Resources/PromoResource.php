<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PromoResource extends JsonResource
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
            'ua_title' => $this->anime->ua_title,
            'promo_path' => $this->promo_path,
            'alias' => $this->anime->alias,
        ];
    }
}
