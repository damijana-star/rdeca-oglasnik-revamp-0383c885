
<?php get_header(); ?>

<main class="flex-grow py-10">
    <div class="container mx-auto px-4">
        <?php
        if (have_posts()) :
            while (have_posts()) :
                the_post();
                ?>
                <article id="post-<?php the_ID(); ?>" <?php post_class('max-w-4xl mx-auto'); ?>>
                    <header class="mb-8 text-center">
                        <h1 class="text-3xl md:text-4xl font-bold mb-4"><?php the_title(); ?></h1>
                    </header>

                    <div class="prose max-w-none">
                        <?php the_content(); ?>
                    </div>
                </article>
                <?php
            endwhile;
        else :
            get_template_part('template-parts/content', 'none');
        endif;
        ?>
    </div>
</main>

<?php get_footer(); ?>
