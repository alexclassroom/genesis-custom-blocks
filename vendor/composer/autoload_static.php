<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitc13b71b5eb1d156340ce78737ed71011
{
    public static $prefixLengthsPsr4 = array (
        'G' => 
        array (
            'Genesis\\CustomBlocks\\' => 21,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Genesis\\CustomBlocks\\' => 
        array (
            0 => __DIR__ . '/../..' . '/php',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'Genesis\\CustomBlocks\\Admin\\Admin' => __DIR__ . '/../..' . '/php/Admin/Admin.php',
        'Genesis\\CustomBlocks\\Admin\\Documentation' => __DIR__ . '/../..' . '/php/Admin/Documentation.php',
        'Genesis\\CustomBlocks\\Admin\\EditBlock' => __DIR__ . '/../..' . '/php/Admin/EditBlock.php',
        'Genesis\\CustomBlocks\\Admin\\Import' => __DIR__ . '/../..' . '/php/Admin/Import.php',
        'Genesis\\CustomBlocks\\Admin\\Onboarding' => __DIR__ . '/../..' . '/php/Admin/Onboarding.php',
        'Genesis\\CustomBlocks\\Admin\\Upgrade' => __DIR__ . '/../..' . '/php/Admin/Upgrade.php',
        'Genesis\\CustomBlocks\\Blocks\\Block' => __DIR__ . '/../..' . '/php/Blocks/Block.php',
        'Genesis\\CustomBlocks\\Blocks\\Controls\\Checkbox' => __DIR__ . '/../..' . '/php/Blocks/Controls/Checkbox.php',
        'Genesis\\CustomBlocks\\Blocks\\Controls\\Color' => __DIR__ . '/../..' . '/php/Blocks/Controls/Color.php',
        'Genesis\\CustomBlocks\\Blocks\\Controls\\ControlAbstract' => __DIR__ . '/../..' . '/php/Blocks/Controls/ControlAbstract.php',
        'Genesis\\CustomBlocks\\Blocks\\Controls\\ControlSetting' => __DIR__ . '/../..' . '/php/Blocks/Controls/ControlSetting.php',
        'Genesis\\CustomBlocks\\Blocks\\Controls\\Email' => __DIR__ . '/../..' . '/php/Blocks/Controls/Email.php',
        'Genesis\\CustomBlocks\\Blocks\\Controls\\Image' => __DIR__ . '/../..' . '/php/Blocks/Controls/Image.php',
        'Genesis\\CustomBlocks\\Blocks\\Controls\\Multiselect' => __DIR__ . '/../..' . '/php/Blocks/Controls/Multiselect.php',
        'Genesis\\CustomBlocks\\Blocks\\Controls\\Number' => __DIR__ . '/../..' . '/php/Blocks/Controls/Number.php',
        'Genesis\\CustomBlocks\\Blocks\\Controls\\Radio' => __DIR__ . '/../..' . '/php/Blocks/Controls/Radio.php',
        'Genesis\\CustomBlocks\\Blocks\\Controls\\Range' => __DIR__ . '/../..' . '/php/Blocks/Controls/Range.php',
        'Genesis\\CustomBlocks\\Blocks\\Controls\\Select' => __DIR__ . '/../..' . '/php/Blocks/Controls/Select.php',
        'Genesis\\CustomBlocks\\Blocks\\Controls\\Text' => __DIR__ . '/../..' . '/php/Blocks/Controls/Text.php',
        'Genesis\\CustomBlocks\\Blocks\\Controls\\Textarea' => __DIR__ . '/../..' . '/php/Blocks/Controls/Textarea.php',
        'Genesis\\CustomBlocks\\Blocks\\Controls\\Toggle' => __DIR__ . '/../..' . '/php/Blocks/Controls/Toggle.php',
        'Genesis\\CustomBlocks\\Blocks\\Controls\\Url' => __DIR__ . '/../..' . '/php/Blocks/Controls/Url.php',
        'Genesis\\CustomBlocks\\Blocks\\Field' => __DIR__ . '/../..' . '/php/Blocks/Field.php',
        'Genesis\\CustomBlocks\\Blocks\\Loader' => __DIR__ . '/../..' . '/php/Blocks/Loader.php',
        'Genesis\\CustomBlocks\\Blocks\\TemplateEditor' => __DIR__ . '/../..' . '/php/Blocks/TemplateEditor.php',
        'Genesis\\CustomBlocks\\ComponentAbstract' => __DIR__ . '/../..' . '/php/ComponentAbstract.php',
        'Genesis\\CustomBlocks\\ComponentInterface' => __DIR__ . '/../..' . '/php/ComponentInterface.php',
        'Genesis\\CustomBlocks\\Plugin' => __DIR__ . '/../..' . '/php/Plugin.php',
        'Genesis\\CustomBlocks\\PluginAbstract' => __DIR__ . '/../..' . '/php/PluginAbstract.php',
        'Genesis\\CustomBlocks\\PluginInterface' => __DIR__ . '/../..' . '/php/PluginInterface.php',
        'Genesis\\CustomBlocks\\PostTypes\\BlockPost' => __DIR__ . '/../..' . '/php/PostTypes/BlockPost.php',
        'Genesis\\CustomBlocks\\Util' => __DIR__ . '/../..' . '/php/Util.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitc13b71b5eb1d156340ce78737ed71011::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitc13b71b5eb1d156340ce78737ed71011::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitc13b71b5eb1d156340ce78737ed71011::$classMap;

        }, null, ClassLoader::class);
    }
}
