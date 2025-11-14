Create new configuration file for your React app
# Create nginx configuration for your domain
sudo nano /etc/nginx/sites-available/petwell.anorix.co


# Create symbolic link to enable the site
sudo ln -s /etc/nginx/sites-available/petwell.anorix.co /etc/nginx/sites-enabled/

# Test nginx configuration
sudo nginx -t