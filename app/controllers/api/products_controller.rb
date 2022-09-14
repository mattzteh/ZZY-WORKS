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
        @products = Product.where('name ILIKE ? OR description ILIKE ?',  "%#{query}%", "%#{query}%")

        if @products.length > 0
            render :index
        else
            render json: ["No matches."], status: 404
        end
    end

end