class Api::ReviewsController < ApplicationController

    def create
        @review = Review.new(review_params)

        if @review.save
            render :show
        else
            render json: { errors: @review.errors.full_messages } #, status: :unprocessable_entity
        end
    end

    def show
        @review = Review.find_by(id: params[:id])
    end

    def update
        
    end

    def destroy
        @review = current_user.reviews.find_by(id: [params[:id]])
        if @review && @review.destroy
            render :show
        end
    end

    def index
        @reviews = Review.all
    end

    private
    def review_params
        params.require(:reviews).permit(:rating, :title, :body)
    end
end
