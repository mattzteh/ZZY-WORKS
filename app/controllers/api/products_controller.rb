class Api::ProductsController < ApplicationController

    def show
        @product = Product.find_by(id: params[:id])
        render :show
    end

    def index
        @products = Product.all
        render :index
    end

end