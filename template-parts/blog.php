
<div id="blog" class="section bg-white">
    <div class="container">
        <h2 class="text-2xl md:text-3xl font-bold mb-2">Nasveti</h2>
        <p class="text-gray-600 mb-8">Najnovejši članki, nasveti in novice iz sveta oglasov in marketinga</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <?php
            $args = array(
                'post_type' => 'blog',
                'posts_per_page' => 3,
                'orderby' => 'date',
                'order' => 'DESC',
            );
            
            $blog_query = new WP_Query($args);
            $delay = 0;
            
            if ($blog_query->have_posts()) {
                while ($blog_query->have_posts()) {
                    $blog_query->the_post();
                    $categories = get_the_terms(get_the_ID(), 'category');
                    $category_name = $categories ? $categories[0]->name : 'Marketing';
                    ?>
                    <div class="bg-white rounded-lg overflow-hidden shadow-sm card-hover border border-gray-100 transition-all duration-300 hover:shadow-md animate-fade-in" style="animation-delay: <?php echo $delay; ?>s">
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
                            <h3 class="font-semibold text-xl mb-3"><?php the_title(); ?></h3>
                            <p class="text-gray-600 mb-4 text-sm line-clamp-3">
                                <?php echo wp_trim_words(get_the_excerpt(), 20, '...'); ?>
                            </p>
                            <a href="<?php the_permalink(); ?>" class="inline-flex items-center text-[#e32530] font-medium hover:underline">
                                Preberi več <i class="fas fa-external-link-alt ml-1 w-4 h-4"></i>
                            </a>
                        </div>
                    </div>
                    <?php
                    $delay += 0.1;
                }
                wp_reset_postdata();
            } else {
                echo '<p>No blog posts found.</p>';
            }
            ?>
        </div>
        
        <div class="text-center mt-10">
            <a href="<?php echo get_post_type_archive_link('blog'); ?>" class="inline-flex items-center justify-center bg-[#e32530] hover:bg-[#e32530]/90 transition-transform duration-300 hover:scale-105 text-white px-4 py-2 rounded">
                Vsi članki
                <i class="fas fa-external-link-alt ml-1 h-4 w-4"></i>
            </a>
        </div>
    </div>
</div>
