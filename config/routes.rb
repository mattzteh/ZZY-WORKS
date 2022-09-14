Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :session, only: [:show, :create, :destroy]
    resources :products, only: [:show, :index] do
      resources :reviews, only: [:index]
      collection do
        get 'search/:query', to: "products#search", as: "search"
      end
    end
    resources :reviews, only: [:create, :destroy, :update]
    resources :cart_items, only: [:index, :create, :destroy]

    patch "cart_items/:cart_item_id/:behavior", to:  "cart_items#update", as: "update"

  end

  get '*path', to: "static_pages#frontend_index"
  
end
