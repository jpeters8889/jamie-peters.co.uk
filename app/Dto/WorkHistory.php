<?php

declare(strict_types=1);

namespace App\Dto;

use Illuminate\Contracts\Support\Arrayable;

/** @implements Arrayable<string, mixed> */
readonly class WorkHistory implements Arrayable
{
    public function __construct(
        public string $company,
        public string $logo,
        public string $role,
        public string $description,
        public string $startDate,
        public string $endDate,
    ) {
        //
    }

    public function toArray(): array
    {
        return get_object_vars($this);
    }
}
