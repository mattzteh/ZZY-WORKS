class Api::CartItems_Controller < ApplicationController

    def index
        @cart_items = CartItems.all
    end

    def create
        @cart_item = current_user.cart_items.new(cart_item_params)

        if @cart_item.save
            render :show
        else
            render :json {errors: ['Unable to add item to cart.']}
        end
    end

    def update
        @cart_item = CartItem.find_by(id: params[:id]) 
        
        if @cart_item.update(review_params) && @cart_item && current_user.id = @cart_item.user_id
            @cart_item
            render :show
        else
            render json: {errors: ['Unable to update cart.']}
        end

    end

    def destroy
        @cart_item = current_user.cart_items.find_by(id: [params[:id]])
        if @cart_item && @cart_item.destroy
            render :show
        end
    end

    private
    def cart_item_params
        params.require(:cart_item).permit(:quantity, :user_id, :product_id)
    end
     
end