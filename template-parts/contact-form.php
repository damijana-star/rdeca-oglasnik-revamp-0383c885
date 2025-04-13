
<div id="contact" class="section bg-gray-50">
    <div class="container">
        <div class="text-center mb-12">
            <h2 class="text-2xl md:text-3xl font-bold mb-2">Kontaktirajte nas</h2>
            <p class="text-gray-600 max-w-2xl mx-auto">
                Imate vprašanje ali potrebujete dodatne informacije? Izpolnite spodnji obrazec in odgovorili vam bomo v najkrajšem možnem času.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
            <div class="bg-white p-8 rounded-lg shadow-sm">
                <?php
                // Check if Contact Form 7 is active
                if (function_exists('wpcf7_contact_form')) {
                    // Get a contact form with ID 1 (create this in WP admin)
                    echo do_shortcode('[contact-form-7 id="1" title="Contact Form"]');
                } else {
                    // Fallback form
                    ?>
                    <form id="contact-form" method="post" class="space-y-6">
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700">Ime in priimek</label>
                            <input type="text" name="name" id="name" required class="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-dark-red focus:ring focus:ring-dark-red focus:ring-opacity-50">
                        </div>
                        
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700">E-pošta</label>
                            <input type="email" name="email" id="email" required class="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-dark-red focus:ring focus:ring-dark-red focus:ring-opacity-50">
                        </div>
                        
                        <div>
                            <label for="phone" class="block text-sm font-medium text-gray-700">Telefonska številka</label>
                            <input type="tel" name="phone" id="phone" required class="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-dark-red focus:ring focus:ring-dark-red focus:ring-opacity-50">
                        </div>
                        
                        <div>
                            <label for="message" class="block text-sm font-medium text-gray-700">Sporočilo</label>
                            <textarea name="message" id="message" rows="4" required class="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-dark-red focus:ring focus:ring-dark-red focus:ring-opacity-50"></textarea>
                        </div>
                        
                        <button type="submit" class="w-full inline-flex items-center justify-center px-4 py-2 bg-dark-red text-white rounded-md hover:bg-dark-red/90">
                            <i class="fas fa-paper-plane mr-2"></i> Pošlji sporočilo
                        </button>
                    </form>
                    <div id="form-success" class="p-4 bg-green-50 text-green-700 rounded-md text-center hidden">
                        Vaše sporočilo je bilo uspešno poslano! Hvala za kontakt.
                    </div>
                    <script>
                        document.addEventListener('DOMContentLoaded', function() {
                            const form = document.getElementById('contact-form');
                            const success = document.getElementById('form-success');
                            
                            form.addEventListener('submit', function(e) {
                                e.preventDefault();
                                // In a real implementation, this would send data to a server
                                // For demonstration, we'll just show success message
                                form.style.display = 'none';
                                success.classList.remove('hidden');
                            });
                        });
                    </script>
                    <?php
                }
                ?>
            </div>
            
            <div class="bg-white p-8 rounded-lg shadow-sm">
                <h3 class="text-xl font-semibold mb-6">Kontaktni podatki</h3>
                
                <div class="space-y-6">
                    <div class="flex items-start">
                        <i class="fas fa-phone-alt text-dark-red mr-4 h-5 w-5 mt-1"></i>
                        <div>
                            <h4 class="font-medium mb-1">Telefon</h4>
                            <p class="text-gray-600">031 646 666</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start">
                        <i class="fas fa-envelope text-dark-red mr-4 h-5 w-5 mt-1"></i>
                        <div>
                            <h4 class="font-medium mb-1">E-pošta</h4>
                            <p class="text-gray-600">info@nanoski-oglasnik.eu</p>
                        </div>
                    </div>
                    
                    <div>
                        <h4 class="font-medium mb-1">Delovni čas</h4>
                        <p class="text-gray-600">Ponedeljek - Petek: 9:00 - 17:00</p>
                        <p class="text-gray-600">Sobota: 9:00 - 13:00</p>
                        <p class="text-gray-600">Nedelja: Zaprto</p>
                    </div>
                    
                    <div>
                        <h4 class="font-medium mb-1">Naslov</h4>
                        <address class="text-gray-600 not-italic">
                            Volče 88<br>
                            5220 Tolmin<br>
                            Slovenija
                        </address>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
