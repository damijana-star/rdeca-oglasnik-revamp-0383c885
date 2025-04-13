
<?php get_header(); ?>

<main class="flex-grow py-20">
    <div class="container mx-auto px-4 text-center">
        <h1 class="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 class="text-2xl font-semibold text-gray-700 mb-8">Stran ni bila najdena</h2>
        <p class="text-gray-600 mb-8 max-w-lg mx-auto">Oprostite, stran, ki jo iščete, ne obstaja ali je bila premaknjena.</p>
        <a href="<?php echo esc_url(home_url('/')); ?>" class="inline-flex items-center justify-center px-6 py-3 bg-dark-red text-white rounded-md hover:bg-dark-red/90 transition-colors">
            <i class="fas fa-home mr-2"></i> Nazaj na domačo stran
        </a>
    </div>
</main>

<?php get_footer(); ?>
