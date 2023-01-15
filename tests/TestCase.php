<?php

namespace Tests;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Foundation\Testing\LazilyRefreshDatabase;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;
    use LazilyRefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        $this->withoutVite();
    }

    /**
     * @template T
     *
     * @param  class-string<T>  $what
     * @return Factory<T>
     */
    protected function build(string $what): Factory
    {
        return Factory::factoryForModel($what);
    }

    /**
     * @template T
     *
     * @param  class-string<T>  $what
     * @param  array  $attributes
     * @return T
     */
    protected function create(string $what, array $attributes = [])
    {
        return $this->build($what)->create($attributes);
    }
}
