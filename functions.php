
<?php
/**
 * Nanoski Oglasnik functions and definitions
 */

// Theme setup
function nanoski_setup() {
    // Add default posts and comments RSS feed links to head
    add_theme_support('automatic-feed-links');

    // Let WordPress manage the document title
    add_theme_support('title-tag');

    // Enable support for Post Thumbnails on posts and pages
    add_theme_support('post-thumbnails');

    // Register menu locations
    register_nav_menus(array(
        'primary' => esc_html__('Primary Menu', 'nanoski-oglasnik'),
        'footer' => esc_html__('Footer Menu', 'nanoski-oglasnik'),
    ));

    // HTML5 support
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
}
add_action('after_setup_theme', 'nanoski_setup');

// Enqueue scripts and styles
function nanoski_scripts() {
    // Enqueue main stylesheet
    wp_enqueue_style('nanoski-style', get_stylesheet_uri(), array(), '1.0');
    
    // Enqueue Tailwind CSS
    wp_enqueue_style('nanoski-tailwind', get_template_directory_uri() . '/assets/css/tailwind.css', array(), '1.0');
    
    // Enqueue theme JavaScript
    wp_enqueue_script('nanoski-navigation', get_template_directory_uri() . '/assets/js/navigation.js', array(), '1.0', true);
    
    // Font Awesome for icons (alternative to Lucide)
    wp_enqueue_script('font-awesome', 'https://kit.fontawesome.com/a076d05399.js', array(), null, true);
}
add_action('wp_enqueue_scripts', 'nanoski_scripts');

// Register widget areas
function nanoski_widgets_init() {
    register_sidebar(array(
        'name'          => esc_html__('Sidebar', 'nanoski-oglasnik'),
        'id'            => 'sidebar-1',
        'description'   => esc_html__('Add widgets here.', 'nanoski-oglasnik'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));
    
    register_sidebar(array(
        'name'          => esc_html__('Footer Widget Area', 'nanoski-oglasnik'),
        'id'            => 'footer-1',
        'description'   => esc_html__('Add footer widgets here.', 'nanoski-oglasnik'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'nanoski_widgets_init');

// Custom post type for Blog
function nanoski_custom_post_types() {
    register_post_type('blog', array(
        'labels' => array(
            'name' => __('Blog Posts'),
            'singular_name' => __('Blog Post')
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-format-aside',
        'rewrite' => array('slug' => 'blog')
    ));
}
add_action('init', 'nanoski_custom_post_types');

// Add custom meta box for contact form 
function nanoski_add_meta_boxes() {
    add_meta_box(
        'contact_info',
        'Contact Information',
        'nanoski_contact_info_callback',
        'page',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'nanoski_add_meta_boxes');

function nanoski_contact_info_callback($post) {
    wp_nonce_field('nanoski_contact_meta_box', 'nanoski_contact_meta_box_nonce');
    
    $phone = get_post_meta($post->ID, '_contact_phone', true);
    $email = get_post_meta($post->ID, '_contact_email', true);
    $address = get_post_meta($post->ID, '_contact_address', true);
    
    echo '<p><label for="contact_phone">Phone:</label>';
    echo '<input type="text" id="contact_phone" name="contact_phone" value="' . esc_attr($phone) . '" size="25" /></p>';
    
    echo '<p><label for="contact_email">Email:</label>';
    echo '<input type="email" id="contact_email" name="contact_email" value="' . esc_attr($email) . '" size="25" /></p>';
    
    echo '<p><label for="contact_address">Address:</label>';
    echo '<textarea id="contact_address" name="contact_address" rows="3" cols="25">' . esc_textarea($address) . '</textarea></p>';
}

function nanoski_save_meta_box_data($post_id) {
    if (!isset($_POST['nanoski_contact_meta_box_nonce'])) {
        return;
    }
    if (!wp_verify_nonce($_POST['nanoski_contact_meta_box_nonce'], 'nanoski_contact_meta_box')) {
        return;
    }
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    
    if (isset($_POST['contact_phone'])) {
        update_post_meta($post_id, '_contact_phone', sanitize_text_field($_POST['contact_phone']));
    }
    if (isset($_POST['contact_email'])) {
        update_post_meta($post_id, '_contact_email', sanitize_email($_POST['contact_email']));
    }
    if (isset($_POST['contact_address'])) {
        update_post_meta($post_id, '_contact_address', sanitize_textarea_field($_POST['contact_address']));
    }
}
add_action('save_post', 'nanoski_save_meta_box_data');
