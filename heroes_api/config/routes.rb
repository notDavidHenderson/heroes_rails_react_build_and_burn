Rails.application.routes.draw do
  resources :heros, only: :index
  resources :powers, only: :index
  resources :weapons, only: :index
end
