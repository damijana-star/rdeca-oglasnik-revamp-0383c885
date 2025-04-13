
<?php get_header(); ?>

<main class="flex-grow">
    <?php 
    // Home page components
    get_template_part('template-parts/hero');
    get_template_part('template-parts/stats-bar');
    get_template_part('template-parts/advertising-benefits');
    get_template_part('template-parts/blog');
    get_template_part('template-parts/contact-form');
    ?>
</main>

<?php get_footer(); ?>
