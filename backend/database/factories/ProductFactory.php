<?php
/**
 * Created by PhpStorm.
 * User: diaa
 * Date: 31/07/18
 * Time: 12:38 ص
 */

$factory->define(App\Product::class, function (Faker $faker) {
    return [
        'name' => $faker->word,
        'price' => $faker->randfloat(2,1,100),
        'Description'=>$faker->paragraph(1,100)

    ];
});
