Rails.application.routes.draw do
  root to: 'activities#index'

  devise_for :users
  resources :activities
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
