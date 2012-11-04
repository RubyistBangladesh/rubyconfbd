# define paths and filenames
deploy_to = "/home/apache/web/rubyapps/rubyconfbd"
sin_root = "#{deploy_to}/current"
pid_file = "#{deploy_to}/shared/pids/unicorn.pid"
socket_file= "#{deploy_to}/shared/unicorn.sock"
log_file = "#{sin_root}/log/unicorn.log"
err_log = "#{sin_root}/log/unicorn_error.log"
old_pid = pid_file + '.oldbin'

timeout 30
worker_processes 2 # increase or decrease
listen socket_file, :backlog => 1024
listen 8882, :tcp_nopush => true

pid pid_file
stderr_path err_log
stdout_path log_file

# make forks faster
preload_app true

# make sure that Bundler finds the Gemfile
before_exec do |server|
  ENV['BUNDLE_GEMFILE'] = File.expand_path('../Gemfile', File.dirname(__FILE__))
end
