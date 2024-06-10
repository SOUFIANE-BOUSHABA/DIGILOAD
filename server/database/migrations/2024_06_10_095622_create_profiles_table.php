<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->string('firstName', 150);
            $table->string('lastName', 250);
            $table->text('email');
            $table->text('tel');
            $table->date('birthDay')->nullable();
            $table->string('sexe', 120)->nullable();
            $table->string('Qualite', 260);
            $table->string('Pays', 200);
            $table->string('Intitule', 250);
            $table->string('Ville', 200)->nullable();
            $table->string('Secteur', 200);
            $table->string('Langue', 200);
            $table->string('Formation', 200)->nullable();
            $table->string('organisme', 200)->nullable();
            $table->text('LinkedIn')->nullable();
            $table->string('twitter', 250)->nullable();
            $table->string('FaceBook', 250)->nullable();
            $table->string('Instagram', 250)->nullable();
            $table->date('Inscription_date145')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('profiles');
    }
}
