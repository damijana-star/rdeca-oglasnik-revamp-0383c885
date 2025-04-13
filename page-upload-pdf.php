
<?php
/**
 * Template Name: PDF Upload
 */

get_header();
?>

<main class="flex-grow py-10">
    <div class="container mx-auto px-4">
        <header class="mb-8 text-center">
            <h1 class="text-3xl md:text-4xl font-bold mb-4">Naloži PDF</h1>
            <p class="text-gray-600 max-w-2xl mx-auto mb-8">
                Ta stran je namenjena administratorjem za nalaganje novih izdaj oglasnika.
            </p>
        </header>

        <?php if (current_user_can('upload_files')) : ?>
            <div class="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-sm">
                <form method="post" enctype="multipart/form-data" class="space-y-6">
                    <?php wp_nonce_field('pdf_upload', 'pdf_upload_nonce'); ?>
                    
                    <div>
                        <label for="pdf_title" class="block text-sm font-medium text-gray-700 mb-1">Naslov izdaje</label>
                        <input type="text" name="pdf_title" id="pdf_title" required class="w-full rounded-md border-gray-300 shadow-sm focus:border-dark-red focus:ring focus:ring-dark-red focus:ring-opacity-50">
                    </div>
                    
                    <div>
                        <label for="pdf_date" class="block text-sm font-medium text-gray-700 mb-1">Datum izdaje</label>
                        <input type="date" name="pdf_date" id="pdf_date" required class="w-full rounded-md border-gray-300 shadow-sm focus:border-dark-red focus:ring focus:ring-dark-red focus:ring-opacity-50">
                    </div>
                    
                    <div>
                        <label for="pdf_file" class="block text-sm font-medium text-gray-700 mb-1">PDF datoteka</label>
                        <input type="file" name="pdf_file" id="pdf_file" accept=".pdf" required class="w-full border border-gray-300 rounded-md px-3 py-2">
                    </div>
                    
                    <div>
                        <button type="submit" name="submit_pdf" class="w-full inline-flex items-center justify-center px-4 py-2 bg-dark-red text-white rounded-md hover:bg-dark-red/90">
                            <i class="fas fa-upload mr-2"></i> Naloži PDF
                        </button>
                    </div>
                </form>
                
                <?php
                // Process form submission (in a real implementation, this would be in functions.php)
                if (isset($_POST['submit_pdf']) && isset($_POST['pdf_upload_nonce']) && wp_verify_nonce($_POST['pdf_upload_nonce'], 'pdf_upload')) {
                    // Handle file upload
                    if (!empty($_FILES['pdf_file']['name'])) {
                        $upload = wp_handle_upload($_FILES['pdf_file'], array('test_form' => false));
                        
                        if (isset($upload['url']) && !isset($upload['error'])) {
                            echo '<div class="mt-6 p-4 bg-green-50 text-green-700 rounded-md">PDF uspešno naložen!</div>';
                        } else {
                            echo '<div class="mt-6 p-4 bg-red-50 text-red-700 rounded-md">Napaka pri nalaganju: ' . $upload['error'] . '</div>';
                        }
                    }
                }
                ?>
            </div>
        <?php else : ?>
            <div class="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-sm text-center">
                <i class="fas fa-lock text-4xl text-gray-400 mb-4"></i>
                <h2 class="text-xl font-bold mb-2">Dostop zavrnjen</h2>
                <p class="text-gray-600 mb-4">Za dostop do te strani potrebujete administratorske pravice.</p>
                <a href="<?php echo esc_url(home_url('/')); ?>" class="inline-flex items-center justify-center px-4 py-2 bg-dark-red text-white rounded-md hover:bg-dark-red/90">
                    <i class="fas fa-home mr-2"></i> Nazaj na domačo stran
                </a>
            </div>
        <?php endif; ?>
    </div>
</main>

<?php get_footer(); ?>
