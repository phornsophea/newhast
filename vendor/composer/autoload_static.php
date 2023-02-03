<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInite130d60f5b525e8ac05ec97af663dc3f
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInite130d60f5b525e8ac05ec97af663dc3f::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInite130d60f5b525e8ac05ec97af663dc3f::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInite130d60f5b525e8ac05ec97af663dc3f::$classMap;

        }, null, ClassLoader::class);
    }
}
