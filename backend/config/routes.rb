Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users
  resources :events
  resources :groups

  # NEAR EVENTS (GROUPS, TOURNAMENTS, GAMES)
  post '/near_events', to: 'application#near_events'

  # USER GROUPS
  get '/users/:id/groups', to: 'users#show_groups'
  get '/user/groups', to: 'groups#user_groups'

  # USER EVENTS
  get '/users/:id/events', to: 'users#show_events'

  # Event Users
  get '/events/:id/users', to: 'events#users'

  # Group Users
  get '/groups/:id/users', to: 'groups#users'
  
  # Log out
  post '/logout', to: 'application#logout'
  # Check Login 
  post '/login_check', to: 'application#check_login'

  # auth login
  post '/auth/login', to: 'authentication#login'

  # Not Found Erro
  get '/*a', to: 'application#not_found'
end
