<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class SetEncoding
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);

        if ($response instanceof \Illuminate\Http\Response) {
            return $response;
        } else {
            return $response->setEncodingOptions(JSON_UNESCAPED_UNICODE);
        }
    }
}