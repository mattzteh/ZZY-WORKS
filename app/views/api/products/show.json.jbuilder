json.extract! @product, :id, :name, :price,:description, :color, :size
if @product.photos.attached?
            json.photo_url @product.photos.map {|product | product.url}
end
