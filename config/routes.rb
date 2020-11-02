require 'sidekiq/web'

Rails.application.routes.draw do
  mount Sidekiq::Web => '/sidekiq'

  root to: 'teams#index'
  resources :teams, only: [:create, :destroy]
  get '/:slug', to: 'teams#show'
  resources :channels, only: [:show, :create, :destroy]
  resources :talks, only: [:show]
  resources :team_users, only: [:create, :destroy]

  devise_for :users, :controllers => { registrations: 'registrations' }
  mount ActionCable.server => '/cable'

  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
