
<div class="partner-logo-carousel">
    <div class="flex items-center justify-center flex-wrap gap-6 md:gap-10">
        <?php
        $logos = array(
            '/assets/images/partners/logo1.png',
            '/assets/images/partners/logo2.png',
            '/assets/images/partners/logo3.png',
            '/assets/images/partners/logo4.png',
            '/assets/images/partners/logo5.png',
            '/assets/images/partners/logo6.png',
            '/assets/images/partners/logo7.png',
            '/assets/images/partners/logo8.png',
        );
        
        foreach ($logos as $logo) {
            echo '<div class="partner-logo bg-white p-2 rounded-lg shadow-sm">';
            echo '<img src="' . get_template_directory_uri() . $logo . '" alt="Partner Logo" class="h-16 object-contain">';
            echo '</div>';
        }
        ?>
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Simple animation for logos
    const logos = document.querySelectorAll('.partner-logo');
    logos.forEach((logo, index) => {
        logo.style.animationDelay = `${index * 0.1}s`;
        logo.classList.add('fade-in');
    });
});
</script>
