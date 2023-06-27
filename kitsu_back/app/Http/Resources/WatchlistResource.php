<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class WatchlistResource extends JsonResource
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
            'id' => $this->anime->id,
            'ua_title' => $this->anime->ua_title,
            'alias' => $this->anime->alias,
            'synopsis' => $this->anime->synopsis,
            'second_preview_path' => $this->anime->previews->value('second_preview_path'),
            'review' => [
                'stars' => round($this->anime->reviews->avg('stars'), 1),
                'reviews' =>  $this->anime->reviews->count('user_id'),
            ],
            'created_at' => $this->created_at,
        ];
    }
}
