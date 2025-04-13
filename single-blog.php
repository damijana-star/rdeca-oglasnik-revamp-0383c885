
<?php get_header(); ?>

<main class="flex-grow py-10">
    <div class="container mx-auto px-4">
        <?php
        if (have_posts()) :
            while (have_posts()) :
                the_post();
                $categories = get_the_terms(get_the_ID(), 'category');
                $category_name = $categories ? $categories[0]->name : 'Marketing';
                ?>
                <article id="post-<?php the_ID(); ?>" <?php post_class('max-w-4xl mx-auto'); ?>>
                    <header class="mb-8">
                        <div class="flex items-center text-sm text-gray-500 mb-4">
                            <span class="bg-[#e32530] text-white text-xs font-semibold px-2 py-1 rounded mr-3">
                                <?php echo $category_name; ?>
                            </span>
                            <time datetime="<?php echo get_the_date('c'); ?>"><?php echo get_the_date(); ?></time>
                            <span class="mx-2">•</span>
                            <span><?php the_author(); ?></span>
                        </div>
                        
                        <h1 class="text-3xl md:text-4xl font-bold mb-4"><?php the_title(); ?></h1>
                    </header>

                    <?php if (has_post_thumbnail()) : ?>
                        <div class="mb-8 rounded-lg overflow-hidden">
                            <?php the_post_thumbnail('large', array('class' => 'w-full h-auto')); ?>
                        </div>
                    <?php endif; ?>

                    <div class="prose max-w-none">
                        <?php the_content(); ?>
                    </div>

                    <footer class="mt-8 pt-6 border-t border-gray-200">
                        <div class="flex flex-wrap items-center justify-between">
                            <div class="mb-4 md:mb-0">
                                <?php the_tags('<span class="mr-2">Tags:</span> ', ', ', ''); ?>
                            </div>
                            <div class="flex space-x-4">
                                <a href="https://www.facebook.com/sharer/sharer.php?u=<?php the_permalink(); ?>" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-[#e32530]">
                                    <i class="fab fa-facebook-f"></i> <span class="ml-1">Deli</span>
                                </a>
                                <a href="https://twitter.com/intent/tweet?url=<?php the_permalink(); ?>&text=<?php the_title(); ?>" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-[#e32530]">
                                    <i class="fab fa-twitter"></i> <span class="ml-1">Tweet</span>
                                </a>
                            </div>
                        </div>
                    </footer>
                </article>

                <div class="max-w-4xl mx-auto mt-10">
                    <h3 class="text-2xl font-bold mb-6">Sorodni članki</h3>
                    <?php
                    $related_args = array(
                        'post_type' => 'blog',
                        'posts_per_page' => 3,
                        'post__not_in' => array(get_the_ID()),
                        'orderby' => 'rand',
                    );
                    $related_query = new WP_Query($related_args);

                    if ($related_query->have_posts()) :
                        echo '<div class="grid grid-cols-1 md:grid-cols-3 gap-6">';
                        while ($related_query->have_posts()) :
                            $related_query->the_post();
                            ?>
                            <div class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                                <div class="relative h-36 overflow-hidden">
                                    <?php if (has_post_thumbnail()) : ?>
                                        <?php the_post_thumbnail('medium', array('class' => 'w-full h-full object-cover transition-transform duration-500 hover:scale-105')); ?>
                                    <?php else : ?>
                                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/placeholder.jpg" alt="<?php the_title(); ?>" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">
                                    <?php endif; ?>
                                </div>
                                <div class="p-4">
                                    <h4 class="font-semibold text-lg mb-2"><?php the_title(); ?></h4>
                                    <a href="<?php the_permalink(); ?>" class="inline-flex items-center text-[#e32530] font-medium hover:underline text-sm">
                                        Preberi več <i class="fas fa-external-link-alt ml-1 w-3 h-3"></i>
                                    </a>
                                </div>
                            </div>
                            <?php
                        endwhile;
                        echo '</div>';
                    endif;
                    wp_reset_postdata();
                    ?>
                </div>
                <?php
            endwhile;
        endif;
        ?>
    </div>
</main>

<?php get_footer(); ?>
