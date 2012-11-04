require_relative "rubyconf"
require 'rack/test'
require 'rspec'

require 'factory_girl'
require 'factories'

# set test environment
Sinatra::Base.set :environment, :test
Sinatra::Base.set :run, false
Sinatra::Base.set :raise_errors, true
Sinatra::Base.set :logging, false



module RackTestHelpers
  module MyApp
    def app
      Rubyconf
    end
  end
end

RSpec.configure do |config|
  config.include Rack::Test::Methods
  config.include RackTestHelpers::MyApp
end