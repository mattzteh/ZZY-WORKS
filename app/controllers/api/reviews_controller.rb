class Api::ReviewsController < ApplicationController

    def create
        @review = Review.new(review_params)

        if @review.save
            render :index
        else
            render json: { errors: ['Invalid input.'] }
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
        render :index
    end

    private

    def review_params
        params.require(:review).permit(:rating, :title, :body)
    end
end
