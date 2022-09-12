json.extract! @review, :id, :title, :body ,:rating, :user_id, :product_id
json.extract! @review.user, :first_name, :last_name