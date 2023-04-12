<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class CommentResource extends JsonResource
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
            'user' => [
                'user_id' => $this->user->id,
                'user_name' => $this->user->name
            ],
            'anime_id' => $this->anime_id,
            'comment' => $this->comment,
            'created_at' => Carbon::parse($this->created_at)->locale('uk_UK')->diffForHumans(),
            'updated_at' => Carbon::parse($this->updated_at)->locale('uk_UK')->diffForHumans(),
        ];
    }
}
