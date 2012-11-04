require File.expand_path('../app/version', __FILE__)

Gem::Specification.new do |gem|
  gem.authors       = ["Fazle Taher"]
  gem.email         = ["ftaher@gmail.com"]
  gem.description   = %q{Todo: Write application description}
  gem.summary       = %q{Todo: Write application summary}
  gem.homepage      = ""

  gem.files         = `git ls-files`.split($\)
  gem.executables   = gem.files.grep(%r{^bin/}).map{ |f| File.basename(f) }
  gem.test_files    = gem.files.grep(%r{^(test|spec|features)/})
  gem.name          = "rubyconf"
  gem.require_paths = ["app"]
  gem.version       = Rubyconf::VERSION
  gem.add_runtime_dependency "sinatra"
  gem.add_runtime_dependency "unicorn"
  gem.add_runtime_dependency "sprockets"
  gem.add_runtime_dependency "yui-compressor"
  gem.add_runtime_dependency "haml"

  gem.add_development_dependency "rspec"
  gem.add_development_dependency "jasmine"
  gem.add_development_dependency "factory-girl"
  #gem.add_development_dependency "capybara"
  #gem.add_development_dependency "poltergeist"

  gem.add_development_dependency "capistrano"
end
