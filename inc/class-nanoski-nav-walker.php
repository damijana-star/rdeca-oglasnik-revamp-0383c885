
<?php
/**
 * Custom Navigation Walker for Primary Menu
 */
class Nanoski_Nav_Walker extends Walker_Nav_Menu {
    /**
     * Starts the element output.
     */
    public function start_el(&$output, $item, $depth = 0, $args = array(), $id = 0) {
        $classes = empty($item->classes) ? array() : (array) $item->classes;
        
        // Add custom classes for styling
        $classes[] = 'nav-link';
        $classes[] = 'text-foreground';
        $classes[] = 'hover:text-dark-red';
        $classes[] = 'font-medium';
        $classes[] = 'transition-colors';
        $classes[] = 'duration-300';
        
        $class_names = join(' ', apply_filters('nav_menu_css_class', array_filter($classes), $item, $args, $depth));
        $class_names = $class_names ? ' class="' . esc_attr($class_names) . '"' : '';
        
        $output .= '<a' . $class_names . ' href="' . esc_url($item->url) . '">';
        $output .= apply_filters('the_title', $item->title, $item->ID);
        $output .= '</a>';
    }
}

/**
 * Custom Navigation Walker for Mobile Menu
 */
class Nanoski_Mobile_Nav_Walker extends Walker_Nav_Menu {
    /**
     * Starts the element output.
     */
    public function start_el(&$output, $item, $depth = 0, $args = array(), $id = 0) {
        $classes = empty($item->classes) ? array() : (array) $item->classes;
        
        // Add custom classes for styling
        $classes[] = 'nav-link';
        $classes[] = 'text-foreground';
        $classes[] = 'hover:text-dark-red';
        $classes[] = 'font-medium';
        $classes[] = 'transition-colors';
        $classes[] = 'duration-300';
        $classes[] = 'block';
        $classes[] = 'py-2';
        
        $class_names = join(' ', apply_filters('nav_menu_css_class', array_filter($classes), $item, $args, $depth));
        $class_names = $class_names ? ' class="' . esc_attr($class_names) . '"' : '';
        
        $output .= '<a' . $class_names . ' href="' . esc_url($item->url) . '">';
        $output .= apply_filters('the_title', $item->title, $item->ID);
        $output .= '</a>';
    }
}
