<?php

use Illuminate\Database\Seeder;

use App\Lesson;

class LessonsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         $faker = Faker\Factory::create();

        foreach (range(1, 10) as $index)
        {
            Lesson::create([
                'title' => $faker->sentence(5),
                'body' => $faker->paragraph(4),
            ]);
        }
    }
}
