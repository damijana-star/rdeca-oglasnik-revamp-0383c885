
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site min-h-screen flex flex-col">
    <header class="bg-white shadow-sm sticky top-0 z-50">
        <div class="container py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <?php if (has_custom_logo()): ?>
                        <?php the_custom_logo(); ?>
                    <?php else: ?>
                        <a href="<?php echo esc_url(home_url('/')); ?>" class="text-dark-red transition-transform duration-300 hover:scale-105">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo.png" alt="<?php bloginfo('name'); ?>" class="h-10">
                        </a>
                    <?php endif; ?>
                </div>

                <nav class="hidden md:flex items-center space-x-6">
                    <a href="<?php echo esc_url(home_url('/')); ?>" class="nav-link text-foreground hover:text-dark-red font-medium transition-colors duration-300 flex items-center gap-1">
                        <i class="fas fa-home"></i>
                        Domov
                    </a>
                    <a href="<?php echo esc_url(home_url('/blog')); ?>" class="nav-link text-foreground hover:text-dark-red font-medium transition-colors duration-300">
                        Nasveti
                    </a>
                    <a href="<?php echo esc_url(home_url('/')); ?>#contact" class="nav-link text-foreground hover:text-dark-red font-medium transition-colors duration-300 contact-link">
                        Kontakt
                    </a>
                    <a href="<?php echo esc_url(home_url('/view-pdf')); ?>" class="inline-flex items-center gap-2 border border-[#e32530] text-[#e32530] px-4 py-2 rounded hover:bg-gray-50">
                        <i class="fas fa-file-pdf"></i> Prelistaj
                    </a>
                    <a href="<?php echo esc_url(home_url('/')); ?>#contact" class="inline-flex items-center gap-2 bg-[#e32530] text-white px-4 py-2 rounded hover:bg-[#e32530]/90 transform transition-all duration-300 hover:scale-105 hover:shadow-md contact-link">
                        <i class="fas fa-paper-plane"></i>
                        Oddaj oglas
                    </a>
                </nav>

                <div class="md:hidden">
                    <button id="mobile-menu-toggle" class="text-foreground p-2 transition-transform duration-300 hover:scale-110" aria-label="Toggle menu">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
            </div>

            <div id="mobile-menu" class="md:hidden mt-4 pb-4 transition-all duration-300 overflow-hidden max-h-0 opacity-0">
                <nav class="flex flex-col space-y-4">
                    <a href="<?php echo esc_url(home_url('/')); ?>" class="nav-link text-foreground hover:text-dark-red font-medium transition-colors duration-300 flex items-center gap-1">
                        <i class="fas fa-home"></i>
                        Domov
                    </a>
                    <a href="<?php echo esc_url(home_url('/blog')); ?>" class="nav-link text-foreground hover:text-dark-red font-medium transition-colors duration-300">
                        Nasveti
                    </a>
                    <a href="<?php echo esc_url(home_url('/')); ?>#contact" class="nav-link text-foreground hover:text-dark-red font-medium transition-colors duration-300 contact-link">
                        Kontakt
                    </a>
                    <a href="<?php echo esc_url(home_url('/view-pdf')); ?>" class="inline-flex items-center justify-center gap-2 border border-[#e32530] text-[#e32530] px-4 py-2 rounded hover:bg-gray-50">
                        <i class="fas fa-file-pdf"></i> Prelistaj
                    </a>
                    <a href="<?php echo esc_url(home_url('/')); ?>#contact" class="inline-flex items-center justify-center gap-2 bg-[#e32530] text-white px-4 py-2 rounded hover:bg-[#e32530]/90 w-full transform transition-all duration-300 hover:scale-105 hover:shadow-md contact-link">
                        <i class="fas fa-paper-plane"></i>
                        Oddaj oglas
                    </a>
                </nav>
            </div>
        </div>
    </header>
