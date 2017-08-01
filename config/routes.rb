Rails.application.routes.draw do
  root to: 'vue#index'

  devise_for :users
  resources :activities
  resources :bookings

  get 'user/:get_user', to: 'user#get_user'
  get '/*path', to: 'vue#index', format: false

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
