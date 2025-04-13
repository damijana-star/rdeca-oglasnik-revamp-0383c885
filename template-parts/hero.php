
<div class="relative text-white py-16 md:py-24">
    <!-- Background image with overlay -->
    <div class="absolute inset-0 z-0">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/hero-bg.png" alt="Mountain landscape" class="w-full h-full object-cover transition-transform duration-[30s] hover:scale-110">
        <div class="absolute inset-0 bg-dark-red/70"></div>
    </div>
    
    <!-- Content -->
    <div class="container relative z-10">
        <div class="max-w-3xl mx-auto text-center">
            <p class="font-heading font-extrabold uppercase mb-8 text-7xl tracking-tight transition-all duration-1000 transform opacity-100 translate-y-0">
                OGLAŠUJ TAM,<br />KJER TE RES VIDIJO
            </p>
            <p class="font-body text-lg md:text-xl mb-12 opacity-90 transition-all duration-1000 delay-300 transform opacity-100 translate-y-0">
                Distribucija po Notranjsko-kraški, Notranjsko-obalni in Goriški regiji zagotavlja visoko prepoznavnost in direkten stik z vašimi strankami.
            </p>
        </div>
        
        <div class="mt-8 transition-all duration-1000 delay-600 transform opacity-100 translate-y-0">
            <?php get_template_part('template-parts/partner-logo-carousel'); ?>
        </div>
    </div>
</div>
