@products.each do |product|
    json.set! product.id do
        json.extract! product, :id, :name, :price
        if product.photos.attached?
            json.photo_url product.photos.map {|product | product.url}
        end
    end
end