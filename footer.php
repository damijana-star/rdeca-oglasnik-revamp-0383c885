
    <footer class="bg-gray-100 pt-12 pb-6 text-center" id="footer">
        <hr class="mb-8 mx-auto max-w-4xl border-t border-gray-200">

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 max-w-6xl mx-auto">
            <div id="about" class="fade-in text-center">
                <h3 class="mb-4 flex justify-center">
                    <?php if (has_custom_logo()): ?>
                        <?php the_custom_logo(); ?>
                    <?php else: ?>
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo.png" alt="<?php bloginfo('name'); ?>" class="h-8 transition-transform duration-300 hover:scale-105">
                    <?php endif; ?>
                </h3>
                <p class="text-gray-600 mb-4">
                    Oglasnik za NOTRANJSKO-KRAŠKO, OBALNO-KRAŠKO in GORIŠKO regijo.
                </p>
                <div class="flex space-x-4 justify-center">
                    <a href="https://www.facebook.com/profile.php?id=61575021988033" target="_blank" rel="noopener noreferrer" class="text-dark-red hover:text-white hover:bg-dark-red rounded-full p-2 transition-all duration-300 hover:scale-110">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="mailto:info@nanoski-oglasnik.eu" class="text-dark-red hover:text-white hover:bg-dark-red rounded-full p-2 transition-all duration-300 hover:scale-110">
                        <i class="fas fa-envelope"></i>
                    </a>
                </div>
            </div>

            <div class="fade-in text-left">
                <h3 class="font-bold mb-4 text-dark-red text-left">Povezave</h3>
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'footer',
                    'container' => false,
                    'menu_class' => 'space-y-2',
                    'fallback_cb' => false,
                ));
                ?>
            </div>

            <div id="contact" class="fade-in text-left">
                <h3 class="font-bold mb-4 text-dark-red text-left">Kontakt</h3>
                <div class="space-y-3">
                    <div class="flex items-center transition-transform duration-300 hover:translate-x-1">
                        <i class="fas fa-phone-alt mr-2 text-dark-red"></i>
                        <span class="text-gray-600">031 646 666</span>
                    </div>
                    <div class="flex items-center transition-transform duration-300 hover:translate-x-1">
                        <i class="fas fa-envelope mr-2 text-dark-red"></i>
                        <span class="text-gray-600">info@nanoski-oglasnik.eu</span>
                    </div>
                    <address class="text-gray-600 not-italic transition-transform duration-300 hover:translate-x-1">
                        Volče 88<br>
                        5220 Tolmin<br>
                        Slovenija
                    </address>
                </div>
            </div>
        </div>

        <hr class="mb-6 mx-auto max-w-4xl border-t border-gray-200">

        <div class="text-center text-gray-500 text-sm">
            © <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. Vse pravice pridržane.
        </div>
    </footer>

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
