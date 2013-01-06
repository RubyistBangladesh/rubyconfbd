#!/usr/bin/env rake
require "bundler/gem_tasks"
require "rspec/core/rake_task"

RSpec::Core::RakeTask.new do |task|
  task.rspec_opts =["-c", "-f progress", "-r ./spec/spec_helper.rb"]
  task.pattern = "spec/**/*_spec.rb"
end
begin
  require 'jasmine'
  load 'jasmine/tasks/jasmine.rake'
rescue LoadError
  task :jasmine do
    abort "Jasmine is not available. In order to run jasmine, you must: (sudo) gem install jasmine"
  end
end
