Rails.application.routes.draw do
  root :to =>"comments#show"
  resources :comments
end