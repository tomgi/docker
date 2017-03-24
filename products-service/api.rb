require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/json'

set :bind, '0.0.0.0'
set :port, 4567

get '/' do
  json :products => [
        'coffee',
        'tea',
        'choco'
    ]
end