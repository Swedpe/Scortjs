<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link http://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'incalinu_scortjs');

/** MySQL database username */
define('DB_USER', 'incalinu_scort');

/** MySQL database password */
define('DB_PASSWORD', 'databasescort1234');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

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
define('AUTH_KEY',         'XAX5Y%V5~ON*R6+KaLS9z #@L2eZD?^y>s|)Q`l|h++7R}&8@cExq7VwDE0AU40C');
define('SECURE_AUTH_KEY',  'I;=^}5%wEK^AR|qQz&sy$Pj&fK!1eE+}wI-UEVZ?j &M!%d>gvm9KUhU.$HEfCKS');
define('LOGGED_IN_KEY',    'J9j4|(X{-&-+4:UbbY.ZY+QeXonYw@(=o#JpENEJr&j<l-.lW^{WW-[0O=msGqq4');
define('NONCE_KEY',        '49-I/vd=D30<pnOvb8SH%c k y)$~rHdMm@RRtBn!C?^!IudpkvHq`l&|=G2Qm]$');
define('AUTH_SALT',        'z)z+GdU^?xs+#!n1v5AQ9bjZYMOjs/+RhG9+|dKY8i<R-{fGj)-zX+#|s9M2vZzq');
define('SECURE_AUTH_SALT', ' P./!kgNG$Py(ymMHy!e)ASA+H7(}?-|YA07m<u|8OoI:Y=}#5 Yr7)*|*r1|x3K');
define('LOGGED_IN_SALT',   'QhAv:AUZ2:8..xecbV^/FAz.uce6kq?s$3a++=)@Tel!ibM/$FJ~xc|q38?&i_Fp');
define('NONCE_SALT',       'Xs0~9.MN>1CuCangp,8b__5i1.t7kj|=x2;I8~7b2D2LST~N/28nk.U]yl#jV^XJ');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', true);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
