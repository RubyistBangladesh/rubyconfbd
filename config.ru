require "sinatra/base"

APP_ROOT = File.expand_path(File.dirname(__FILE__))
$: << "#{APP_ROOT}/app/"

# rubyconf - app

require "rubyconf"

map Rubyconf.app_path do
  run Rubyconf
end