
# WordPress Conversion Instructions

This document provides instructions for completing the conversion from a React application to a WordPress theme.

## Steps to Complete the Conversion

1. **Theme Setup**
   - Upload the entire theme folder to your WordPress installation's `wp-content/themes/` directory
   - Activate the theme through the WordPress admin dashboard

2. **Configure Menus**
   - Create a "Primary Menu" for the header navigation
   - Create a "Footer Menu" for the footer links
   - Assign these menus in Appearance > Menus > Manage Locations

3. **Create Pages**
   - Create a "Home" page and set it as your front page in Settings > Reading
   - Create a "Blog" page
   - Create a "PDF Viewer" page using the PDF Viewer template

4. **Install Required Plugins**
   - Contact Form 7 for the contact form functionality
   - Advanced Custom Fields for custom fields and meta boxes

5. **Custom Post Types**
   - The theme automatically registers a "Blog" custom post type
   - Create some sample blog posts to populate the blog section

6. **Assets Migration**
   - Copy all images from the React app's `public/lovable-uploads/` directory to `wp-content/themes/nanoski-oglasnik/assets/images/`
   - Ensure all logo images are properly placed in `assets/images/partners/`

7. **Contact Form Setup**
   - Create a contact form using Contact Form 7
   - Use the form ID in the contact form template section

8. **PDF Functionality**
   - Upload PDF files to your media library
   - Create a PDF Viewer page and add the PDF URL to the custom field

9. **Custom CSS Processing**
   - For production, you'll need to process the Tailwind CSS file
   - Install Node.js and run `npx tailwindcss -i ./assets/css/tailwind.css -o ./assets/css/style.css` if needed

10. **Testing and Optimization**
    - Test all functionality across different devices and browsers
    - Optimize images for web using WordPress image optimization plugins

## Advanced Customization

- Edit the PHP template files to customize layouts and functionality
- Modify `functions.php` to add or change theme features
- Use WordPress hooks and filters for deeper customization

## Resources

- WordPress Theme Developer Handbook: https://developer.wordpress.org/themes/
- Tailwind CSS Documentation: https://tailwindcss.com/docs
- Contact Form 7 Documentation: https://contactform7.com/docs/
