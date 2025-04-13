
<?php get_header(); ?>

<main class="flex-grow py-10">
    <div class="container mx-auto px-4">
        <header class="mb-10 text-center">
            <h1 class="text-3xl md:text-4xl font-bold mb-4">Nasveti in članki</h1>
            <p class="text-gray-600 max-w-2xl mx-auto">Najnovejši članki, nasveti in novice iz sveta oglasov in marketinga</p>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <?php
            if (have_posts()) :
                while (have_posts()) :
                    the_post();
                    $categories = get_the_terms(get_the_ID(), 'category');
                    $category_name = $categories ? $categories[0]->name : 'Marketing';
                    ?>
                    <div class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                        <div class="relative h-48 overflow-hidden">
                            <?php if (has_post_thumbnail()) : ?>
                                <?php the_post_thumbnail('medium', array('class' => 'w-full h-full object-cover transition-transform duration-500 hover:scale-105')); ?>
                            <?php else : ?>
                                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/placeholder.jpg" alt="<?php the_title(); ?>" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">
                            <?php endif; ?>
                            <span class="absolute top-2 right-2 bg-[#e32530] text-white text-xs font-semibold px-2 py-1 rounded">
                                <?php echo $category_name; ?>
                            </span>
                        </div>
                        <div class="p-6">
                            <h2 class="font-semibold text-xl mb-3"><?php the_title(); ?></h2>
                            <p class="text-gray-600 mb-4 text-sm">
                                <?php the_excerpt(); ?>
                            </p>
                            <a href="<?php the_permalink(); ?>" class="inline-flex items-center text-[#e32530] font-medium hover:underline">
                                Preberi več <i class="fas fa-external-link-alt ml-1 w-4 h-4"></i>
                            </a>
                        </div>
                    </div>
                    <?php
                endwhile;
            else :
                get_template_part('template-parts/content', 'none');
            endif;
            ?>
        </div>

        <div class="mt-10">
            <?php the_posts_pagination(array(
                'mid_size' => 2,
                'prev_text' => '<i class="fas fa-arrow-left"></i> Nazaj',
                'next_text' => 'Naprej <i class="fas fa-arrow-right"></i>',
                'class' => 'flex justify-center',
            )); ?>
        </div>
    </div>
</main>

<?php get_footer(); ?>
