class Api::ReviewsController < ApplicationController

    def create
        @review = Review.new(review_params)

        if @review.save
            render :index
        else
            render json: { errors: @review.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        @review = Review.find_by(id: params[:id])
    end

    def update
    end

    def destroy
    end

    def index
        @reviews = Review.all
    end

    private
    def review_params
        params.require(:reviews).permit(:rating, :title, :body)
    end
end
