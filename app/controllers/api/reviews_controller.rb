class Api::ReviewsController < ApplicationController

    # wrap_parameters include: Review.attribute_names + ['user_id', 'product_id']

    def create
        @review = current_user.reviews.new(review_params)

        if @review.save
            render :show
        else
            render json: { errors: ['Invalid input'] }
        end
    end


    def update
        @review = current_user.reviews.find_by(id: [params[:id]])
       

        if @review.update(review_params) && @review && current_user.id = @review.user_id
            @review
            render :show
        else
            render json: {errors: ['Invalid input.']}
        end

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
        params.require(:review).permit(:rating, :title, :body, :user_id, :product_id)
    end
end
