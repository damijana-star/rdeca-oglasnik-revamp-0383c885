
<?php
/**
 * Template Name: PDF Viewer
 */

get_header();
?>

<main class="flex-grow py-10">
    <div class="container mx-auto px-4">
        <header class="mb-8 text-center">
            <h1 class="text-3xl md:text-4xl font-bold mb-4">Prelistaj Oglasnik</h1>
            <p class="text-gray-600 max-w-2xl mx-auto mb-8">
                Prelistajte najnovejšo izdajo Nanoski Oglasnika ali si oglejte arhiv preteklih izdaj.
            </p>
        </header>

        <div class="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-sm">
            <?php
            // Get PDF URL from custom field (you would add this in WordPress admin)
            $pdf_url = get_post_meta(get_the_ID(), '_pdf_url', true);
            
            if (empty($pdf_url)) {
                // Default PDF if none is set - using the site URL to ensure proper path
                $pdf_url = get_template_directory_uri() . '/assets/pdf/oglasnik-april-2025.pdf';
            }
            ?>
            
            <div class="aspect-w-16 aspect-h-12 border border-gray-200 rounded-lg overflow-hidden mb-6">
                <iframe src="<?php echo esc_url($pdf_url); ?>" class="w-full h-[600px]"></iframe>
            </div>
            
            <div class="text-center">
                <a href="<?php echo esc_url($pdf_url); ?>" download class="inline-flex items-center justify-center px-6 py-3 bg-dark-red text-white rounded-md hover:bg-dark-red/90 transition-colors">
                    <i class="fas fa-download mr-2"></i> Prenesi PDF
                </a>
            </div>
        </div>
        
        <div class="max-w-4xl mx-auto mt-12">
            <h2 class="text-2xl font-bold mb-6">Arhiv preteklih izdaj</h2>
            
            <?php
            // This would typically be populated from a custom post type or custom fields
            // For the template, we'll use dummy data
            $archives = array(
                array(
                    'title' => 'April 2025',
                    'date' => '01.04.2025',
                    'url' => get_template_directory_uri() . '/assets/pdf/oglasnik-april-2025.pdf',
                ),
                array(
                    'title' => 'Marec 2025',
                    'date' => '01.03.2025',
                    'url' => get_template_directory_uri() . '/assets/pdf/oglasnik-marec-2025.pdf',
                ),
                array(
                    'title' => 'Februar 2025',
                    'date' => '01.02.2025',
                    'url' => get_template_directory_uri() . '/assets/pdf/oglasnik-februar-2025.pdf',
                ),
            );
            ?>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <?php foreach ($archives as $archive) : ?>
                    <a href="<?php echo esc_url($archive['url']); ?>" class="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                        <div class="flex items-center">
                            <div class="bg-gray-100 p-3 rounded-full mr-4">
                                <i class="fas fa-file-pdf text-dark-red"></i>
                            </div>
                            <div>
                                <h3 class="font-semibold"><?php echo esc_html($archive['title']); ?></h3>
                                <p class="text-sm text-gray-500">
                                    Objavljeno: <?php echo esc_html($archive['date']); ?>
                                </p>
                            </div>
                        </div>
                    </a>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>
