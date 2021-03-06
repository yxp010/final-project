require_relative 'boot'
require 'rack/cors'
require 'rails/all'


# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Backend
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2

    # ALLOW RAILS TO USE HTTP ONLY COOKIES
    config.middleware.use ActionDispatch::Cookies
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins 'http://localhost:3001'
        # origins '*'
        
        resource( 
          '*', 
          headers: :any, 
          methods: [:get, :post, :options, :patch, :delete]
        )
      end
    end

  
  end
end
