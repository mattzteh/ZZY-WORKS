class Api::CartItemsController < ApplicationController

    def index
        if current_user
            @cart_items = current_user.cart_items
            render :index
        else 
            render json: []
        end 
    end

    def create
        current_user.cart_items.each do |cart_item|
            if cart_item.product_id == (params[:cart_item][:product_id]).to_i
                cart_item.quantity += 1
                cart_item.save
                @cart_item = cart_item
                render :show
                return
            end
        end 
        @cart_item = CartItem.new(cart_item_params)
        @cart_item.quantity = 1

        if @cart_item.save
            render :show
        else
            render :json ['Invalid Product'], status: 422
        end
    end

    def update
        @cart_item = CartItem.find_by(id: params[:cart_item_id])

        if @cart_item
            if params[:behavior]== 'increment'
                @cart_item.quantity += 1
                @cart_item.save
                render :show
            else
                @cart_item.quantity -= 1
                @cart_item.save
                render :show
            end
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
        params.require(:cart_item).permit(:user_id, :product_id)
    end
     
end