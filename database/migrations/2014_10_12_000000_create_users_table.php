<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('avatar')->comment('头像');
            $table->string('info',255)->default('')->comment('介绍');
            $table->string('tel',20)->default(0)->comment('手机号');
            $table->tinyInteger('is_active')->default(0)->comment('是否邮箱激活，0没有，1激活');
            $table->tinyInteger('camp')->comment('1是 联盟 2是部落');
            $table->tinyInteger('is_admin')->default(0)->comment('1是管理员');
            $table->integer('wwb')->default(0)->comment('金币');
            $table->string('token',60)->comment('邮箱验证token');
            $table->string('update_camp_at',20)->default('')->comment('修改阵营的时间');
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
