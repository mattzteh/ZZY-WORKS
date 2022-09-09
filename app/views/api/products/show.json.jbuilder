json.product do
    json.extract! @product, :id, :name, :price,:description, :color, :size
    if @product.photos.attached?
        json.photo_url @product.photos.map { |product| product.url}
    end
end

json.reviews do
    @product.reviews.each do |review|
        json.set! review.id do 
            json.extract! review, :id, :title, :body, :user_id, :product_id
        end
    end
end