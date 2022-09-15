class Api::ProductsController < ApplicationController

    def show
        @product = Product.find_by(id: params[:id])
        render :show
    end

    def index
        @products = Product.all
        render :index
    end

    def search
        query = params[:query]
        @products = Product.where('name ILIKE ?', "%#{query}%")

        if @products.length > 0
            render :index
        else
            render :index
        end
    end

end