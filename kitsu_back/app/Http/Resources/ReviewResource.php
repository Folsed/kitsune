<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class ReviewResource extends JsonResource
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
            'user' => [
                'user_id' => $this->user->value('id'),
                'user_name' => $this->user->value('name'),
                'user_avatar' => $this->user->value('avatar_softsize'),
            ],
            'stars' => $this->stars,
            'text' => $this->text,
            'likes' => $this->likes,
            'dislikes' => $this->dislike,
            'created_at' => Carbon::parse($this->created_at)->locale('uk_UK')->diffForHumans(),
            'updated_at' => Carbon::parse($this->updated_at)->locale('uk_UK')->diffForHumans(),
        ];
    }
}
