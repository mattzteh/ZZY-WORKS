class Api::CartItems_Controller < ApplicationController

    def index
        @cart_items = CartItems.all
    end

    def create
    end

    def update
    end

    def destroy
    end

    private
    def cart_item_params
    end
     
end