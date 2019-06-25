Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users
  resources :events
  resources :groups

  # USER GROUPS
  get '/users/:id/groups', to: 'users#show_groups'
  # USER EVENTS
  get '/users/:id/events', to: 'users#show_events'

  # Event Users
  get '/events/:id/users', to: 'events#users'

  # Group Users
  get '/groups/:id/users', to: 'groups#users'
end
