require "yaml"
require "sprockets"
require "haml"

class Rubyconf < Sinatra::Base

  set :app_path, '/'

  configure :development do

  end

  set :logging, true
  set :method_override, true
  set :assets, Sprockets::Environment.new

  # Configure sprockets
  settings.assets.append_path "assets/js"
  settings.assets.append_path "assets/js/collections"
  settings.assets.append_path "assets/js/models"
  settings.assets.append_path "assets/js/views"
  settings.assets.append_path "assets/js/routers"
  settings.assets.append_path "assets/js/libs"
  settings.assets.append_path "assets/img"
  settings.assets.append_path "assets/css"

  # For compressed JS and CSS output
  #require "yui/compressor"
  #settings.assets.js_compressor  = YUI::JavaScriptCompressor.new
  #settings.assets.css_compressor = YUI::CssCompressor.new

  get "/" do
    haml :index
  end

  get "/js/:file.js" do
    content_type "application/javascript"
    settings.assets["#{params[:file]}.js"]
  end

  get "/css/:file.css" do
    content_type "text/css"
    settings.assets["#{params[:file]}.css"]
  end

  get "/images/:file" do
    file = params[:file].split(".")
    content_type "text/image"
    settings.assets["#{file[0]}.#{file[1]}"]
  end


end