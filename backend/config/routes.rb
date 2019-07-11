Rails.application.routes.draw do
  resources :tournaments
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users
  resources :events
  resources :groups
  resources :applies, only: [:create]

  # NEAR EVENTS (GROUPS, TOURNAMENTS, GAMES)
  post '/near_events', to: 'application#near_events'
  post '/discover_games_or_groups', to: 'application#near_events_on_discover'
  post '/fetch_events_on_discover', to: 'application#fetch_events_on_discover'

  # USER GROUPS
  get '/users/:id/groups', to: 'users#show_groups'
  get '/user/groups', to: 'groups#user_groups'
  post '/notifications/:id/accept_user', to: 'groups#accept_user'

  # leave group
  delete '/user/groups/:id/leave', to: 'users#leave_group'

  #user notifications
  get '/user/notifications', to: 'users#user_notifications'
  get '/user/notifications_read', to: 'users#user_notifications_read'
  get '/user/notifications_unread', to: 'users#user_notifications_unread'
  patch '/user/notifications/:id/read', to: 'users#read_notification'
  patch '/user/notifications/:id/unread', to: 'users#unread_notification'
  delete '/notifications/:id', to: 'users#delete_notification'

  # USER EVENTS
  get '/user/past_events', to: 'users#past_events'
  get '/user/upcoming_events', to: 'users#upcoming_events'
  post '/games/join', to: 'events#join'
  delete '/games/cancel', to: 'events#cancel_join'

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

  #user profile
  get '/user/profile', to: 'users#profile'
  # Not Found Erro
  get '/*a', to: 'application#not_found'

  
  
end
