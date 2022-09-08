json.product do
  json.extract! @product, :id, :name, :price, ,:description, :color, :size
end