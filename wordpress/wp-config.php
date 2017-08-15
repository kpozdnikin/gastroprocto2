<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'gastroprocto');

/** MySQL database username */
define('DB_USER', 'gastroprocto');

/** MySQL database password */
define('DB_PASSWORD', '22sd7NNm3qyzV6Jq');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'q-ii[))#YA/N`e]qImHrh<|.#4+1K9J=[6v5:}@CcSsxKBl8-@a>QQ!E.EQ,kfNr');
define('SECURE_AUTH_KEY',  'WU`J,KqPahSe;Xn.Y>U~;,~0205mf2=-NI-4FEFIuW2lYTf]|0a0*X3y~B0)qZ+@');
define('LOGGED_IN_KEY',    'ldddzX7j8W=mY1s6R>F=/mEuarV}q^YAzCyJRLRv+d1XDp=pD#CduC?.LYSL%w(=');
define('NONCE_KEY',        '#2kYaTXBkEaUz[X)8 X-<ibfiU?Nb]/(HhZL@R@) %dPzD|BY|v^=N!D9HElIRS8');
define('AUTH_SALT',        'FQm|rWMb]0A=cDw%)/Bg#5VW4*)2Z^MFM$Fy9SOz}-~?%&rrsA(5vN&vw#Fqh1W^');
define('SECURE_AUTH_SALT', 'Pa&?Ajo4gwg8_5CRI1UQ]i8Yn(ug.R.$Jw+NnvP<-&# |~CT^>YU|`G j8&.-bYW');
define('LOGGED_IN_SALT',   '7_ off)+c_1l-JM,cn9EIx_}u8{TAD=$%FdD0?dTuxR>29rFpdC^<]0&X)8wvA8M');
define('NONCE_SALT',       '#oy]J:@`mHf/P^/P4(<WS7JuU&3-9lyPXhfCEX*w]5b|{M3tH$y%eyOn<)2I7~7:');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
