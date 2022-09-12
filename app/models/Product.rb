# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  price       :float            not null
#  color       :string
#  description :text             not null
#  size        :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Product < ApplicationRecord

    has_many_attached :photos
    has_many :reviews,
        dependent: :destroy

    has_one :cart_item
end
